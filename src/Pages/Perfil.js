import React from "react";
import styled from "styled-components";
import Modal from "react-modal";

// Components
import {
  InforPerfil,
  ListRepoUser,
  InputSeach,
  ModalAddTags,
  ModalEditTags,
} from "../components";

function Users() {
  return (
    <Container>
      <Content>
        <InforPerfil
          photo="assets/Perfil.png"
          name="Rick Bone Junior"
          link="@rickbonejr"
          seguidores="109"
          seguidor="56"
          favoritos="8"
          sobre="Desenvolvedor Javascript - React, React Native, Vue, TypeScript, GraphQL, Redux, NodeJS"
          empresa="GO.K Digital"
          endereco="São Paulo, Brazil"
          site="rickbonejr.com.br"
          destaque="Developer Program Member"
        ></InforPerfil>
        <section className="BoxScrollList">
          <header>
            <InputSeach
              Placeholder="Buscar um repositório..."
              IconInput="/assets/search.svg"
            ></InputSeach>
            <InputSeach
              Placeholder="Filtrar por tag"
              IconInput="/assets/filter_list.svg"
            ></InputSeach>
          </header>
          <ListRepoUser
            NameProject="project-name-java"
            Infor="Project application with component animations with React Native"
            Linguagem="React Native"
            Atualizacao="Atualizado a 2 dias atrás"
            Stars="2"
            Contas="6"
            BtnAdd="True"
          ></ListRepoUser>
          <ListRepoUser
            NameProject="project-name-java"
            Infor="Project application with component animations with React Native"
            Linguagem="React Native"
            Atualizacao="Atualizado a 2 dias atrás"
            Stars="2"
            Contas="5"
            TagsActive="True"
            BtnEdit="True"
            tags="JavaScript"
          ></ListRepoUser>
          <BoxModalAddTags>
            <input
              className="InputModal"
              type="checkbox"
              id="BoxModalAddTags"
              name="scales"
            />
            <div className="BoxModal">
              <ModalAddTags></ModalAddTags>
            </div>
          </BoxModalAddTags>
          <BoxModalEditTags>
            <input
              className="InputModal"
              type="checkbox"
              id="BoxModalEditTags"
              name="scales"
            />
            <div className="BoxModal">
              <ModalEditTags></ModalEditTags>
            </div>
          </BoxModalEditTags>
          <div className="BottomMargin"></div>
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
  flex-direction: row;
  overflow: hidden;
  width: calc(100% - 10%);
  padding: 0px 5%;
  height: 100%;
  .BoxScrollList {
    height: 100%;
    padding-top: 20px;
    overflow-y: scroll;
    display: flex;
    flex: 1;
    flex-direction: column;
    .BottomMargin {
      width: 100%;
      margin-bottom: 30px;
      display: block;
    }
  }
  header {
    width: 90%;
    margin: 0px 5% 15px 5%;
    height: 60px;
    display: flex;
    justify-content: space-between;
  }
`;
const BoxModalAddTags = styled.div`
  input.InputModal {
    display: none;
  }
  input:checked + div.BoxModal {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div.BoxModal {
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    display: none;
    align-items: center;
    justify-content: center;
    background: #00000096;
    position: fixed;
  }
`;
const BoxModalEditTags = styled.div`
  input.InputModal {
    display: none;
  }
  input:checked + div.BoxModal {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div.BoxModal {
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    display: none;
    align-items: center;
    justify-content: center;
    background: #00000096;
    position: fixed;
  }
`;
export default Users;
