import React from "react";
import styled from "styled-components";
import { Button } from "../components";

const Header = ({ content, onClick }) => (
  <Container>
    <div>
      <img src="/assets/logo.svg" />
    </div>
    <div>
      <Button content="Adicionar novo" />
    </div>
  </Container>
);

const Container = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 3px #a7a7a7c4;
  height: 70px;
  color: #fff;
  width: 100%;
  position: relative;
  justify-content: space-between;
  div {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 110px;
    }
  }
`;

export default Header;
