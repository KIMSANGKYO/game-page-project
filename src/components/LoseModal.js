import styled from "styled-components";

const LoseAlarm = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  position: fixed;
  width: 400px;
  height: 200px;
  background-color: rgb(68, 68, 82);
  bottom: 420px;
  border-radius: 20px;
  border: 2px solid black;
  color: white;

  .lose-close {
    display: flex;
    width: 100%;
    justify-content: end;
    background-color: rgb(52, 52, 62);
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 20px 20px 0px 0px;
    border-bottom: 2px solid black;
    > i {
      margin-right: 10px;
      cursor: pointer;
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

export default function LoseModal({ setIsLose }) {
  const loseCloseHandler = () => {
    setIsLose(false);
  };

  return (
    <LoseAlarm>
      <div className="lose-close">
        <i onClick={loseCloseHandler} className="fa-solid fa-x fa-2x"></i>
        {/* <button onClick={loseCloseHandler}>x 닫기</button> */}
      </div>
      <p>꽝입니다 !</p>
    </LoseAlarm>
  );
}
