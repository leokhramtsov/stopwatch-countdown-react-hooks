import React from "react";
import { formattedTime, pad } from "../../helpers/formattedTime";

const Lap = ({ lap, index }) => {
  const { totalTime, lapTime } = lap;
  return (
    <li key={index + 1}>
      <span className="lap__id">Lap {pad(index + 1)}</span>
      {formattedTime(totalTime)}
      <span className="lap__time">Lap Time: {formattedTime(lapTime)}</span>
    </li>
  );
};

export default Lap;
