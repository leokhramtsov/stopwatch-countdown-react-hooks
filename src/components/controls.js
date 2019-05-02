import React from "react";

const Controls = ({
  start,
  stop,
  reset,
  started,
  active,
  setLap,
  stopwatch
}) => (
  <>
    {!started && (
      <button className="btn__start" onClick={start}>
        Start
      </button>
    )}
    {started && (
      <>
        <button
          className={active ? "btn__stop" : "btn__start"}
          onClick={active ? stop : start}
        >
          {active ? "Pause" : "Resume"}
        </button>
        <button className="btn__reset" onClick={reset}>
          Reset
        </button>
        {stopwatch && (
          <button className="btn__lap" onClick={setLap}>
            Lap
          </button>
        )}
      </>
    )}
  </>
);

export default Controls;
