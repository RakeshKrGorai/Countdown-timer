import { useState, useEffect } from "react";

export default function CountDown() {
  const countDownDate = new Date("January 1,2025 00:00:00").getTime(); //getTime stores the time in milliseconds since Jan 1, 1970
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

  const [isFoldingSeconds, setIsFoldingSeconds] = useState(false);
  const [isFoldingMinutes, setIsFoldingMinutes] = useState(false);
  const [isFoldingHours, setIsFoldingHours] = useState(false);
  const [isFoldingDays, setIsFoldingDays] = useState(false);
  const [days, setDays] = useState(daysValue);
  const [hours, setHours] = useState(hoursValue);
  const [minutes, setMinutes] = useState(minutesValue);
  const [seconds, setSeconds] = useState(secondsValue);

  useEffect(function () {
    setInterval(function () {
      // setTime(time - 1);
      setIsFoldingSeconds(true);
      setSeconds((currentSecond) => currentSecond - 1);
      if (seconds === 0) {
        setIsFoldingMinutes(true);
        setMinutes((currentMinutes) => currentMinutes - 1);
      }
      setIsFoldingMinutes(false);
      if (minutes === 0 && seconds === 0) {
        setIsFoldingHours(true);
        setHours((currentHours) => currentHours - 1);
      }
      setIsFoldingHours(false);
      if (hours === 0 && minutes === 0 && seconds === 0) {
        setIsFoldingDays(true);
        setDays((currentDay) => currentDay - 1);
      }
      setIsFoldingDays(false);
      if (days === 0) {
        return;
      }
    }, 1000);
  });

  return (
    <div className="coming-soon">
      <h1 className="title">Time left for the Big Day</h1>
      <div className="count-down">
        <div className="day-container">
          <h3 className={`days card  ${isFoldingDays ? "fold" : ""}`}>
            {daysLeft <= 9 ? "0" + daysLeft : daysLeft}
          </h3>
          <h3 className="time-type"> DAYS</h3>
        </div>
        <div className={`hour-container `}>
          <h3
            className={`hours card ${isFoldingHours ? "fold" : ""}`}
            onAnimationEnd={() => setIsFoldingHours(false)}
          >
            {hoursLeft <= 9 ? "0" + hoursLeft : hoursLeft}
          </h3>
          <h3 className="time-type"> HOURS</h3>
        </div>
        <div className={`minute-container `}>
          <h3 className={`minutes card ${isFoldingMinutes ? "fold" : ""}`}>
            {minutesLeft <= 9 ? "0" + minutesLeft : minutesLeft}
          </h3>
          <h3 className="time-type"> MINUTES</h3>
        </div>
        <div className="second-container">
          <h3
            className={`seconds card ${isFoldingSeconds ? "fold" : ""}`}
            onAnimationEnd={() => setIsFoldingSeconds(false)}
          >
            {secondsLeft <= 9 ? "0" + secondsLeft : secondsLeft}
          </h3>
          <h3 className="time-type"> SECONDS</h3>
        </div>
      </div>
    </div>
  );
}
