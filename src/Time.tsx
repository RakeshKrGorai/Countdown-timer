type typeNumData = {
  num: number | string;
  unit: string;
  flip: boolean;
};

export default function Time({ num, unit, flip }: typeNumData) {
  return (
    <div>
      <div className="container">
        <h3 className={`component card ${flip ? "fold" : ""}`}>{num}</h3>
        <h3 className="time-type">{unit}</h3>
      </div>
    </div>
  );
}
