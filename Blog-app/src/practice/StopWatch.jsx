// create a stop watch that starts, pause, resume and reset

import { useEffect, useState } from "react";
import { Buttons } from "./Buttons";
import { Timer } from "./Timer";

export const StopWatch = () => {
  const [Time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handleResumePause = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  useEffect(() => {
    let interval = null;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => {
          time + 10;
        });
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  return (
    <>
      <div>
        {" "}
        <Timer time={Time} />
        <br />
        <Buttons
          active={isActive}
          isPuased={isPaused}
          handleStart={handleStart}
          handlePauseResume={handleResumePause}
          handleReset={handleReset}
        />
      </div>
    </>
  );
};
