import React, { useState } from 'react';
import * as S from '../Home/Home.style';
import HomeHeader from '../Home/components/HomeHeader/HomeHeader.jsx';
import TabData from '../Home/components/TabData/TabData.jsx';
import Finlist from '../Home/components/Finlist/Finlist.jsx';
import ChallengeList from '../Home/components/Challengelist/Challengelist.jsx';
import InputCodeModal from '../../assets/CommonComponents/InputCodeModal/InputCodeModal';

function Home() {
  //api 연결시
  const userName = '김광운';
  const categoryTabs = ['장학금', '청년주거', '문화혜택'];

  const [selectedTab, setSelectedTab] = useState('정보');
  const [selectedCategory, setSelectedCategory] = useState('');

  const [isModalOpen, setIsModalOpen] = useState(false);

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

      {/* 콘텐츠 영역 */}
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
