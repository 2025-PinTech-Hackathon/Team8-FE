import React, { useState } from 'react';
import * as S from '../Home/Home.style';
import HomeHeader from '../Home/components/HomeHeader/HomeHeader.jsx';
// import challengelist from '../Home/components/Challengelist/Challengelist.jsx';
// import Finlist from '../Home/components/Finlist/Finlist.jsx';
function Home() {
  const userName = '김광운'; //api 연결시 변경해야함
  const [selectedTab, setSelectedTab] = useState('정보');

  return (
    <div>
      <HomeHeader
        name={userName}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
      />
      <S.ContentsArea>
        <h1>Home Page</h1>
        {selectedTab === '정보' && <div>정보 콘텐츠 영역</div>}
        {selectedTab === '챌린지' && <div>챌린지 콘텐츠 영역</div>}
      </S.ContentsArea>
    </div>
  );
}

export default Home;
