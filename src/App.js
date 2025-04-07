import "./styles.css";
import React, { useEffect, useRef } from "react";

const OPT_DIGITS_COUNT = 6;

export default function App() {
  const [numberList, setNumberList] = React.useState(
    new Array(OPT_DIGITS_COUNT).fill("")
  );

  const numberListRef = useRef([]);

  const handleChange = (value, index) => {
    setNumberList((prevValue) => {
      const newValue = [...prevValue];
      newValue[index] = value.slice(-1);
      numberListRef.current[index + 1]?.focus();
      return newValue;
    });
  };

  const handleKeyUp = (e, index) => {
    if (e.key === "Backspace") {
      numberListRef.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    numberListRef.current[0].focus();
  }, []);

  return (
    <div className="App">
      <h1>OTP component</h1>

      {numberList.map((value, index) => {
        return (
          <input
            type="number"
            key={index}
            ref={(input) => (numberListRef.current[index] = input)}
            value={value}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyUp={(e) => handleKeyUp(e, index)}
          />
        );
      })}
    </div>
  );
}
