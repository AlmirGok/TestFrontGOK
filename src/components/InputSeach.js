import React from "react";
import styled from "styled-components";

const InputSeach = ({ Placeholder, IconInput }) => (
  <Container>
    <InputBox placeholder={Placeholder}></InputBox>
    <img src={IconInput} />
  </Container>
);

const Container = styled.div`
  background-color: #fff;
  height: 40px;
  width: calc(50% - 10px);
  position: relative;
  display: flex;
  img {
    position: absolute;
    width: 20px !important;
    height: 20px;
    left: 10px;
    top: 12px;
    fill: #fce57e;
  }
`;
const InputBox = styled.input`
  background-color: #fff;
  height: 40px;
  width: 100%;
  display: flex;
  padding: 0px 10px 0px 35px;
  border: solid 2px #e7e7e7;
  border-radius: 5px;
  animation: 0.5s;
  transition: 0.5s;
  box-shadow: 0px 2px 5px #d5d5d5;
  outline: none;
  font-size: 16px;
  :focus-visible {
    border: 2px solid #0017ff;
  }
`;

export default InputSeach;
