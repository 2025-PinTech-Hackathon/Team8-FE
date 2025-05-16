import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  HeaderText,
  NameGenderRow,
  AgeJobRow,
  InterestsGroup,
  InputGroup,
  InputUnderline,
  Select,
  AgreementRow,
  Checkbox,
  AgreementText,
  SubmitButton,
} from "./Register.style";

const INTEREST_OPTIONS = [
  "장학금",
  "주거지원",
  "청년주거",
  "신혼부부",
  "여행",
  "세금",
  "취업지원",
  "보험",
  "노후",
  "분양정보",
];

const Register = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [ageRange, setAgeRange] = useState("");
  const [job, setJob] = useState("");
  const [interests, setInterests] = useState([]);
  const [isAgreed, setIsAgreed] = useState(false);

  const navigate = useNavigate();

  const toggleInterest = (item) => {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const isFormValid =
    name.trim() !== "" &&
    gender !== "" &&
    ageRange !== "" &&
    job !== "" &&
    interests.length > 0 &&
    isAgreed;

  const handleSubmit = async () => {
    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) {
      alert("로그인이 필요합니다.");
      return;
    }

    const payload = {
      name,
      gender: gender === "여",
      age_range: ageRange,
      job,
      interests,
    };

    try {
      const response = await fetch("https://fintory.coldot.kr/profile/input", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("서버 응답 실패");

      const result = await response.json();
      alert("정보 입력 완료!");
      navigate("/home");
    } catch (error) {
      console.error("제출 오류:", error);
      alert("정보 제출 중 오류가 발생했습니다.");
    }
  };

  return (
    <Container>
      <HeaderText>
        맞춤형 정보를 제공받기 위해
        <br />
        <strong>정보</strong>와 <strong>관심사</strong>를 <strong>선택</strong>
        해주세요!
      </HeaderText>

      <NameGenderRow>
        <InputGroup>
          <label>이름</label>
          <InputUnderline
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <label>성별</label>
          <Select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="" disabled>
              성별 선택
            </option>
            <option value="남">남</option>
            <option value="여">여</option>
          </Select>
        </InputGroup>
      </NameGenderRow>

      <AgeJobRow>
        <InputGroup>
          <label>나이대</label>
          <Select
            value={ageRange}
            onChange={(e) => setAgeRange(e.target.value)}
          >
            <option value="" disabled>
              나이대 선택
            </option>
            <option value="10대">10대</option>
            <option value="20대">20대</option>
            <option value="30대">30대</option>
            <option value="40대">40대</option>
            <option value="50대">50대</option>
            <option value="60대 이상">60대 이상</option>
          </Select>
        </InputGroup>

        <InputGroup>
          <label>직업</label>
          <Select value={job} onChange={(e) => setJob(e.target.value)}>
            <option value="" disabled>
              직업 선택
            </option>
            <option value="중학생">중학생</option>
            <option value="고등학생">고등학생</option>
            <option value="대학생">대학생</option>
            <option value="직장인">직장인</option>
            <option value="자영업">자영업</option>
            <option value="주부">주부</option>
            <option value="무직">무직</option>
            <option value="취업준비생">취업준비생</option>
          </Select>
        </InputGroup>
      </AgeJobRow>

      <InterestsGroup>
        <label>관심사 (복수 선택 가능)</label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {INTEREST_OPTIONS.map((item) => (
            <label key={item} style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={interests.includes(item)}
                onChange={() => toggleInterest(item)}
                style={{ marginRight: "4px" }}
              />
              {item}
            </label>
          ))}
        </div>
      </InterestsGroup>

      <AgreementRow>
        <Checkbox
          type="checkbox"
          id="agreement"
          checked={isAgreed}
          onChange={(e) => setIsAgreed(e.target.checked)}
        />
        <AgreementText htmlFor="agreement">
          더 나은 추천시스템을 위한 사용자 맞춤형 개인정보 제공에 동의합니다.
        </AgreementText>
      </AgreementRow>

      <SubmitButton onClick={handleSubmit} disabled={!isFormValid}>
        정보 입력 완료!
      </SubmitButton>
    </Container>
  );
};

export default Register;
