import React, { useState, useEffect } from "react";
import * as S from "../Home/Home.style";
import HomeHeader from "../Home/components/HomeHeader/HomeHeader.jsx";
import TabData from "../Home/components/TabData/TabData.jsx";
import Finlist from "../Home/components/Finlist/Finlist.jsx";
import ChallengeList from "../Home/components/Challengelist/Challengelist.jsx";
import InputCodeModal from "../../assets/CommonComponents/InputCodeModal/InputCodeModal";
import { useAuth } from "react-oidc-context";

function Home() {
  const auth = useAuth();

  useEffect(() => {
    if (auth.isAuthenticated && auth.user?.access_token) {
      localStorage.setItem("access_token", auth.user.access_token);
      console.log("-> access_token saved to localStorage");
    }
  }, [auth.isLoading, auth.isAuthenticated, auth.user]);

  const userName = "김광운";
  const categoryTabs = ["장학금", "청년주거", "문화혜택"];

  const [selectedTab, setSelectedTab] = useState("정보");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <S.Container>
      {isModalOpen && (
        <InputCodeModal
          onSubmit={() => setIsModalOpen(false)}
          onSkip={() => setIsModalOpen(false)}
        />
      )}
      <HomeHeader
        name={userName}
        selectedTab={selectedTab}
        onTabChange={(tab) => {
          setSelectedTab(tab);
          setSelectedCategory("");
        }}
        onInviteClick={() => setIsModalOpen(true)}
      />

      <TabData
        tabs={categoryTabs}
        selectedTab={selectedCategory}
        onTabClick={(tab) =>
          setSelectedCategory(tab === selectedCategory ? "" : tab)
        }
      />

      <S.ContentsArea>
        {selectedTab === "정보" && <Finlist category={selectedCategory} />}
        {selectedTab === "챌린지" && (
          <ChallengeList category={selectedCategory} />
        )}
      </S.ContentsArea>
    </S.Container>
  );
}

export default Home;
