import React from "react"; //é a primeira coisa q deve ser feita, mesmo que você n use

function ToDo(props) {
  return (
    <div>
      <div>Titulo: {props.title}</div>
      <div>Descrição: {props.description}</div>
      <div>Skill: {props.habilidade}</div>
    </div>
  );
}

export default ToDo; //fala que outro arquivo pode importar essa função
