import React, { useState } from 'react';
import * as S from '../TabData/TabData.style.js';

const TabData = ({ tabs, selectedTab, onTabClick }) => {
  return (
    <S.TabWrapper>
      {tabs.map((tab, index) => (
        <S.TabButton
          key={index}
          selected={selectedTab === tab}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </S.TabButton>
      ))}
    </S.TabWrapper>
  );
};

export default TabData;
