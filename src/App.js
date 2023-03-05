import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

function App() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
  const API_KEY = "1144f627ca7622ff01372e0335e00e1b";

  const [location, setLocation] = useState("");

  const searchWeather = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await axios({
          method: "get",
          url: url,
        });
        console.log(data);
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
