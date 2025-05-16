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
