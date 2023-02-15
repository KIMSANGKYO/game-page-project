import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MainLoading from "../components/MainLoading";

const MainPage = styled.div`
  display: flex;
  background-color: rgb(68, 68, 82);
  width: 100%;
  height: 86%;
  color: white;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  > section {
    display: flex;
    width: 80%;
    height: 80%;
    border: 1px solid white;
    > a > img {
      width: 300px;
      height: 200px;
    }
  }
`;

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  return (
    <MainPage>
      {isLoading ? <MainLoading /> : null}
      <section>
        <Link to="/lotto">
          <img src="lotto.jpg"></img>
        </Link>
      </section>
    </MainPage>
  );
}

//TODO:메인페이지 꾸미기

// 처음 디스코드처럼 게임기가 돌아가는 모형이 나오고
// 슬라이드 효과로 문이 열리는 것처럼
// 각 페이지로 갈 수 있는 이미지 링크
