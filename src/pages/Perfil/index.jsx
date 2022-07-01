import React from "react";
import Modal from "react-modal";

// Components
import {
  InforPerfil,
  ListRepoUser,
  InputSeach,
  ModalAddTags,
  ModalEditTags,
} from "../../components";
import { ContainerPerfil } from "./style.jsx";

function Users() {
  return (
    <ContainerPerfil>
      <section className="ContentPerfil">
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

          <div className="BottomMargin"></div>
        </section>
      </section>

      <div className="BoxModalAddTags">
        <input className="InputModal" type="checkbox" id="BoxModalAddTags" />
        <div className="BoxModal">
          <ModalAddTags></ModalAddTags>
        </div>
      </div>
      <div className="BoxModalEditTags">
        <input className="InputModal" type="checkbox" id="BoxModalEditTags" />
        <div className="BoxModal">
          <ModalEditTags></ModalEditTags>
        </div>
      </div>
    </ContainerPerfil>
  );
}

export default Users;
