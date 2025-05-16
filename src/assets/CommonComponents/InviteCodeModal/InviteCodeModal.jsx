import React, { useState } from 'react';
import toriLogo from '../../../assets/Images/toriLogo.svg';
import * as S from './InviteCodeModal.style';

const InviteCodeModal = ({ onSubmit, onSkip }) => {
  const [inviteCode, setInviteCode] = useState('858800'); // ✅ 더미 코드

  return (
    <S.ModalOverlay>
      <S.ModalWrapper>
        <S.Title>
          초대코드 입력{' '}
          <img
            src={toriLogo}
            alt="도토리"
            style={{
              height: '1.5rem',
              marginLeft: '0.7rem',
              verticalAlign: 'text-bottom',
            }}
          />
        </S.Title>
        <S.Description>
          친구와 함께 챌린지 해보세요! <br />
          <br />
          초대 받은 친구와 미션을 완료하면
          <br />
          다양한 혜택을 더 받을 수 있어요.
        </S.Description>
        <S.BulletList>
          <li>
            가족 혹은 친구에게 사이트를 공유하고 <br />
            회원가입을 진행해주세요.
          </li>
          <li>초대 코드를 입력하면 끝!</li>
        </S.BulletList>
        <S.CodeInputContainer>
          <S.InputLabel>초대 코드</S.InputLabel>
          <S.CodeValue>{inviteCode || '858800'}</S.CodeValue>
        </S.CodeInputContainer>
        <S.SubmitButton
          onClick={() => {
            navigator.clipboard.writeText(inviteCode || ''); // 빈 값이면 기본코드
            alert('초대코드가 복사되었습니다!');
          }}
        >
          초대코드 복사하기
        </S.SubmitButton>
        <div style={{ textAlign: 'center' }}>
          <S.SkipText onClick={onSkip}>혼자 할래요.</S.SkipText>
        </div>
      </S.ModalWrapper>
    </S.ModalOverlay>
  );
};

export default InviteCodeModal;
