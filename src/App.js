import styled from "styled-components";

function App() {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=1144f627ca7622ff01372e0335e00e1b`;

  return (
    <AppWarp>
      <div className="appContentWrap">
        <input placeholder="도시를 입력하세요"></input>
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
