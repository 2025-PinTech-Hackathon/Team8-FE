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

  useEffect(() => {
    // 백엔드 준비 전까지 화면 확인용 mock 데이터
    const mock = {
      title: "1주일 야식 참기 챌린지",
      content: `
💸 1주일 야식 참기 챌린지

“살도 빼고! 돈도 모으고!”

하루 1만원, 일주일이면 7만원!
밤마다 배달앱을 켜던 손을 잠시 멈추는 것만으로,작지만 확실한 저축이 시작됩니다.

챌린지 내용

기간: 7일간, 밤 9시 이후 야식 금지
목표: 야식을 참은 만큼의 금액을 따로 저금해보기
인증 방식: 하루에 한 번! "야식 대신 저축한 금액" 인증 

참여하면 이런 변화가!

  ✔ 매일 1만 원씩 절약 → 일주일에 최대 7만 원 저축
  ✔ 불필요한 지출 차단으로 소비 습관 개선
  ✔ 내 몸과 지갑이 같이 가벼워지는 기적 ✨

참여 혜택

편의점 2000원 할인 쿠폰

참여 방법

아래 챌린지 참여하기 버튼을 눌러보세요!
`,
    };

    setData(mock);

    // 실제 API 호출
    /*
    fetch(`/feeds/challenge/${challengeId}`)
      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => console.error(err));
    */
  }, [challengeId]);

  if (!data) return <Container>Loading…</Container>;

  const { title, content } = data;

  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <FooterButton href="#">챌린지 참여하기</FooterButton>
    </Container>
  );
};

export default ChallengeDetail;
