import React from 'react';
import * as S from '../ChallengeHeader/ChallengeHeader.style';

function ChallengeHeader({ name, selectedTab, onTabChange, onInviteClick }) {
  const activeIndex =
    selectedTab === '모집전'
      ? 0
      : selectedTab === '진행중'
      ? 1
      : selectedTab === '진행완료'
      ? 2
      : 0;
  return (
    <S.HeaderContainer>
      <S.TopRow>
        <S.WelcomeText>
          <strong>{name}</strong>님의 챌린지<br></br>
        </S.WelcomeText>
        <S.WelcomeText2>지금 도전 중인 챌린지를 확인해보세요!</S.WelcomeText2>
      </S.TopRow>

      <S.TabWrapper>
        <S.TabBackground activeIndex={activeIndex} />
        <S.TabButton
          active={selectedTab === '모집전'}
          onClick={() => onTabChange('모집전')}
        >
          모집전
        </S.TabButton>

        <S.TabButton
          active={selectedTab === '진행중'}
          onClick={() => onTabChange('진행중')}
        >
          진행중
        </S.TabButton>
        <S.TabButton
          active={selectedTab === '진행완료'}
          onClick={() => onTabChange('진행완료')}
        >
          진행완료
        </S.TabButton>
      </S.TabWrapper>
    </S.HeaderContainer>
  );
}

export default ChallengeHeader;
