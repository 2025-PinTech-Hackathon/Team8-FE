import React, { useState, useEffect } from 'react';
import * as S from '../Challenge/Challenge.style';
import ChallengeHeader from '../Challenge/components/ChallengeHeader/ChallengeHeader';
import TabData from '../../pages/Home/components/TabData/TabData';
import Challengelist from '../Challenge/components/Challengelist/Challengelist';
import axios from 'axios';

function Challenge() {
  const [userName, setUserName] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('모집전');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryTabs, setCategoryTabs] = useState([]);

  const statusTabs = ['모집전', '진행중', '진행완료'];
  useEffect(() => {
    const token = localStorage.getItem('access_token');

    const fetchProfile = async () => {
      try {
        const response = await axios.get('https://fintory.coldot.kr/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { name, interests } = response.data;
        setUserName(name);
        setCategoryTabs(interests ?? []);
      } catch (error) {
        console.error('프로필 불러오기 실패:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleCategoryClick = (tab) => {
    setSelectedCategory(tab === selectedCategory ? null : tab);
  };

  return (
    <S.Container>
      <ChallengeHeader
        name={userName}
        selectedTab={selectedStatus}
        onTabChange={setSelectedStatus}
      />

      <TabData
        tabs={categoryTabs}
        selectedTab={selectedCategory}
        onTabClick={handleCategoryClick}
      />

      <Challengelist status={selectedStatus} category={selectedCategory} />
    </S.Container>
  );
}

export default Challenge;
