import { useState } from "react";
import styled from "styled-components";
import WinLotto from "./WinLotto";

const Put = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  input {
    width: 30px;
    height: 30px;
    margin: 20px;
    text-align: center;
  }
  .input-num {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .render-num {
    display: flex;
    width: 100%;
    height: 50px;
    justify-content: space-around;
    align-items: center;
    background-color: aliceblue;

    > div {
      text-align: center;
      border: 2px solid black;
      background-color: white;
      font-size: 30px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  > button {
    width: 120px;
    height: 50px;
    margin-bottom: 20px;
  }
`;
export default function Input() {
  const [inputValue, setInputValue] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
    { id: 5, value: "" },
    { id: 6, value: "" },
  ]);
  const [renderValue, setRenderValue] = useState([]);

  // 인풋값 별로 입력값 적용
  const inputChange = (e, index) => {
    const updateInput = [...inputValue];
    updateInput[index] = { ...updateInput[index], value: e.target.value };
    setInputValue(updateInput);
  };

  const handleClick = () => {
    setRenderValue(inputValue);
    // 초기화식
  };

  return (
    <Put>
      <div className="input-num">
        {inputValue.map((e, index) => (
          <div key={e.id}>
            <input
              type="text"
              value={e.value}
              onChange={(e) => inputChange(e, index)}
            ></input>
          </div>
        ))}
      </div>
      <button onClick={handleClick}>입력</button>
      <div className="render-num">
        {renderValue.map((e) => (
          <div key={e.id}>{e.value}</div>
        ))}
      </div>
      <WinLotto
        renderValue={renderValue}
        inputValue={inputValue}
        inputChange={inputChange}
      />
    </Put>
  );
}

// 인풋창이 하나일때,
// {
//   const [inputValue, setInputValue] = useState("");
//   const [renderValue, setRenderValue] = useState("");

//   const inputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleClick = () => {
//     setRenderValue(inputValue);
//     setInputValue("");
//   };

//   return (
//     <div>
//       <input type="text" value={inputValue} onChange={inputChange} />
//       <button onClick={handleClick}>Submit</button>
//       <div>{renderValue}</div>
//     </div>
//   );
// }
