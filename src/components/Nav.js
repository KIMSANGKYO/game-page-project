import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  top: 0px;
  right: 0px;
  width: 50vw;
  height: 100vh;
  border: 3px solid grey;
  //FIXME: 테두리수정

  background: black;
  i {
    cursor: pointer;
    color: white;
    font-weight: bold;
  }
  .x-box {
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    margin-left: 30px;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 30px;
    padding: 10px;
    margin: 10px;
    border: 1px solid white;
  }
  .contents {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* border: 1px solid white; */
  }
`;

export default function Nav({ navHandler }) {
  return (
    <Navigate>
      <div className="x-box">
        <i onClick={navHandler} class="fa-solid fa-x fa-2x"></i>
      </div>
      <div className="contents">
        <Link to="/">메인으로</Link>
        <Link to="/lotto">로또 추첨</Link>
      </div>
    </Navigate>
  );
}
