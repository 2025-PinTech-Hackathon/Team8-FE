import * as S from "./SelectTab.style";

const tabs = ["진행도", "달력"];

const SelectTab = ({ selectedTab, onTabChange }) => {
  // 선택된 탭의 인덱스로 백그라운드 위치 계산
  const activeIndex = tabs.findIndex((t) => t === selectedTab);

  return (
    <S.HeaderContainer>
      <S.TabWrapper>
        <S.TabBackground activeIndex={activeIndex} />
        {tabs.map((tab) => (
          <S.TabButton
            key={tab}
            active={selectedTab === tab}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </S.TabButton>
        ))}
      </S.TabWrapper>
    </S.HeaderContainer>
  );
};

export default SelectTab;
