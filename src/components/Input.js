import { useState } from "react";
import styled from "styled-components";
import WinLotto from "./WinLotto";

const Put = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: rgb(64, 64, 82);

  /* border-top: 2px solid white; */

  > h2 {
    color: white;
    width: 90%;
  }
  input {
    width: 40px;
    height: 40px;
    margin: 20px;
    text-align: center;
    border-radius: 20%;
    /* border: 2px solid black; */
    font-size: 20px;
  }
  .input-num {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .render-num {
    display: flex;
    width: 80%;
    height: 50px;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(179, 172, 232);
    padding-top: 15px;
    padding-bottom: 15px;
    /* border: 2px solid black; */
    border-radius: 10px;
    margin-bottom: 40px;

    > div {
      text-align: center;
      line-height: 47px;
      width: 50px;
      height: 50px;
      border-radius: 50px;
      /* border: 2px solid black; */
      font-weight: bold;
      background-color: white;
    }
  }
  > button {
    width: 120px;
    height: 50px;
    margin-bottom: 20px;
    background-color: rgb(77, 77, 239);
    color: white;
    font-weight: bold;
    border-radius: 50px;
    cursor: pointer;
    /* border: 2px solid black; */
    box-shadow: 7px 6px 15px 1px rgba(0, 0, 0, 0.2);
  }
  > button:active {
    transform: translateY(4px) translateX(2px);
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
      <h2>나의 번호</h2>
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
      <h2>이번 주 당첨 번호</h2>
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
