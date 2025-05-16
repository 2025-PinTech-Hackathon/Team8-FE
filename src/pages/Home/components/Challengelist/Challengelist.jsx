import React from 'react';
import * as S from './Challengelist.style';
import { useNavigate } from 'react-router-dom';

const ChallengeList = ({ category }) => {
  const navigate = useNavigate();

  const dummyArray = [
    { challengeId: 1, title: '오늘의 챌린지 1' },
    { challengeId: 2, title: '오늘의 챌린지 2' },
    { challengeId: 3, title: '오늘의 챌린지 3' },
  ];

  return (
    <S.ListWrapper>
      {dummyArray.map((item) => (
        <S.Card
          key={item.challengeId}
          onClick={() => navigate(`/home/challenge/${item.challengeId}`)}
        >
          <S.Title>{item.title}</S.Title>
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
