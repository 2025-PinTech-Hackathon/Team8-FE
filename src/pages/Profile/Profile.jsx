import React, { useEffect, useState } from 'react';
import Person from '../../assets/Images/person.svg';
import * as S from './Profile.style';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('access_token');
        const response = await axios.get('https://fintory.coldot.kr/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { name, gender, age_range, job, interests } = response.data;

        setUser({
          name,
          gender,
          ageGroup: age_range,
          status: job,
          interests,
        });
      } catch (error) {
        console.error('프로필 불러오기 실패:', error);
      }
    };

    fetchProfile();
  }, []);

  if (!user) return <div>로딩 중...</div>;

  return (
    <S.Container>
      <S.AvatarWrapper>
        <img src={Person} alt="유저 아바타" />
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
          {[...new Set(user.interests)].map((tag, index) => (
            <S.Tag key={index}>{tag}</S.Tag>
          ))}
        </S.TagWrapper>
      </S.Card>

      <S.LogoutButton>로그아웃</S.LogoutButton>
    </S.Container>
  );
};

export default Profile;
