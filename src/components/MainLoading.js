import styled from "styled-components";

const Loading = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 86%;
  background-color: purple;
  position: fixed;
  align-items: center;
  justify-content: center;

  > .fa-gamepad {
    animation: rotation 1s infinite linear;
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default function MainLoading() {
  return (
    <Loading>
      <i className="fa-solid fa-gamepad fa-3x"></i>
      <p>Loading...</p>
    </Loading>
  );
}
