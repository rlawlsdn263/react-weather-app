import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function App() {
  const API_KEY = "1144f627ca7622ff01372e0335e00e1b";
  const [location, setLocation] = useState("");
  const [result, setResult] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchWeather = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await axios({
          method: "get",
          url: url,
        });
        console.log(data);
        setResult(data);
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <AppWarp>
      <div className="appContentWrap">
        <input
          placeholder="도시를 입력하세요"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          onKeyDown={searchWeather}
        />
        {Object.keys(result).length !== 0 && (
          <ResultWrap>
            <div className="city">{result.data.name}</div>
            <div className="temperature">{result.data.main.temp}</div>
            <div className="weather">{result.data.weather[0].main}</div>
          </ResultWrap>
        )}
      </div>
    </AppWarp>
  );
}

export default App;

// 스타일 컴포넌트
const AppWarp = styled.div`
  width: 100vw;
  height: 100vh;
  border: 1px red solid;

  .appContentWrap {
    position: absolute;
    left: 50%;
    top: 50%;
    tanform: translate(-50%, -50%);
    border: 1px blue solid;
    padding: 20px;
  }
`;

const ResultWrap = styled.div`
  margin-top: 60px;
  padding: 10px;
  border: 1px black solid;
  border-radius: 8px;
`;
