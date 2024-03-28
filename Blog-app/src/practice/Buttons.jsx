export const Buttons = (props) => {
  const startButton = (
    <div>
      <button className="btn btn-primary mx-5" onClick={props?.handleReset}>
        Reset
      </button>
    </div>
  );

  const activeButton = (
    <div>
      <button
        className="btn btn-danger mx-4"
        onClick={props?.handlePauseResume}
      >
        {props?.isPuased ? "Resume" : "Puase"}
      </button>
    </div>
  );

  return (
    <div className="mb-5"> {props?.active ? activeButton : startButton}</div>
  );
};
