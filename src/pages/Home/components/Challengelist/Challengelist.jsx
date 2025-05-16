import React from 'react';
import * as S from './Challengelist.style';

const ChallengeList = ({ category }) => {
  const dummyArray = Array(3).fill(null);

  return (
    <S.ListWrapper>
      {dummyArray.map((_, index) => (
        <S.Card key={index}>
          <S.Title>오늘의 챌린지 {index + 1}</S.Title>
          <S.Description>
            하루에 1가지 목표를 달성하면 포인트가 지급돼요! 챌린지에
            도전해보세요 💪
          </S.Description>
          <S.ButtonWrapper>
            <S.DetailButton>{category ? category : ''}</S.DetailButton>
          </S.ButtonWrapper>
        </S.Card>
      ))}
    </S.ListWrapper>
  );
};

export default ChallengeList;
