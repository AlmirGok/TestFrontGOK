import React from "react";
import { ContainerInputSeach } from "./Styles.js";

const InputSeach = ({ Placeholder, IconInput }) => (
  <ContainerInputSeach>
    <input placeholder={Placeholder}></input>
    <img src={IconInput} />
  </ContainerInputSeach>
);

export default InputSeach;
