import React, { useState } from 'react';
import toriLogo from '../../../assets/Images/toriLogo.svg';
import * as S from './InputCodeModal.style';

const InputCodeModal = ({ onSubmit, onSkip }) => {
  const [inviteCode, setInviteCode] = useState('');

  const handleSubmit = () => {
    if (inviteCode.trim() === '') {
      alert('초대 코드를 입력해주세요.');
      return;
    }
    onSubmit(inviteCode);
  };

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
              marginLeft: '0.5rem',
              transform: 'translateY(3px)',
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
        <S.CodeInputContainer>
          <S.InputLabel>초대 코드</S.InputLabel>
          <S.CodeInput
            type="text"
            placeholder="_ _ _ _ _ _"
            value={inviteCode}
            onChange={(e) => {
              const onlyNums = e.target.value.replace(/\D/g, ''); // 숫자만
              if (onlyNums.length <= 6) {
                setInviteCode(onlyNums);
              }
            }}
            maxLength={6}
          />
        </S.CodeInputContainer>
        <S.SubmitButton>입력하기</S.SubmitButton>
        <div style={{ textAlign: 'center' }}>
          <S.SkipText onClick={onSkip}>혼자 할래요.</S.SkipText>
        </div>
      </S.ModalWrapper>
    </S.ModalOverlay>
  );
};

export default InputCodeModal;
