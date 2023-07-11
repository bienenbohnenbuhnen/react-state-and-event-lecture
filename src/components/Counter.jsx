// ./src/components/Counter.jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [hideCounter, setHideCounter] = useState(false);
  const [buttonText, setButtonText] = useState("Next");
  const [theme, setTheme] = useState("light");
  return (
    <div className="Counter">
      <h2>Counter</h2>
      <button onClick={() => setHideCounter(!hideCounter)}>
        {hideCounter ? "Hide Counter" : "Show Counter"}
      </button>
      {hideCounter && <p>You clicked {count} times</p>}

      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        {" "}
        -{" "}
      </button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        {" "}
        +{" "}
      </button>
    </div>
  );
}

export default Counter;
