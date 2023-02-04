import { useState } from "react";
import styled from "styled-components";
import LoseModal from "./LoseModal";
import WinModal from "./WinModal";

const Win = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .win-num {
    display: flex;
  }
`;

export default function WinLotto({ renderValue }) {
  const [isWin, setIsWin] = useState(false);
  const [isLose, setIsLose] = useState(false);
  const [winInput, setWinInput] = useState([
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
    { id: 5, value: "" },
    { id: 6, value: "" },
  ]);

  const winInputChange = (e, index) => {
    const updateWinInput = [...winInput];
    updateWinInput[index] = { ...updateWinInput[index], value: e.target.value };
    setWinInput(updateWinInput);
  };

  const winHandler = () => {
    // 하드코딩먼저
    if (
      renderValue[0].value === winInput[0].value &&
      renderValue[1].value === winInput[1].value &&
      renderValue[2].value === winInput[2].value &&
      renderValue[3].value === winInput[3].value &&
      renderValue[4].value === winInput[4].value &&
      renderValue[5].value === winInput[5].value
    ) {
      setIsWin(true);
    } else {
      setIsLose(true);
    }

    // for (let i = 0; i < winInput.length; i++)
    //   if (renderValue[i].value === winInput[i].value) {
    //     setIsWin(true);
    //   }
  };
  //FIXME:
  // 핸들러에 렌더밸류 비교식 (if 문)
  // 순회가 필요한가? o
  // id 값의 "주소" 가 달라 같은 값으로 인식 x
  // 중첩 필요 ( 모든 값에 적용 되어야한다.)
  // 반대로 놓으면 하나만 틀려도 걸러짐

  return (
    <Win>
      <p>로또 당첨 구현</p>
      {isWin === true ? (
        <WinModal setIsWin={setIsWin} />
      ) : isLose === true ? (
        <LoseModal setIsLose={setIsLose} />
      ) : null}
      <div className="win-num">
        {winInput.map((e, index) => (
          <div key={e.id}>
            <input onChange={(e) => winInputChange(e, index)}></input>
          </div>
        ))}
      </div>
      <button onClick={winHandler}> 당첨확인 </button>
    </Win>
  );
}

// 입력하여 렌더된 숫자들 상태와 당첨 번호가 일치할 때
// 당첨 버튼을 눌렀을 때 당첨여부알림? or 모달 v

// 상위 부모 컴포넌트로 먼저 올려야됨
// 그냥 Input.js 밑으로 컴포넌트 넣기

// FIXME: Input 컴포넌트 와 같은 아이디를 사용하는데
// 같은 값으로 렌더되지않을까 >> 예상 적중함 야발
// 인풋 객체를 하나 더 생성해야함

// WinHandler / LoseHandler
// >> oneClick
