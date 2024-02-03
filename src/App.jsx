import { useState } from "react";
import Hello from "./Hello";

import img3 from "./assets/cold.jpg";
function App() {
  const [input, setinput] = useState("");
  const [weather, setweather] = useState({});
  const string = "C";

  console.log(weather);
  const object = {
    key: "72dd674a9fbfd4a804ac07bae94a3cd2",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const func = async () => {
    await fetch(
      `${object.base}weather?q=${input}&units=metric&appid=72dd674a9fbfd4a804ac07bae94a3cd2`
    )
      .then((res) => res.json())
      .then((data) => {
        let value = data;
        setweather(value);
        setinput("");
      })
      .catch("Something went in weather api");
  };

  return (
    <>
      <div className="main-div">
        <div className="inner">
          <input
            placeholder="Search For Weather"
            type="text"
            onChange={(e) => setinput(e.target.value)}
            value={input}
          />
          <button onClick={func}>search</button>
        </div>
        <div className="attributes">
          {/* <h1 style={{ background: "black" }}>
            <img src="./images/clear.png" alt="" />
          </h1> */}
          <div>
            {weather?.main?.temp < 10 ? (
              <img
                src={img3}
                alt=""
                height={150}
                width={150}
                style={{ marginLeft: "110px", borderRadius: "50%" }}
              />
            ) : weather?.main?.temp > 10 ? (
              <Hello />
            ) : (
              <h1></h1>
            )}
            <h1>
              <span>Temp: </span>
              {weather?.main?.temp}°C
            </h1>
          </div>
          <h1>
            <span>country </span>: {weather?.name}
          </h1>
        </div>
        <br />
        <div className="div2">
          <h2>
            <span>Humidity is </span> : {weather?.main?.humidity}°C
          </h2>
          <h2>
            {" "}
            <span>WindSpeed is </span>: {weather?.wind?.speed}m/s
          </h2>
        </div>
        <div className="div2">
          <h2>Visibility: {weather?.visibility} %</h2>
          <h2> TimeZone: {weather?.timezone} sec</h2>
        </div>
      </div>
    </>
  );
}

export default App;
