import { useState } from "react";

export const TemperatureMesurement = () => {
  const [temp, setTemp] = useState(0);
  const [conversion, setConversion] = useState({
    From: "F",
    To: "C",
  });

  const [value, setValue] = useState(0);

  const temperatureChange = () => {
    setValue(
      conversion.From === "C" ? (temp * 9) / 5 + 32 : ((temp - 32) * 5) / 9
    );
  };
  return (
    <div
      className=" d-flex justify-content-between align-items-center"
      style={{ width: "70%" }}
    >
      <input
        type="text"
        className="border border-primary"
        placeholder="Enter Temperature e"
        onChange={(e) => {
          setTemp(e.target.value);
        }}
        defaultValue={0}
      />
      <label>From:</label>
      <select
        name="selectTemperature"
        id="selectTempereature"
        onChange={(e) => {
          // setFrom(e.target.value);
          setConversion({ From: e.target.value });
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
          // setTo(e.target.value);
          setConversion({ To: e.target.value });

          // setValue(from === "C" ? (temp * 9) / 5 + 32 : ((temp - 32) * 5) / 9);
        }}
      >
        <option value="C">C</option>
        <option value="F">F</option>
      </select>

      <button
        className="p-2 border border-none bg-primary rounded "
        onClick={temperatureChange}
      >
        Convert
      </button>
      <label>
        {temp} Degree {conversion.From} into {conversion.To} is {value}
      </label>
    </div>
  );
};
