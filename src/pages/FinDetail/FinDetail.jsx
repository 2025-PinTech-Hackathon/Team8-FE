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

  useEffect(() => {
    // 백엔드 준비 전까지 화면 확인용 mock 데이터
    const mock = {
      title: "꿈나무 장학재단 장학생 모집 안내",
      publisherName: "꿈나무 장학재단",
      content: `
• 모집 대상
  - 국내 중·고등학교 및 대학교(휴학 중인 학생 중 이하 요건 중 하나 이상 해당되는 자)
  - 학업 성적이 우수하거나 경제적 지원이 필요한 학생
  - 사회적 배려 대상자(차상위 계층, 다문화 가족, 소촌 가족 등)
  - 학업 외 활동(예: 예체능, 과학, 봉사 등)에서 두각을 나타낸 학생

• 장학금 내용
  - 중·고등학생, 한기당 100만 원
  - 대학교(휴학 중인 경우 제외), 한기당 200만 원
  - 장학금은 학비 및 학업 관련 전용 용도로 사용

• 접수 기간
  2025년 5월 20일(월) ~ 2025년 6월 14일(금)

• 제출 서류
  1. 장학생 신청서(소정 양식)
  2. 자기소개서 및 학업계획서
  3. 성적 증명서(최근 1년)
  4. 가정형편 증빙서류(해당자에 한함)
  5. 추천서(학교장 또는 담당교사)

• 접수 방법
  - 이메일 접수: apply@kkumnamu.or.kr
  - 또는 지원 홈페이지 접수: www.kkumnamu.or.kr/scholarship

• 문의처
  - 꿈나무 장학재단 사무국
  - ☎ 02-1234-5678
  - ✉ info@kkumnamu.or.kr
`,
      createdAt: "2025-05-15T19:00:00",
    };

    setData(mock);

    // 실제 API 호출
    /*
    fetch(`/feeds/finance/${finId}`)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
    */
  }, [finId]);

  if (!data) return <Container>Loading…</Container>;

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

      <FooterButton href="#">홈페이지 바로가기</FooterButton>
    </Container>
  );
};

export default FinDetail;
