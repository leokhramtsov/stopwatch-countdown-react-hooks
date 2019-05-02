import React, { useState, useCallback } from "react";
import { useInterval } from "../../hooks/useInterval";
import Display from "../display";
import Controls from "../controls";
import TimeAdjuster from "./timeAdjuster";

const Countdown = () => {
  const [started, setStarted] = useState(false);
  const [active, setActive] = useState(false);
  const [startTime, setStartTime] = useState(0);
  // const [timePassed, setTimePassed] = useState(0);
  const [watch, setWatch] = useState({ m: 0, s: 0, ms: 0 });
  // const [laps, setLaps] = useState([]);
  // const [previousLap, setPreviousLap] = useState(0);

  const onChange = e => {
    setWatch({ ...watch, [e.target.name]: e.target.value });
  };

  const start = () => {
    if (!watch.m && !watch.s && !watch.ms) return;

    const mInMilliseconds = watch.m * 60000;
    const sInMilliseconds = watch.s * 1000;
    const milliseconds = watch.ms * 10;
    const totalTimeChosen = mInMilliseconds + sInMilliseconds + milliseconds;

    setStarted(true);
    setActive(true);
    setStartTime(Date.now() + totalTimeChosen);
  };

  const stop = () => {
    clearIntervalId();
    setActive(false);
  };

  const reset = () => {
    clearIntervalId();
    setStarted(false);
    setActive(false);
    setWatch({ m: 0, s: 0, ms: 0 });
  };

  const updateTime = useCallback(() => {
    const remaining = startTime - Date.now();
    const currentTimerTime = getTime(remaining);

    if (remaining > 0) {
      setWatch({ ...currentTimerTime });
    } else {
      reset();
    }
  }, [startTime, reset]);

  const clearIntervalId = useInterval(
    () => {
      if (active) {
        updateTime();
      }
    },
    active,
    10
  );

  const getTime = timeInMiliseconds => {
    const timeLapsed = new Date(timeInMiliseconds);
    const m = timeLapsed.getUTCMinutes();
    const s = timeLapsed.getUTCSeconds();
    const ms = Math.floor(timeLapsed.getUTCMilliseconds() / 10);
    return { m, s, ms };
  };

  return (
    <>
      <h3 className="component__title">Countdown</h3>
      <Display {...watch} />
      <Controls
        start={start}
        stop={stop}
        reset={reset}
        started={started}
        active={active}
      />
      <TimeAdjuster
        started={started}
        onChange={onChange}
        m={watch.m}
        s={watch.s}
      />
    </>
  );
};

export default Countdown;
