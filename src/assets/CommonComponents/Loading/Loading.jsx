import React from 'react';
import * as S from './Loading.style';
import toriLogo from '../../../assets/Images/toriLogo.svg'; // 이미지 경로 확인해서 수정해줘

const Loading = () => {
  return (
    <S.LoadingWrapper>
      <S.ShakingImage src={toriLogo} alt="로딩 중 로고" />
      <S.LoadingText>Loading...</S.LoadingText>
    </S.LoadingWrapper>
  );
};

export default Loading;
