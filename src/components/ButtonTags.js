import React from "react";
import { BtnTags } from "./Styles.js";

const ButtonTags = ({ content, onClick, iconTags }) => (
  <BtnTags onClick={() => onClick()}>
    {content}
    <img src={iconTags} />
  </BtnTags>
);

export default ButtonTags;
