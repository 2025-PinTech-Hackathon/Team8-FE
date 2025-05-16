import React from 'react';
import * as S from './Finlist.style';
import { useNavigate } from 'react-router-dom';

const Finlist = ({ category }) => {
  const navigate = useNavigate();

  const dummyArray = [
    { finId: 1, title: '꿈나무장학재단 장학생 모집 안내' },
    { finId: 2, title: '서울형 장학금 모집' },
    { finId: 3, title: '저소득층 자기소개서 공모전' },
    { finId: 4, title: '대학 장학금 신청법 특강' },
    { finId: 5, title: '2025 청년 장학 프로그램' },
  ];

  return (
    <S.ListWrapper>
      {dummyArray.map((item) => (
        <S.Card
          key={item.finId}
          onClick={() => navigate(`/home/fin/${item.finId}`)}
        >
          <S.Title>{item.title}</S.Title>
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
