/* eslint no-eval: 0 */
import React, { useState } from "react";
import Keys from "./Keys";

function Calculator(props) {
  const [value, setValue] = useState("");

  function clickHandler(event) {
    if (event.target.value === "C") {
      setValue("");
    } else if (event.target.value === "del") {
      setValue((preValue) => {
        var s = preValue.length;
        return preValue.slice(0, s - 1);
      });
    } else if (event.target.value === "=") {
      setValue((preValue) => {
        var newExpression;
        if (preValue.includes("%")) {
          newExpression = preValue.replace("%", "/100");
        } else newExpression = preValue;

        console.log(newExpression);
        return eval(newExpression);
      });
    } else {
      setValue((preValue) => {
        return preValue + event.target.value;
      });
    }
  }

  return (
    <div className="outterContainer">
      <div className="container">
        <div className="result">
          <h3>{value}</h3>
        </div>
        <div className="Calculator">
          <div className="key__container">
            <Keys value="C" onClick={clickHandler} />
            <Keys value="%" onClick={clickHandler} />
            <Keys value="del" onClick={clickHandler} />
            <Keys value="/" onClick={clickHandler} />
          </div>
          <div className="key__container">
            <Keys value="7" onClick={clickHandler} />
            <Keys value="8" onClick={clickHandler} />
            <Keys value="9" onClick={clickHandler} />
            <Keys value="*" onClick={clickHandler} />
          </div>
          <div className="key__container">
            <Keys value="4" onClick={clickHandler} />
            <Keys value="5" onClick={clickHandler} />
            <Keys value="6" onClick={clickHandler} />
            <Keys value="-" onClick={clickHandler} />
          </div>
          <div className="key__container">
            <Keys value="1" onClick={clickHandler} />
            <Keys value="2" onClick={clickHandler} />
            <Keys value="3" onClick={clickHandler} />
            <Keys value="+" onClick={clickHandler} />
          </div>
          <div className="key__container">
            <Keys value="00" onClick={clickHandler} />
            <Keys value="0" onClick={clickHandler} />
            <Keys value="." onClick={clickHandler} />
            <Keys value="=" onClick={clickHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
