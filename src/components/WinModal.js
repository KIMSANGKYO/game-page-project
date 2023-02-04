import styled from "styled-components";

const WinAlarm = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  position: fixed;
  width: 400px;
  height: 200px;
  background-color: beige;
  bottom: 420px;
  border-radius: 20px;

  .win-close {
    display: flex;
    width: 100%;
    justify-content: end;
    background-color: brown;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 20px 20px 0px 0px;
    > button {
      margin-right: 10px;
      /* border-style: none; */
    }
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0;
    font-size: 30px;
    font-weight: bold;
  }
`;

export default function WinModal({ setIsWin }) {
  const closeHandler = () => {
    setIsWin(false);
  };

  return (
    <WinAlarm>
      <div className="win-close">
        <button onClick={closeHandler}>x 닫기</button>
      </div>
      <p>당첨되셨습니다 !</p>
    </WinAlarm>
  );
}
