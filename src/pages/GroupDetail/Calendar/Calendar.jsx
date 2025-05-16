// Calendar.jsx
import { useState } from "react";
import ReactCalendar from "react-calendar"; // ✅ 이름 바꿔서 import
import "react-calendar/dist/Calendar.css";
import { CalendarWrapper } from "./Calendar.style";

const CustomCalendar = () => {
  const [value, setValue] = useState(new Date());

  return (
    <CalendarWrapper>
      <ReactCalendar
        onChange={setValue}
        value={value}
        calendarType="gregory"
        locale="ko-KR"
        formatDay={(_, date) => date.getDate().toString()}
        // 이 줄은 아직 doneDates가 정의되지 않았으므로 주석 처리 또는 구현 필요
        // tileClassName={({ date, view }) =>
        //   view === "month" && doneDates.has(date.toDateString()) ? "done" : null
        // }
      />
    </CalendarWrapper>
  );
};

export default CustomCalendar;
