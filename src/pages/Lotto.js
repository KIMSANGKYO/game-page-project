import { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";

const Lottery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 86%;

  .winNums {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: aliceblue;
    > p {
      text-align: center;
      line-height: 47px;
      width: 50px;
      height: 50px;
      border-radius: 50px;
      border: 2px solid black;
      font-weight: bold;
      background-color: white;
    }
  }
  .num-gen {
    cursor: pointer;
    width: 300px;
    height: 70px;
    border-radius: 50px;
    background-color: gray;
    color: white;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;
// 10씩 끊어서 색깔 변동맞추기
// 1~9 노란색
// 10~19 초록색
// 20~29 빨간색
// 30~39 파랑색
// 40~45 검은색

//[1,2,3,4,5,6,7,,]
export default function Lotto() {
  // 새로운 배열에 다시 요소들을 담았을 때,
  // 새로운 배열 안에 해당 요소가 없으면 푸쉬한다.

  const numbers = new Array(45).fill(0).map((v, i) => i + 1);
  const [winNumbers, setWinNumbers] = useState([]);

  function winHandler() {
    let randomNumbers = [];
    let i = 0;
    while (i < 6) {
      let randomIdx = Math.floor(Math.random() * numbers.length);
      let randomNum = numbers[randomIdx];
      if (!randomNumbers.includes(randomNum)) {
        randomNumbers.push(randomNum);
        i++;
      }
      randomNumbers.sort((a, b) => a - b);
    }
    setWinNumbers(randomNumbers);
  }

  return (
    <Lottery>
      <h1>로또 추첨기</h1>
      <button className="num-gen" onClick={winHandler}>
        번호 생성
      </button>
      <div className="winNums">
        {winNumbers.map((e) => (
          <p key={winNumbers.indexOf(e)}>{e}</p>
        ))}
      </div>
      <h2>내가 산 로또 !</h2>
      <Input />
    </Lottery>
  );
}
//FIXME: 중복되는 부분을 제거하고 6개로 채워넣어야됨

// 랜덤번호가 총 6개 push 를 통해 추가되는 반복문에서
// while(arr.length===6)
// push를 해주는값이 배열에 존재하고있는 값이라면 다시 랜덤값을 넣는다

// 이번 주 당첨 번호 입력
// 내가 산 로또 번호를 입력하여 입력값을 버튼을 누르면

// 1. 번호 추천 기능 v
// 2. 이번 주 로또 당첨 번호 입력 v
// 3. 내가 구입한 로또 번호 입력 v
// 4. 버튼 누르면 당첨 확인 가능 v
