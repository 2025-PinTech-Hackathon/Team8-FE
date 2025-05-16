// Calendar.jsx
import { useState } from "react";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CalendarWrapper } from "./Calendar.style";

const CustomCalendar = ({ calendar }) => {
  const [value, setValue] = useState(new Date());

  const isDoneDates = calendar?.days.filter((d) => d.isDone).map((d) => d.day); // 숫자 날짜 배열

  return (
    <CalendarWrapper>
      <ReactCalendar
        onChange={setValue}
        value={value}
        calendarType="gregory"
        locale="ko-KR"
        formatDay={(_, date) => date.getDate().toString()}
        tileClassName={({ date }) => {
          const day = date.getDate();
          return isDoneDates.includes(day) ? "done-day" : null;
        }}
      />
    </CalendarWrapper>
  );
};

export default CustomCalendar;
