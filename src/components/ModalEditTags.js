import React from "react";
import { ContainerModalEditTags } from "./Styles.js";

import { InputSeach, Button } from ".";

const ModalEditTags = ({ content }) => (
  <ContainerModalEditTags>
    <p>Editar tags</p>
    <div className="BoxInput">
      <InputSeach
        Placeholder="Buscar..."
        IconInput="/assets/search.svg"
      ></InputSeach>
    </div>
    <div className="BoxTagsSelect">
      <div>
        Front End <img src="/assets/addTagsBlack.svg" />
      </div>
      <div>
        JavaScript <img src="/assets/addTagsBlack.svg" />
      </div>
    </div>
    <div className="BoxTags">
      <span> Sugestões </span>
      <div>
        Java <img src="/assets/addTagsBlack.svg" />
      </div>
      <div>
        Phyton <img src="/assets/addTagsBlack.svg" />
      </div>
      <div>
        J.son <img src="/assets/addTagsBlack.svg" />
      </div>
      <div>
        C# <img src="/assets/addTagsBlack.svg" />
      </div>
      <div>
        TypeScript <img src="/assets/addTagsBlack.svg" />
      </div>
      <div>
        GraphQL <img src="/assets/addTagsBlack.svg" />
      </div>
      <div>
        ReactJs <img src="/assets/addTagsBlack.svg" />
      </div>
      <div>
        React Native <img src="/assets/addTagsBlack.svg" />
      </div>
      <div>
        IOS <img src="/assets/addTagsBlack.svg" />
      </div>
      <div>
        Android <img src="/assets/addTagsBlack.svg" />
      </div>
    </div>
    <div className="BoxBtn">
      <Button content="Salvar" />
      <label for="BoxModalEditTags">Cancelar</label>
    </div>
  </ContainerModalEditTags>
);

export default ModalEditTags;
