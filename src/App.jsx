import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Counter from "./components/Counter";

function App() {
  const [theme, setTheme] = useState("light");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("city");
  return (
    <div className={"App " + theme}>
      <Counter />
      <select onChange={(event) => setTheme(event.target.value)}>
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
      <div>
        <b>username:</b>{" "}
        <input
          onChange={(event) => setUsername(event.target.value)}
          type="text"
        />
      </div>
      <div>
        <b>city:</b>{" "}
        <input onChange={(event) => setCity(event.target.value)} type="text" />
      </div>
      {username}
      <hr />
      {city}
    </div>
  );
}

export default App;
