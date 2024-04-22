import { useState, useEffect } from "react";
import TimeContainer from "./TimerContainer";

export default function CountDown() {
  const countDownDate = new Date("January 1,2025 00:00:00").getTime(); //getTime stores the time in milliseconds since Jan 1, 1970
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(function () {
    setInterval(function () {
      const today = new Date().getTime();
      const difference = countDownDate - today; //The main thing that will help us calculate the big day's numbers

      const secondsValue = 1000;
      const minutesValue = secondsValue * 60;
      const hoursValue = minutesValue * 60;
      const daysValue = hoursValue * 24;

      const daysLeft = Math.floor(difference / daysValue); //basically doing total number of seconds given/86400, which is the total no of seconds in a day

      const hoursLeft = Math.floor((difference % daysValue) / hoursValue); // after calculating total number of days, those seconds which got considered in the calculation of day shouldn't be considered, so the total hours is getting calculated from the remainder of the value after days got calculated

      const minutesLeft = Math.floor(
        ((difference % daysValue) % hoursValue) / minutesValue
      ); //sane logic as above, remainder after hours got calculated, and then minutes were calculated

      const secondsLeft = Math.floor(
        (((difference % daysValue) % hoursValue) % minutesValue) / secondsValue
      ); //same logic as above

      setSeconds(secondsLeft);

      setMinutes(minutesLeft);
      setHours(hoursLeft);
      setDays(daysLeft);
    }, 1000);
  }, []);

  return (
    <div className="coming-soon">
      <h1 className="title">Time left for the Big Day</h1>
      <TimeContainer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  );
}
