import React, { useState, useEffect } from 'react';
import * as S from '../Home/Home.style';
import HomeHeader from '../Home/components/HomeHeader/HomeHeader.jsx';
import TabData from '../Home/components/TabData/TabData.jsx';
import Finlist from '../Home/components/Finlist/Finlist.jsx';
import ChallengeList from '../Home/components/Challengelist/Challengelist.jsx';
import InputCodeModal from '../../assets/CommonComponents/InputCodeModal/InputCodeModal';
import { useAuth } from 'react-oidc-context';
import axios from 'axios';

function Home() {
  const auth = useAuth();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (auth.isAuthenticated && auth.user?.access_token) {
      localStorage.setItem('access_token', auth.user.access_token);
      console.log('-> access_token saved to localStorage');
    }
  }, [auth.isLoading, auth.isAuthenticated, auth.user]);

  const [categoryTabs, setCategoryTabs] = useState([]);
  const [selectedTab, setSelectedTab] = useState('정보');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('access_token');

        const response = await axios.get('https://fintory.coldot.kr/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUserName(response.data.name);
        setCategoryTabs(response.data.interests); // ✅ interests로 탭 구성
      } catch (error) {
        console.error('프로필 불러오기 실패:', error);
      }
    };

    fetchProfile(); // ✅ 조건 없이 바로 실행
  }, []);

  return (
    <S.Container>
      {isModalOpen && (
        <InputCodeModal
          onSubmit={() => setIsModalOpen(false)}
          onSkip={() => setIsModalOpen(false)}
        />
      )}
      <HomeHeader
        name={userName}
        selectedTab={selectedTab}
        onTabChange={(tab) => {
          setSelectedTab(tab);
          setSelectedCategory('');
        }}
        onInviteClick={() => setIsModalOpen(true)}
      />

      <TabData
        tabs={categoryTabs}
        selectedTab={selectedCategory}
        onTabClick={(tab) =>
          setSelectedCategory(tab === selectedCategory ? '' : tab)
        }
      />

      <S.ContentsArea>
        {selectedTab === '정보' && <Finlist category={selectedCategory} />}
        {selectedTab === '챌린지' && (
          <ChallengeList category={selectedCategory} />
        )}
      </S.ContentsArea>
    </S.Container>
  );
}

export default Home;
