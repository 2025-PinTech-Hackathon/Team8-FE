import React, { useEffect, useState } from 'react';
import * as S from './Finlist.style';
import NoContents from '../../../../assets/CommonComponents/NoContents/NoContents';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Finlist = ({ category }) => {
  const navigate = useNavigate();
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
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

    const fetchFeeds = async () => {
      try {
        const token = localStorage.getItem('access_token');

        const response = await axios.get(
          'https://fintory.coldot.kr/main/information',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              tag: tagParam,
            },
          }
        );

        setFeeds(response.data.feeds); // ✅ 'feeds'가 아니라 'challenges'를 꺼냄
      } catch (error) {
        console.error('금융 정보 불러오기 실패:', error);
      }
    };

    fetchFeeds();
  }, [category]);

  return (
    <S.ListWrapper>
      {feeds.length === 0 ? (
        <NoContents />
      ) : (
        feeds &&
        feeds.map((item) => (
          <S.Card
            key={item.informationId}
            onClick={() => navigate(`/home/fin/${item.informationId}`)}
          >
            <S.Title>{item.title}</S.Title>
            <S.Description>{item.content}</S.Description>
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

export default Finlist;
