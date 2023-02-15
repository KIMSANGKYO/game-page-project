import styled from "styled-components";

const Foot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(52, 52, 62);
  color: white;
  position: fixed;
  width: 100%;
  bottom: 0px;
  height: 6%;
  font-weight: bold;
  /* border-top: 2px solid black; */
`;

export default function Footer() {
  return (
    <Foot>
      <p> Created by Fairy</p>
    </Foot>
  );
}
