import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ContainerLogin } from "./Styles.js";

// Components
import { Button, Input } from "../components";

function Login() {
  return (
    <ContainerLogin>
      <section className="ContentLogin">
        <div className="BoxLoginImput">
          <div>
            <img src="/assets/logo.svg" />
          </div>
          <div>
            <p class="title">Buscar usuário</p>
            <p class="infor">Crie sua conta através do seu usuário do GitHub</p>
            <Input content="Email" />

            <Link class="LinkPages" to="/Users">
              <Button content="Cadastrar" />
            </Link>
          </div>
          <p class="TextTermos">
            Termos de <span>política </span> e <span>privacidade </span>
          </p>
        </div>
        <div className="BoxLoginArt">
          <div>
            <img src="/assets/art.svg" />
          </div>
          <text>
            Gerencie e adicione <span>tags</span> ao seus{" "}
            <span>repositórios</span> favoritos.
          </text>
        </div>
      </section>
    </ContainerLogin>
  );
}

export default Login;
