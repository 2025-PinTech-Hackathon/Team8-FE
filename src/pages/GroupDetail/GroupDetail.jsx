import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const { roomId } = useParams();
  const actualRoomId = roomId ?? "17";

  const [selectedTab, setSelectedTab] = useState("진행도");
  const [challenge, setChallenge] = useState(null);
  const [friends, setFriends] = useState([]);
  const [calendar, setCalendar] = useState(null);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteCode, setInviteCode] = useState("");

  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [animatedFriendProgress, setAnimatedFriendProgress] = useState([]);

  const handleModalSkip = () => setIsInviteModalOpen(false);

  const fetchInviteCode = async () => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) return;

    try {
      const res = await fetch(
        `https://fintory.coldot.kr/myChallenges/${actualRoomId}/invite`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!res.ok) {
        const errorText = await res.text();
        console.error(
          `초대 코드 오류: ${res.status} ${res.statusText}\n${errorText}`
        );
        return;
      }

      const data = await res.json();
      console.log("초대 코드 응답:", data);
      setInviteCode(data.invitedCode ?? ""); // 주의: invitedCode임
      setIsInviteModalOpen(true);
    } catch (error) {
      console.error("초대 코드 요청 실패:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) return;

      try {
        const [challengeRes, progressRes, calendarRes] = await Promise.all([
          fetch(`https://fintory.coldot.kr/myChallenges/${actualRoomId}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
          }),
          fetch(
            `https://fintory.coldot.kr/myChallenges/${actualRoomId}/progress`,
            { headers: { Authorization: `Bearer ${accessToken}` } }
          ),
          fetch(
            `https://fintory.coldot.kr/myChallenges/${actualRoomId}/calendar`,
            { headers: { Authorization: `Bearer ${accessToken}` } }
          ),
        ]);

        const challengeData = await challengeRes.json();
        const progressData = await progressRes.json();
        const calendarData = await calendarRes.json();

        setChallenge(challengeData);
        setFriends(progressData.friends);
        setCalendar({
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
          days: calendarData.days.map((d) => ({
            day: new Date(d.date).getDate(),
            isDone: d.isDone,
          })),
        });

        setAnimatedFriendProgress(progressData.friends.map(() => 0));
      } catch (err) {
        console.error("데이터를 불러오는데 실패했습니다:", err);
      }
    };

    fetchData();
  }, [roomId]);

  useEffect(() => {
    if (challenge?.progress) {
      const timer = setTimeout(() => {
        setAnimatedProgress(challenge.progress);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [challenge]);

  useEffect(() => {
    if (friends.length > 0) {
      const timer = setTimeout(() => {
        setAnimatedFriendProgress(friends.map((f) => f.progress));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [friends]);

  if (!challenge || !calendar) return <Container>Loading…</Container>;

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
          <InviteButton onClick={fetchInviteCode}>친구 초대하기</InviteButton>
        </GoalRow>
        {isInviteModalOpen && (
          <InviteCodeModal
            inviteCode={inviteCode}
            onSubmit={() => setIsInviteModalOpen(false)}
            onSkip={handleModalSkip}
          />
        )}
      </Meta>

      <ProgressWrapper>
        <ProgressBar>
          <ProgressFill progress={animatedProgress} />
        </ProgressBar>
        <ProgressText>{animatedProgress}% 달성</ProgressText>
      </ProgressWrapper>

      <SelectTab selectedTab={selectedTab} onTabChange={setSelectedTab} />

      {selectedTab === "진행도" ? (
        <FriendsSection>
          <h2>친구들 진행 현황</h2>
          <FriendList>
            {friends.map((f, index) => (
              <FriendItem key={f.friendId}>
                <span>{f.friendName}</span>
                <FriendProgress>
                  <FriendFill progress={animatedFriendProgress[index]} />
                </FriendProgress>
                <small>{animatedFriendProgress[index]}%</small>
              </FriendItem>
            ))}
          </FriendList>
        </FriendsSection>
      ) : (
        <CustomCalendar calendar={calendar} />
      )}
    </Container>
  );
};

export default GroupDetail;
