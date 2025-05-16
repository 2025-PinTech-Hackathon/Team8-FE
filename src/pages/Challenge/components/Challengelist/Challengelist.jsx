import React, { useEffect, useState } from "react";
import * as S from "./Challengelist.style";
import Person from "../../../../assets/Images/person.svg";
import { useNavigate } from "react-router-dom";

const ChallengeList = ({ status, category }) => {
  const dummyData = [
    {
      title: "1주일 야식 참기 챌린지",
      challengeId: 1,
      groupId: 101,
      progress: 60,
      startDate: "2025.05.13",
      endDate: "2025.05.19",
      participants: 3,
      status: "모집전",
      category: "장학금",
    },
    {
      title: "청년 월세 지원 챌린지",
      challengeId: 3,
      groupId: 102,
      progress: 85,
      startDate: "2025.05.01",
      endDate: "2025.05.31",
      participants: 5,
      status: "진행중",
      category: "청년주거",
    },
    {
      title: "뮤지컬 관람 챌린지",
      challengeId: 4,
      groupId: 10,
      progress: 100,
      startDate: "2025.04.01",
      endDate: "2025.04.10",
      participants: 8,
      status: "진행완료",
      category: "문화혜택",
    },
  ];

  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const filteredData = dummyData.filter((item) => {
    const statusMatch = item.status === status;
    const categoryMatch = category ? item.category === category : true;
    return statusMatch && categoryMatch;
  });

  return (
    <S.ListWrapper>
      {filteredData.map((item, idx) => (
        <S.Card
          key={idx}
          onClick={() => navigate(`/home/challenger/${roomId}`)}
        >
          <S.TopRow>
            <S.Title>{item.title}</S.Title>
            <S.Participant>
              {Array.from({ length: Math.min(item.participants, 5) }).map(
                (_, i) => (
                  <img key={i} src={Person} alt="person" width={16} />
                )
              )}
              {item.participants > 5 && <span>+{item.participants - 5}</span>}
            </S.Participant>
          </S.TopRow>
          <S.ProgressWrapper>
            진행률
            <S.ProgressBar>
              <S.ProgressFill width={visible ? `${item.progress}%` : "0%"} />
            </S.ProgressBar>
          </S.ProgressWrapper>
          <S.DateText>
            기간{" "}
            <span>
              {item.startDate} ~ {item.endDate}
            </span>
          </S.DateText>
        </S.Card>
      ))}
    </S.ListWrapper>
  );
};

export default ChallengeList;
