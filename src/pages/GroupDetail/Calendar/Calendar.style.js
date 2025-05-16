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

  .react-calendar__tile--active {
    color: white;
  }

  .react-calendar__tile--now {
    background: #f5f5f5;
    font-weight: bold;
  }

  .done-day {
    background-color: #a0522d !important;
    color: white;
    border-radius: 50%;
  }
`;
