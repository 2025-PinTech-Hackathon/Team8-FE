import styled from "styled-components";

export const Container = styled.div`
  max-width: 30rem; /* 480px */
  margin: 0 auto;
  padding: 1.5rem 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 7.5rem; /* 120px */
    margin-top: 2.5rem; /* 40px */
  }
`;

export const HeaderText = styled.h2`
  font-size: 1.25rem; /* 20px */
  font-weight: 400;
  text-align: center;
  line-height: 1.4;
  margin: 1.5rem 0; /* 24px 0 */
  color: black;

  strong {
    font-weight: 700;
    color: black;
  }
`;

export const NameGenderRow = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem; /* 16px */
  margin-bottom: 2rem;
`;

export const AgeJobRow = styled(NameGenderRow)`
  margin-bottom: 2rem; /* 16px */
`;

export const InterestsGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  label {
    font-size: 1.25rem;
    margin-bottom: 0.5rem; /* 8px */
    color: black;
  }
`;

export const InputGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.25rem; /* 14px */
    margin-bottom: 0.5rem; /* 8px */
    color: black;
  }
`;

export const InputUnderline = styled.input`
  border: none;
  border-bottom: 0.0625rem solid #8b6243;
  background: transparent;
  padding: 0.5rem 0;
  font-size: 1rem;
  color: black;
  outline: none;
  width: 10.5rem;

  &::placeholder {
    color: #bfb1a0;
  }
`;

export const Select = styled.select`
  border: none;
  border-bottom: 0.0625rem solid #8b6243;
  background: transparent;
  padding: 0.5rem 0; /* 8px 0 */
  font-size: 1rem; /* 16px */
  color: #5a4631;
  outline: none;
  appearance: none;
`;

export const AgreementRow = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 2rem; /* 32px */
`;

export const Checkbox = styled.input`
  margin-right: 0.5rem;
  margin-top: 0.125rem;
`;

export const AgreementText = styled.label`
  font-size: 0.75rem;
  line-height: 1.4;
  color: #555555;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.875rem 0;
  background-color: #8b6243;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;

  &:disabled {
    background-color: #d3c2b4;
  }
`;
