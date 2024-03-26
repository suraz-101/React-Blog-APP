import { useState } from "react";

export const TemperatureMesurement = () => {
  const [temp, setTemp] = useState(0);
  const [from, setFrom] = useState("F");
  const [to, setTo] = useState("C");
  const [value, setValue] = useState(0);

  const temperatureChange = () => {
    setValue(from === "C" ? (temp * 9) / 5 + 32 : ((temp - 32) * 5) / 9);
  };
  return (
    <div
      className="border d-flex justify-content-between"
      style={{ width: "50%" }}
    >
      <input
        type="text"
        className="border border-primary"
        placeholder="Enter Temperature e"
        onChange={(e) => {
          setTemp(e.target.value);
          temperatureChange();
        }}
      />
      <label>From:</label>
      <select
        name="selectTemperature"
        id="selectTempereature"
        onChange={(e) => {
          setFrom(e.target.value);
          temperatureChange();
        }}
      >
        <option value="F">F</option>
        <option value="C">C</option>
      </select>
      <label>To:</label>
      <select
        name="selectTemperature"
        id="selectTempereature"
        onChange={(e) => {
          setTo(e.target.value);
          temperatureChange();
          // setValue(from === "C" ? (temp * 9) / 5 + 32 : ((temp - 32) * 5) / 9);
        }}
      >
        <option value="C">C</option>
        <option value="F">F</option>
      </select>
      <label>
        {temp} Degree {from} into {to} is {value}
      </label>
    </div>
  );
};

//identify the selected option in to
//identify the selected option in from
// if selected option in from is F then setTemperature value using c formula else
