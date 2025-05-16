import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Title,
  Content,
  FooterButton,
} from "./ChallengeDetail.style";

const ChallengeDetail = () => {
  const { challengeId } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) {
      setError("로그인이 필요합니다.");
      return;
    }

    fetch(`https://fintory.coldot.kr/feed/challenge/${challengeId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("데이터 요청 실패");
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        console.error("불러오기 실패:", err);
        setError("정보를 불러오는 데 실패했습니다.");
      });
  }, [challengeId]);

  const handleJoinChallenge = async () => {
    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) {
      alert("로그인이 필요합니다.");
      return;
    }

    try {
      const response = await fetch(
        `https://fintory.coldot.kr/myChallenges/${challengeId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("챌린지 참여 요청 실패");
      }

      const result = await response.json();
      console.log("참여 성공:", result);
      alert("챌린지 참여 완료!");
    } catch (error) {
      console.error("참여 오류:", error);
      alert("챌린지 참여 중 오류가 발생했습니다.");
    }
  };

  if (error) return <Container>{error}</Container>;
  if (!data) return <Container>Loading…</Container>;

  const { title, content } = data;

  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <FooterButton onClick={handleJoinChallenge}>챌린지 참여하기</FooterButton>
    </Container>
  );
};

export default ChallengeDetail;
