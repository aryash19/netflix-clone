import React from "react";
import background from "../assets/login.jpg";
import styled from "styled-components";

export default function Backgroundimage() {
  return (
    <Container>
      <img src={background} alt="netflix background"/>
    </Container>
  )
}
const Container = styled.div`
height: 100vh;
width: 100vw;
img {
    height: 100vh;
    width: 100vw;
}
`;
