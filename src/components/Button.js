import React, { Component } from "react";

import { BtnBlack } from "./Styles.js";

const Button = ({ content, onClick }) => (
  <BtnBlack onClick={() => onClick()}>{content}</BtnBlack>
);

export default Button;
