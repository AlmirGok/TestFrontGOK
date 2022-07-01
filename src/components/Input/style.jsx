import styled from "styled-components";

export const ContainerInput = styled.div`
  background-color: #fff;
  height: 40px;
  width: 100%;
  position: relative;
  display: flex;
  img {
    position: absolute;
    width: 20px !important;
    height: 20px;
    left: 25px;
    fill: #fce57e;
  }
  input {
    background-color: #fff;
    height: 40px;
    width: calc(90% - 55px);
    display: flex;
    margin: 15px 0px;
    padding: 0px 10px 0px 35px;
    border: solid 1px gray;
    border-radius: 5px;
    animation: 0.5s;
    transition: 0.5s;
    font-size: 17px;
  }
`;