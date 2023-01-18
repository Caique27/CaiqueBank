import React from "react";
import { useParams } from "react-router-dom";
function HomeGerente() {
  const { login } = useParams();
  return <h1>Home do Gerente {login}</h1>;
}
export default HomeGerente;
