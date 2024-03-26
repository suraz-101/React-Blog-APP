import { useState } from "react";
import Form from "react-bootstrap/Form";
export const CheckList = () => {
  const [select, setSelect] = useState({
    selectAll: false,
    first: false,
    second: false,
  });

  return (
    <div>
      <Form>
        {["checkbox"].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check // prettier-ignore
              type={type}
              id={`default-${type}`}
              label={`Select All`}
              checked={select.selectAll}
              onChange={() => {
                setSelect((prevVal) => {
                  return {
                    ...prevVal,
                    selectAll: !select.selectAll,
                    first: !select.first,
                    second: !select.second,
                  };
                });
              }}
            />
            <Form.Check // prettier-ignore
              type={type}
              id={`default-${type}`}
              label={`first `}
              checked={select.first}
              onChange={() => {
                setSelect((prevVal) => {
                  return {
                    ...prevVal,
                    first: !select.first,
                  };
                });
              }}
            />

            <Form.Check
              type={type}
              label={`Second`}
              checked={select.second}
              id={`default-${type}`}
              onChange={() => {
                setSelect((prevVal) => {
                  return {
                    ...prevVal,
                    second: !select.second,
                  };
                });
              }}
            />
          </div>
        ))}
      </Form>
    </div>
  );
};
