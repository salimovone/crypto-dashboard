import React from "react";
import Navbar from "../../../components/Navbar";
import ReactBigCalendar from "../../../components/appElements/Calendar/ReactBigCalendar";

const Calendar = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-5 px-5">
        <h1 className="text-xl text-left font-bold text-[var(--main-color)]">Calendar</h1>
        <div className="mt-6 calendar">
          <ReactBigCalendar />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
