import { useEffect, useRef } from "react";

export const useInterval = (callback, active, delay) => {
  const savedCallback = useRef();
  const intervalId = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (active && delay !== null) {
      const id = setInterval(tick, delay);
      console.log(`using useInterval hook with id ${id}`);
      intervalId.current = id;
      console.log(intervalId.current);
      return () => clearInterval(intervalId.current);
    }
  }, [delay, active]);

  const clearIntervalId = () => {
    clearInterval(intervalId.current);
  };

  return () => {
    clearIntervalId();
    console.log(`id ${intervalId.current} is cleared!`);
  };
};
