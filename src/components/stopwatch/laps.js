import React from "react";
import Lap from "./lap";

const Laps = ({ laps }) => {
  if (!laps) return null;

  return (
    <ul className="laps">
      {laps.map((lap, i) => (
        <Lap key={i} lap={lap} index={i} />
      ))}
    </ul>
  );
};

export default Laps;
