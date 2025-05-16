import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Title,
  PublisherRow,
  PublisherName,
  Meta,
  Content,
  FooterButton,
} from "./FinDetail.style";
import { CircleUserRound } from "lucide-react";

const FinDetail = () => {
  const { finId } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) {
      setError("로그인이 필요합니다.");
      return;
    }

    fetch(`https://fintory.coldot.kr/feeds/finance/${finId}`, {
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
  }, [finId]);
  console.log(data);

  if (error) {
    return <Container>{error}</Container>;
  }

  if (!data) {
    return <Container>Loading…</Container>;
  }

  const { title, publisherName, content, createdAt } = data;

  return (
    <Container>
      <Title>{title}</Title>

      <PublisherRow>
        <CircleUserRound size={20} style={{ marginRight: "0.5rem" }} />
        <PublisherName>{publisherName}</PublisherName>
      </PublisherRow>

      <Meta>{new Date(createdAt).toLocaleString()}</Meta>

      <Content>{content}</Content>

      <FooterButton href={data.redirectUrl}>홈페이지 바로가기</FooterButton>
    </Container>
  );
};

export default FinDetail;
