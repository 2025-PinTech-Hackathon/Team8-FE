import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import { LayoutWrapper } from "./LayoutWrapper";
import Header from "./assets/CommonComponents/Header/Header";
import Navbar from "./assets/CommonComponents/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Challenge from "./pages/Challenge/Challenge";
import FinDetail from "./pages/FinDetail/FinDetail";
import ChallengeDetail from "./pages/ChallengeDetail/ChallengeDetail";
import GroupDetail from "./pages/GroupDetail/GroupDetail";
import NoContents from "./assets/CommonComponents/NoContents/NoContents";

function App() {
  return (
    <>
      <GlobalStyle />

      <LayoutWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/fin/:finId" element={<FinDetail />} />
          <Route
            path="/home/challenge/:challengeId"
            element={<ChallengeDetail />}
          />
          <Route path="/home/challenger/:roomId" element={<GroupDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="*" element={<NoContents />} />
        </Routes>

        <Navbar />
      </LayoutWrapper>
    </>
  );
}

export default App;
