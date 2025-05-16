import React, { useState, useEffect } from 'react';
import * as S from './Challengelist.style';
import { useNavigate } from 'react-router-dom';
import NoContents from '../../../../assets/CommonComponents/NoContents/NoContents';
import axios from 'axios';

const Challengelist = ({ category }) => {
  const navigate = useNavigate();
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const tagMap = {
          장학금: 'SCHOLOARSHIP',
          주거지원: 'HOUSING_SUPPORT',
          청년주거: 'YOUTH_HOUSING',
          신혼부부: 'NEWLYWED',
          여행: 'TRAVEL',
          세금: 'TAX',
          취업지원: 'EMPLOYMENT',
          보험: 'INSURANCE',
          노후: 'RETIREMENT',
          분양정보: 'SALE_INFO',
          소비: 'CONSUMPTION',
          금융교육: 'FINANCIAL_EDUCATION',
          투자: 'INVESTMENT',
        };

        const tagParam = category ? tagMap[category] || null : null;

        const response = await axios.get(
          'https://fintory.coldot.kr/main/challenge',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              tag: tagParam,
            },
          }
        );

        setFeeds(response.data.challenges);
      } catch (error) {
        console.error('챌린지 목록 불러오기 실패:', error);
      }
    };

    fetchChallenges();
  }, [category]);

  return (
    <S.ListWrapper>
      {feeds.length === 0 ? (
        <NoContents />
      ) : (
        feeds &&
        feeds.map((item) => (
          <S.Card
            key={item.challengeId}
            onClick={() => navigate(`/home/challenge/${item.challengeId}`)}
          >
            <S.Title>{item.title}</S.Title>
            <S.Description>{item.description}</S.Description>
            <S.ButtonWrapper>
              <S.DetailButton>
                {item.tag || category || '자세히'}
              </S.DetailButton>
            </S.ButtonWrapper>
          </S.Card>
        ))
      )}
    </S.ListWrapper>
  );
};

export default Challengelist;
