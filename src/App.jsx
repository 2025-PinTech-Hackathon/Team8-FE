import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./assets/CommonComponents/Header/Header";
import Navbar from "./assets/CommonComponents/Navbar/Navbar";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Challenge from "./pages/Challenge/Challenge";
import FinDetail from "./pages/FinDetail/FinDetail";
import ChallengeDetail from "./pages/ChallengeDetail/ChallengeDetail";
import GroupDetail from "./pages/GroupDetail/GroupDetail";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/fin/:finId" element={<FinDetail />} />
        <Route
          path="/home/challenge/:challengeId"
          element={<ChallengeDetail />}
        />
        <Route
          path="/home/challenge/:challengeId/:groupId"
          element={<GroupDetail />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/challenge" element={<Challenge />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
