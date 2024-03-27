import { useEffect, useState } from "react";
import axios from "axios";

export const CurrrencyConverter = () => {
  const [input, setInput] = useState(0);
  const [dropdown, setDrodown] = useState([]);
  const [fromTo, setFromTo] = useState({
    From: "",
    To: "",
  });
  const [rate, setRate] = useState({});

  useEffect(() => {
    const data = async () => {
      const currencyDropdown = await axios(
        "https://api.frankfurter.app/currencies"
      );

      const datas = Object.keys(currencyDropdown.data);

      setDrodown(datas);
    };
    data();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const data = await axios(
        `https://api.frankfurter.app/latest?amount=${input}&from=${fromTo.From}&to=${fromTo.To}`
      );
      setRate(data?.data);
    };
    if (fromTo.To && fromTo.From && input) {
      fetchApi();
    }
  }, [fromTo.To, fromTo.From, input]);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the amount"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <label>From:</label>
      <select
        onChange={(e) => {
          setFromTo((prevValue) => {
            return { ...prevValue, From: e.target.value };
          });
        }}
      >
        <option>Select</option>
        {dropdown.length > 0 &&
          dropdown.map((d) => {
            return <option key={d}>{d}</option>;
          })}
        {/* {dropdown.map((d, index) => {
          <option key={index}>{d}</option>;
        })} */}
      </select>
      <label>To:</label>
      <select
        onChange={(e) => {
          setFromTo((prevValue) => {
            return { ...prevValue, To: e.target.value };
          });
        }}
      >
        <option>Select</option>
        {dropdown.length > 0 &&
          dropdown.map((d) => {
            return <option key={d}>{d}</option>;
          })}
      </select>

      <label htmlFor="">
        {Object.keys(rate).length > 0 && (
          <>
            {rate?.amount} {rate?.base}
            is equvalent to {Object.values(rate.rates)}
            {fromTo.To}
          </>
        )}
      </label>
    </div>
  );
};
