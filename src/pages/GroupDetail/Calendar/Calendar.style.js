import styled from "styled-components";

export const CalendarWrapper = styled.div`
  margin-top: 2rem;

  .react-calendar {
    width: 100%;
    background: white;
    border: none;
    font-family: inherit;
    font-size: 1.2rem;
  }

  /* 선택된 날짜 */
  .react-calendar__tile--active {
    color: white;
  }

  /* 오늘 날짜 */
  .react-calendar__tile--now {
    background: #f5f5f5;
    font-weight: bold;
  }
`;
