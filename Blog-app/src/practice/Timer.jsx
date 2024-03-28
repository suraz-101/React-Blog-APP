export const Timer = ({ Time }) => {
  return (
    <div>
      <span>{"0" + Math.floor((Time / 60000) % 60).slice(-2)}</span>
      <span>{"0" + Math.floor((Time / 1000) % 60).slice(-2)}</span>
      <span>{"0" + ((Time / 10) % 60).slice(-2)}</span>
    </div>
  );
};
