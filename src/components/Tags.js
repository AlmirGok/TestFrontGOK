import React from "react";
import styled from "styled-components";

const Tags = ({ tags, onClick, iconTags }) => (
  <Container onClick={() => onClick()}>#{tags}</Container>
);

const Container = styled.button`
  background-color: #00000026;
  color: #000;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  height: 35px;
  border: none;
  border-radius: 40px;
  animation: 0.2s;
  transition: 0.2s;
  padding: 0px 10px;
  box-sizing: border-box;
  border: solid 2px Transparent;
`;

export default Tags;
