import React from "react";

const TimeAdjuster = props => {
  if (props.started) {
    return null;
  }
  return (
    <>
      <div className="countdown__info">
        Set your timer using the inputs below.
      </div>
      <div className="time-adjuster">
        <div className="input-group minutes">
          {" "}
          <label htmlFor="m">Minutes</label>
          <input
            value={props.m}
            onChange={props.onChange}
            type="number"
            name="m"
            id="m"
            min="0"
            max="59"
          />
        </div>
        <div className="input-group seconds">
          <label htmlFor="s">Seconds</label>
          <input
            value={props.s}
            onChange={props.onChange}
            type="number"
            name="s"
            id="s"
            min="0"
            max="59"
          />
        </div>
      </div>
    </>
  );
};

export default TimeAdjuster;
