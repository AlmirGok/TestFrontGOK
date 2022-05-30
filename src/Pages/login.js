import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

// Components
import { Button, Input } from "../components";

function Login() {
  return (
    <Container>
      <Content>
        <BoxLoginImput>
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
        </BoxLoginImput>
        <BoxLoginArt>
          <div>
            <img src="/assets/art.svg" />
          </div>
          <text>
            Gerencie e adicione <span>tags</span> ao seus{" "}
            <span>repositórios</span> favoritos.
          </text>
        </BoxLoginArt>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  height: 100%;
  background: #ededed;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: fixed;
`;
const Content = styled.div`
  display: flex;
  height: 474px;
  background: #fff;
  width: 800px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #cfcfcf;
`;
const BoxLoginImput = styled.div`
  flex: 1;
  height: 100%;
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px 0px 0px 10px;
  background: #fff;
  p.TextTermos {
    font-size: 15px;
    padding: 10px;
    text-align: center;
    span {
      color: blue;
    }
  }
  div {
    display: flex;
    justify-items: center;
    justify-content: center;
    align-items: center;
    flex: 1;
    flex-direction: column;
    width: 300px;
    .LinkPages {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }
    p {
      display: flex;
      width: 90%;
      justify-items: start;
    }
    p.title {
      font-size: 23px;
      font-weight: bold;
      margin: 0px 0px 5px 0px;
    }
    p.infor {
      font-size: 15px;
      color: gray;
    }
    img {
      width: 200px;
    }
  }
`;
const BoxLoginArt = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  border-radius: 0px 10px 10px 0px;
  background: black;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  div {
    width: 100%;
    display: flex;
    flex: 1;
    padding: 10px;
    img {
      width: 100%;
    }
  }
  text {
    padding: 10px 40px 30px 40px;
    color: #fff;
    text-align: center;
    font-size: 18px;
    span {
      font-weight: bold;
    }
  }
`;
export default Login;
