import React, { useState, useCallback } from "react";
import { useInterval } from "../../hooks/useInterval";
import Display from "../display";
import Controls from "../controls";
import Laps from "./laps";

const Stopwatch = () => {
  const [started, setStarted] = useState(false);
  const [active, setActive] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [timePassed, setTimePassed] = useState(0);
  const [watch, setWatch] = useState({ m: 0, s: 0, ms: 0 });
  const [laps, setLaps] = useState([]);
  const [previousLap, setPreviousLap] = useState(0);

  const start = () => {
    setStarted(true);
    setActive(true);
    setStartTime(Date.now() - timePassed);
  };

  const updateTime = useCallback(() => {
    const delta = Date.now() - startTime;
    setTimePassed(delta);

    const time = getTime(timePassed);
    setWatch({ ...time });
  }, [startTime, timePassed]);

  const clearIntervalId = useInterval(
    () => {
      if (active) {
        updateTime();
      }
    },
    active,
    10
  );

  const stop = () => {
    clearIntervalId();
    setActive(false);
  };

  const reset = () => {
    clearIntervalId();
    setStarted(false);
    setActive(false);
    setWatch({ m: 0, s: 0, ms: 0 });
    setLaps([]);
  };

  const getTime = timeInMiliseconds => {
    const timeLapsed = new Date(timeInMiliseconds);
    const m = timeLapsed.getUTCMinutes();
    const s = timeLapsed.getUTCSeconds();
    const ms = Math.floor(timeLapsed.getUTCMilliseconds() / 10);
    return { m, s, ms };
  };

  const setLap = () => {
    if (active) {
      setPreviousLap(timePassed);
      const lapTime = getTime(timePassed - previousLap);
      const lap = { totalTime: { ...watch }, lapTime: { ...lapTime } };
      const updatedLaps = [...laps, lap];
      setLaps(updatedLaps);
    }
  };

  return (
    <>
      <h3 className="component__title">Stopwatch</h3>
      <Display {...watch} />
      <Controls
        start={start}
        stop={stop}
        reset={reset}
        started={started}
        active={active}
        setLap={setLap}
        stopwatch={true}
      />
      <Laps laps={laps} />
    </>
  );
};

export default Stopwatch;
