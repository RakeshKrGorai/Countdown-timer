import { useState, useEffect } from "react";

export default function CountDown() {
  const countDownDate = new Date("January 1,2025 00:00:00").getTime(); //getTime stores the time in milliseconds since Jan 1, 1970
  const today = new Date().getTime();
  const difference = countDownDate - today; //The main thing that will help us calculate the big day's numbers

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const daysLeft = Math.floor(difference / days); //basically doing total number of seconds given/86400, which is the total no of seconds in a day

  const hoursLeft = Math.floor((difference % days) / hours); // after calculating total number of days, those seconds which got considered in the calculation of day shouldn't be considered, so the total hours is getting calculated from the remainder of the value after days got calculated

  const minutesLeft = Math.floor(((difference % days) % hours) / minutes); //sane logic as above, remainder after hours got calculated, and then minutes were calculated

  const secondsLeft = Math.floor(
    (((difference % days) % hours) % minutes) / seconds
  ); //same logic as above

  const [time, setTime] = useState(seconds);

  useEffect(function () {
    setInterval(function () {
      setTime(time - 1);
    }, 1000);
  });
  return (
    <div className="coming-soon">
      <h1 className="title">Time left for the Big Day</h1>
      <div className="count-down">
        <div className="day-container">
          <h3 className="days card">
            {daysLeft <= 9 ? "0" + daysLeft : daysLeft}
          </h3>
          <h3 className="time-type"> DAYS</h3>
        </div>
        <div className="hour-container">
          <h3 className="hours card">
            {hoursLeft <= 9 ? "0" + hoursLeft : hoursLeft}
          </h3>
          <h3 className="time-type"> HOURS</h3>
        </div>
        <div className="minute-container">
          <h3 className="minutes card">
            {minutesLeft <= 9 ? "0" + minutesLeft : minutesLeft}
          </h3>
          <h3 className="time-type"> MINUTES</h3>
        </div>
        <div className="second-container">
          <h3 className="seconds card">
            {secondsLeft <= 9 ? "0" + secondsLeft : secondsLeft}
          </h3>
          <h3 className="time-type"> SECONDS</h3>
        </div>
      </div>
    </div>
  );
}
