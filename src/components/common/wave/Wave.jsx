import "./Wave.css";

const Wave = ({ doneRate }) => {
  return (
    <div
      style={{ transform: `translateY(${-75 * (1 - doneRate)}%)` }}
      className="wave-wrap"
    >
      <div className="wave"></div>
    </div>
  );
};

export default Wave;
