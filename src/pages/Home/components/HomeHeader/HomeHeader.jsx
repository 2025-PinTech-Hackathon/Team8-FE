import * as S from '../HomeHeader/HomeHeader.style';

function HomeHeader({ name, selectedTab, onTabChange }) {
  const activeIndex = selectedTab === '정보' ? 0 : 1;
  return (
    <S.HeaderContainer>
      <S.WelcomeText>
        <strong>{name}</strong>님을 위한 <br />
        맞춤형 정보를 준비했어요!
      </S.WelcomeText>
      <S.TabWrapper>
        <S.TabBackground activeIndex={activeIndex} />
        <S.TabButton
          active={selectedTab === '정보'}
          onClick={() => onTabChange('정보')}
        >
          정보
        </S.TabButton>

        <S.TabButton
          active={selectedTab === '챌린지'}
          onClick={() => onTabChange('챌린지')}
        >
          챌린지
        </S.TabButton>
      </S.TabWrapper>
    </S.HeaderContainer>
  );
}

export default HomeHeader;
