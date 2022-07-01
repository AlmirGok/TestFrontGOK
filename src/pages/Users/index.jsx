import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ContainerUsers } from "./style.jsx";

// Components
import { ListUser, Header } from "../../components";

function Users() {
  return (
    <ContainerUsers>
      <section className="ContentUsers">
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
      </section>
    </ContainerUsers>
  );
}

export default Users;
