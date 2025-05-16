import { useState, useEffect } from "react";
import SelectTab from "./SelectTab/SelectTab";
import {
  Container,
  Title,
  StatusBadge,
  Content,
  Meta,
  InviteButton,
  GoalRow,
  HeaderContainer,
  ProgressWrapper,
  ProgressBar,
  ProgressFill,
  ProgressText,
  FriendsSection,
  FriendList,
  FriendItem,
  FriendProgress,
  FriendFill,
} from "./GroupDetail.style";
import CustomCalendar from "./Calendar/Calendar";
import InviteCodeModal from "../../assets/CommonComponents/InviteCodeModal/InviteCodeModal";

const GroupDetail = () => {
  const [selectedTab, setSelectedTab] = useState("진행도");
  const [challenge, setChallenge] = useState(null);
  const [friends, setFriends] = useState([]);
  const [calendar, setCalendar] = useState(null);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  const handleInviteButton = () => {
    setIsInviteModalOpen(true);
  };

  const handleModalSkip = () => {
    setIsInviteModalOpen(false);
  };

  useEffect(() => {
    // Mock 데이터
    setChallenge({
      title: "1주일 야식 참기 챌린지",
      status: "진행중",
      content:
        "4월 카드 거래내역에 야식 관련 결제가 전월 대비 2배 급증했어요. 1주일 간 야식을 참으면, 편의점 2,000원 할인 쿠폰을 제공해드려요!",
      start: "2025-05-13",
      end: "2025-05-19",
      progress: 65,
    });

    setFriends([
      { friendId: "1", friendName: "김광운", progress: 65 },
      { friendId: "2", friendName: "이수민", progress: 80 },
    ]);

    setCalendar({
      year: 2025,
      month: 5,
      days: Array.from({ length: 31 }, (_, i) => ({
        day: i + 1,
        isDone: Math.random() > 0.5,
      })),
    });
  }, []);

  if (!challenge || !calendar) {
    return <Container>Loading…</Container>;
  }

  return (
    <Container>
      <HeaderContainer>
        <Title>{challenge.title}</Title>
        <StatusBadge>{challenge.status}</StatusBadge>
      </HeaderContainer>
      <Content>{challenge.content}</Content>
      <Meta>
        <div>시작 날짜: {new Date(challenge.start).toLocaleDateString()}</div>
        <GoalRow>
          <div>종료 날짜: {new Date(challenge.end).toLocaleDateString()}</div>
          <InviteButton onClick={handleInviteButton}>
            친구 초대하기
          </InviteButton>
        </GoalRow>
        {isInviteModalOpen && (
          <InviteCodeModal
            onSubmit={() => setIsInviteModalOpen(false)}
            onSkip={handleModalSkip}
          />
        )}
      </Meta>
      <ProgressWrapper>
        <ProgressBar>
          <ProgressFill progress={challenge.progress} />
        </ProgressBar>
        <ProgressText>{challenge.progress}% 달성</ProgressText>
      </ProgressWrapper>

      <SelectTab selectedTab={selectedTab} onTabChange={setSelectedTab} />

      {selectedTab === "진행도" ? (
        <FriendsSection>
          <h2>친구들 진행 현황</h2>
          <FriendList>
            {friends.map((f) => (
              <FriendItem key={f.friendId}>
                <span>{f.friendName}</span>
                <FriendProgress>
                  <FriendFill progress={f.progress} />
                </FriendProgress>
                <small>{f.progress}%</small>
              </FriendItem>
            ))}
          </FriendList>
        </FriendsSection>
      ) : (
        <CustomCalendar />
      )}
    </Container>
  );
};

export default GroupDetail;
