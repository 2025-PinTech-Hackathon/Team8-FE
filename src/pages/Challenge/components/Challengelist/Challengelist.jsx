import React, { useEffect, useState } from 'react';
import * as S from './Challengelist.style';
import Person from '../../../../assets/Images/person.svg';
import NoContents from '../../../../assets/CommonComponents/NoContents/NoContents';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ChallengeList = ({ status, category }) => {
  const [challenges, setChallenges] = useState([]);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const params = {};
        if (category) params.tag = category;
        if (status) params.status = status;
        console.log(params);
        const token = localStorage.getItem('access_token');
        const response = await axios.get(
          'https://fintory.coldot.kr/myChallenges',
          {
            params,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = response.data.myChallenges ?? [];
        setChallenges(data);
      } catch (error) {
        console.error('챌린지 불러오기 실패:', error);
        setChallenges([]);
      }
    };

    fetchChallenges();
  }, [status, category]);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <S.ListWrapper>
      {challenges.length === 0 ? (
        <NoContents text="해당 조건의 챌린지가 없어요 😢" />
      ) : (
        challenges.map((item) => (
          <S.Card
            key={item.roomId}
            onClick={() => navigate(`/home/challenger/${item.roomId}`)}
          >
            <S.TopRow>
              <S.Title>{item.title}</S.Title>
              <S.Participant>
                {Array.from({
                  length: Math.min(item.participantsNum, 5),
                }).map((_, i) => (
                  <img key={i} src={Person} alt="person" width={16} />
                ))}
                {item.participantsNum > 5 && (
                  <span>+{item.participantsNum - 5}</span>
                )}
              </S.Participant>
            </S.TopRow>
            <S.ProgressWrapper>
              진행률
              <S.ProgressBar>
                <S.ProgressFill width={visible ? `${item.progress}%` : '0%'} />
              </S.ProgressBar>
            </S.ProgressWrapper>
            <S.DateText>
              기간{' '}
              <span>
                {item.start} ~ {item.end}
              </span>
            </S.DateText>
          </S.Card>
        ))
      )}
    </S.ListWrapper>
  );
};

export default ChallengeList;
