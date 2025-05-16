import { useState } from 'react';
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
} from './Register.style';
import Logo from '../../assets/Images/fintoriLogo.svg';

const Register = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [job, setJob] = useState('');
  const [interest, setInterest] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = () => {
    alert('정보 입력 완료!');
  };

  // 모든 필드가 채워졌는지 확인
  const isFormValid =
    name.trim() !== '' &&
    gender !== '' &&
    ageRange !== '' &&
    job !== '' &&
    interest !== '' &&
    isAgreed;

  return (
    <Container>
      <img src={Logo} alt="FinTori Logo" />

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
        <label>관심사</label>
        <Select value={interest} onChange={(e) => setInterest(e.target.value)}>
          <option value="" disabled>
            관심사 선택
          </option>
          <option value="장학금">장학금</option>
          <option value="주거지원">주거지원</option>
          <option value="청년주거">청년주거</option>
          <option value="신혼부부">신혼부부</option>
          <option value="여행">여행</option>
          <option value="세금">세금</option>
          <option value="취업지원">취업지원</option>
          <option value="보험">보험</option>
          <option value="노후">노후</option>
          <option value="분양정보">분양정보</option>
        </Select>
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
import React from 'react';
import * as S from './Profile.style';

const Profile = () => {
  const user = {
    name: '김광운',
    gender: '여성',
    ageGroup: '20대',
    status: '대학생',
    interests: ['장학금', '장학금', '장학금', '세금', '주거지원'],
  };

  return (
    <S.Container>
      <S.Logo>FinTori</S.Logo>

      <S.AvatarWrapper>
        <S.AvatarIcon>👤</S.AvatarIcon>
      </S.AvatarWrapper>

      <S.Card>
        <S.UserName>
          <strong>{user.name}</strong>님의 정보
        </S.UserName>
        <S.Divider />
        <S.Detail>
          {user.gender} / {user.ageGroup} / {user.status}
        </S.Detail>
        <S.TagWrapper>
          {user.interests.map((tag, index) => (
            <S.Tag key={index}>{tag}</S.Tag>
          ))}
        </S.TagWrapper>
      </S.Card>

      <S.LogoutButton>로그아웃</S.LogoutButton>
    </S.Container>
  );
};

export default Profile;
