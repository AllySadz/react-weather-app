import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://sharp-roentgen-fef16d.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Ally Sadzius {""}
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/AllySadz/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
