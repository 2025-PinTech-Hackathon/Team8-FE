import React, { useState } from 'react';
import * as S from '../Challenge/Challenge.style';
import ChallengeHeader from '../Challenge/components/ChallengeHeader/ChallengeHeader';
import TabData from '../../pages/Home/components/TabData/TabData';
import Challengelist from '../Challenge/components/Challengelist/Challengelist';
import { useNavigate } from 'react-router-dom';

function Challenge() {
  const userName = '김광운';

  const statusTabs = ['모집전', '진행중', '진행완료'];
  const [selectedStatus, setSelectedStatus] = useState('모집전');

  const categoryTabs = ['장학금', '청년주거', '문화혜택'];
  const [selectedCategory, setSelectedCategory] = useState(null);

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
