import { useState } from "react";
import styled from "styled-components";

const Ladgame = styled.div`
  display: flex;
  width: 100%;
  height: 86%;
  flex-direction: column;
  justify-content: space-around;
  > div > input {
    width: 60px;
    height: 30px;
  }
  .top-input {
    display: flex;
    justify-content: space-between;
  }
  .bottom-input {
    display: flex;
    justify-content: space-between;
  }
`;

export default function Ladder() {
  const [oneInput, setOneInput] = useState("");
  const [topInputs, setTopInputs] = useState([]);
  const [bottomInputs, setBottomInputs] = useState([]);

  const InputHandler = (e) => {
    setOneInput(e.target.value);
  };

  return (
    <Ladgame>
      <div className="top-input">
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
      </div>

      <div> 선 구현</div>
      <div className="bottom-input">
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
      </div>
    </Ladgame>
  );
}

//TODO: 사다리게임 구현
// 윗 쪽 인풋 값 상태와 아랫 쪽 인풋 값 상태를 연결시켜야함 (중간 로직)
// 8개의 선 사이에 점을 1~5개 랜덤생성
// 점을 만난다면 방향을 바꾸는 로직(한칸씩 왼쪽 또는 오른쪽이동)

// Topinput 하나의 로직
// if (점을 만났을 때){
//  if(오른쪽 방향점일때){
//
//}else (왼쪽 방향점일떄){
//
//}
//}

// 이 때 첫번째 BottomInput 에 있을 때는 왼쪽 방향점을 만들 수 없다.
// 마지막도 마찬가지로 오른쪽 방향점을 만들 수 없다.
