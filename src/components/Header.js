import { Link } from "react-router-dom";
import styled from "styled-components";

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  height: 8%;
  background-color: grey;

  a {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 200px;
    text-decoration: none;
    color: black;
  }
  .fa-bars {
    cursor: pointer;
  }
`;
export default function Header({ navHandler }) {
  return (
    <Head>
      <div className="title">
        <Link to="/">
          <i className="fa-solid fa-gamepad fa-2x"></i>
          <h2>Toy Game</h2>
        </Link>
      </div>
      <i onClick={navHandler} className="fa-solid fa-bars fa-3x"></i>
    </Head>
  );
}
