import React from "react";
import { ContainerTagsGray } from "./Styles.js";

const Tags = ({ tags, onClick, iconTags }) => (
  <ContainerTagsGray onClick={() => onClick()}>#{tags}</ContainerTagsGray>
);

export default Tags;
