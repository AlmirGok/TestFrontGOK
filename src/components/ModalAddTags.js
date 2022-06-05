import React from "react";
import { ContainerModalAddTags } from "./Styles.js";

import { InputSeach, Button } from "../components";

const ModalAddTags = ({ content }) => (
  <ContainerModalAddTags>
    <p>Adicionar tags</p>
    <div className="BoxInput">
      <InputSeach
        Placeholder="Buscar..."
        IconInput="/assets/search.svg"
      ></InputSeach>
    </div>
    <div className="BoxTags">
      <span> Sugestões </span>
      <div>
        Java <img src="/assets/addTagsWhite.svg" />
      </div>
      <div>
        Phyton <img src="/assets/addTagsWhite.svg" />
      </div>
      <div>
        J.son <img src="/assets/addTagsWhite.svg" />
      </div>
      <div>
        C# <img src="/assets/addTagsWhite.svg" />
      </div>
      <div>
        TypeScript <img src="/assets/addTagsWhite.svg" />
      </div>
      <div>
        GraphQL <img src="/assets/addTagsWhite.svg" />
      </div>
      <div>
        ReactJs <img src="/assets/addTagsWhite.svg" />
      </div>
      <div>
        React Native <img src="/assets/addTagsWhite.svg" />
      </div>
      <div>
        IOS <img src="/assets/addTagsWhite.svg" />
      </div>
      <div>
        Android <img src="/assets/addTagsWhite.svg" />
      </div>
    </div>
    <div className="BoxBtn">
      <Button content="Salvar" />
      <label for="BoxModalAddTags">Cancelar</label>
    </div>
  </ContainerModalAddTags>
);

export default ModalAddTags;
