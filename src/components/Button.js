import React from "react";
import styled from "styled-components";

const Button = ({ content, onClick }) => (
  <Container onClick={() => onClick()}>{content}</Container>
);

const Container = styled.button`
  background-color: black;
  color: #fff;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  height: 40px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  box-shadow: 0px 3px 7px gray;
  animation: 0.5s;
  transition: 0.5s;
  transform: scale(1);
  :hover {
    animation: 0.5s;
    transition: 0.5s;
    transform: scale(1.1);
  }
`;

export default Button;
