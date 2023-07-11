import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Counter from "./components/Counter";
import SimpleList from "./components/SimpleList";
import StudentList from "./components/StudentList";
import ProjectList from "./components/ProjectList";
import MovieList from "./components/MovieList";

function App() {
  const [theme, setTheme] = useState("light");
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("city");
  return (
    <div className={"App " + theme}>
      <h1>State and Events Lesson</h1>
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

      <hr />
      <h1>List and Keys Lesson</h1>

      {/*<SimpleList />
      /* USING KEYS, not best practice 
      <StudentList /> */}
      {/* USING IDs AS KEYS, BEST PRACTICE 
      <ProjectList /> */}
    <MovieList />

    </div>
  );
}

export default App;
