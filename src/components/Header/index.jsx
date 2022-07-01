import React from "react";
import Button from "../Button";
import { HeaderWhite } from "./style.jsx";

const Header = ({ content, onClick }) => (
  <HeaderWhite>
    <div>
      <img alt="" src="/assets/logo.svg" />
    </div>
    <div>
      <Button content="Adicionar novo" />
    </div>
  </HeaderWhite>
);

export default Header;
