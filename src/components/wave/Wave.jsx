import "./Wave.css";

const Wave = ({ done_rate }) => {
  return (
    <div
      style={{ transform: `translateY(${-75 * (1 - done_rate)}%)` }}
      className="wave-wrap"
    >
      <div className="wave"></div>
    </div>
  );
};

export default Wave;
