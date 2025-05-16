import React from 'react';
import * as S from './Finlist.style';

const Finlist = ({ category }) => {
  const dummyArray = Array(5).fill(null);

  return (
    <S.ListWrapper>
      {dummyArray.map((_, index) => (
        <S.Card key={index}>
          <S.Title>꿈나무장학재단 장학생 모집 안내</S.Title>
          <S.Description>
            소득 분위 무관하게 추천서 및 자기소개서만으로 신청할 수 있는
            장학제도입니다. 신청 조건에 충족하여 추천드립니다.
          </S.Description>
          <S.ButtonWrapper>
            <S.DetailButton>{category ? category : '자세히'}</S.DetailButton>
          </S.ButtonWrapper>
        </S.Card>
      ))}
    </S.ListWrapper>
  );
};

export default Finlist;
