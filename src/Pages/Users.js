import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";

// Components
import { ListUser, Header } from "../components";

function Users() {
  return (
    <Container>
      <Content>
        <Header></Header>
        <section className="BoxScrollList">
          <Link class="LinkPages" to="/Perfil">
            <ListUser
              ProfilePicture="assets/Perfil.png"
              Name="John Doe Santos"
              Link="johndoesantos"
              Company="GO.K Digital"
              Address="São Paulo, Brazil"
              Stars="2"
            />
          </Link>
          <ListUser
            ProfilePicture="assets/Perfil.png"
            Name="John Doe Santos"
            Link="johndoesantos"
            Company="GO.K Digital"
            Address="São Paulo, Brazil"
            Stars="2"
          />
          <ListUser
            ProfilePicture="assets/Perfil.png"
            Name="John Doe Santos"
            Link="johndoesantos"
            Company="GO.K Digital"
            Address="São Paulo, Brazil"
            Stars="2"
          />
          <ListUser
            ProfilePicture="assets/Perfil.png"
            Name="John Doe Santos"
            Link="johndoesantos"
            Company="GO.K Digital"
            Address="São Paulo, Brazil"
            Stars="2"
          />
          <ListUser
            ProfilePicture="assets/Perfil.png"
            Name="John Doe Santos"
            Link="johndoesantos"
            Company="GO.K Digital"
            Address="São Paulo, Brazil"
            Stars="2"
          />
        </section>
      </Content>
    </Container>
  );
}
const Container = styled.div`
  color: #fff;
  background: #ededed;
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px #b3b3b3;
  color: #fff;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  height: 100%;
  .BoxScrollList {
    height: 100%;
    width: calc(100% - 10%);
    padding: 0px 5%;
    padding-top: 20px;
    padding-bottom: 20px;
    overflow-y: scroll;
  }
  .LinkPages {
    text-decoration: none;
  }
`;
export default Users;
