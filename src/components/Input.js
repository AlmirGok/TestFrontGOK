import React from "react";
import { ContainerInput } from "./Styles.js";

const Input = ({ content, onClick }) => (
  <ContainerInput>
    <input placeholder={content}></input>
    <img src="/assets/account.svg" />
  </ContainerInput>
);

export default Input;
