import React, { useState } from 'react';
import * as S from '../Home/Home.style';
import HomeHeader from '../Home/components/HomeHeader/HomeHeader.jsx';
import TabData from '../Home/components/TabData/TabData.jsx';
import Finlist from '../Home/components/Finlist/Finlist.jsx';
import ChallengeList from '../Home/components/ChallengeList/ChallengeList.jsx';

function Home() {
  //api 연결시
  const userName = '김광운';
  const categoryTabs = ['장학금', '청년주거', '문화혜택'];

  const [selectedTab, setSelectedTab] = useState('정보');
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <S.Container>
      {/* 상단 인삿말 + 탭 */}
      <HomeHeader
        name={userName}
        selectedTab={selectedTab}
        onTabChange={(tab) => {
          setSelectedTab(tab);
          setSelectedCategory('');
        }}
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
