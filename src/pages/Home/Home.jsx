import React, { useState } from 'react';
import Header from '../../assets/CommonComponents/Header/Header';

function Home() {
  const userName = '김광운'; //api 연결시 변경해야함
  const [selectedTab, setSelectedTab] = useState('정보');

  return (
    <div>
      <Header
        name={userName}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
      />
      <h1>Home Page</h1>
      {selectedTab === '정보' && <div>정보 콘텐츠 영역</div>}
      {selectedTab === '챌린지' && <div>챌린지 콘텐츠 영역</div>}
    </div>
  );
}

export default Home;
