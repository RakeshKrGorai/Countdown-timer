import Time from "./Time";

type timeType = {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
};

export default function TimeContainer({
  days,
  hours,
  minutes,
  seconds,
}: timeType) {
  let dayFlip = false;
  let hourFlip = false;
  let minuteFlip = false;
  let secondFlip = false;

  if (
    Number(seconds) <= 0 &&
    Number(minutes) <= 0 &&
    Number(hours) <= 0 &&
    Number(days) <= 0
  ) {
    dayFlip = false;
    hourFlip = false;
    minuteFlip = false;
    secondFlip = false;
  }

  if (hours == 0 && minutes == 0 && seconds == 0) {
    if (days != 0) {
      hours = 23;
    }
    dayFlip = true;
    hourFlip = true;
    minuteFlip = true;
    secondFlip = true;
  }
  if (minutes == 0 && seconds == 0) {
    if (hours != 0) {
      minutes = 59;
    }
    hourFlip = true;
    minuteFlip = true;
    secondFlip = true;
  }
  if (seconds == 0) {
    if (minutes != 0) {
      seconds = 59;
    }
    secondFlip = true;
    minuteFlip = true;
  }

  if (Number(days) <= 9) {
    days = "0" + days;
  }
  if (Number(hours) <= 9) {
    hours = "0" + hours;
  }
  if (Number(minutes) <= 9) {
    minutes = "0" + minutes;
  }
  if (Number(seconds) <= 9) {
    seconds = "0" + seconds;
  }
  return (
    <div>
      <div className="count-down">
        <Time num={days} unit={"days"} flip={dayFlip} />
        <Time num={hours} unit={"hours"} flip={hourFlip} />
        <Time num={minutes} unit={"minutes"} flip={minuteFlip} />
        <Time num={seconds} unit={"seconds"} flip={secondFlip} />
      </div>
    </div>
  );
}
