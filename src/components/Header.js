import React from "react";
import { Button } from "../components";
import { HeaderWhite } from "./Styles.js";

const Header = ({ content, onClick }) => (
  <HeaderWhite>
    <div>
      <img src="/assets/logo.svg" />
    </div>
    <div>
      <Button content="Adicionar novo" />
    </div>
  </HeaderWhite>
);

export default Header;
