import styled from "styled-components";

const Foot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  position: fixed;
  width: 100%;
  bottom: 0px;
  height: 6%;
  font-weight: bold;
`;

export default function Footer() {
  return (
    <Foot>
      <p> Created by Fairy</p>
    </Foot>
  );
}
