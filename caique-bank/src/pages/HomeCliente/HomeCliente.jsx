import React from "react";
import { useParams } from "react-router-dom";
function HomeCliente() {
  const { conta } = useParams();
  return <h1>Home do Cliente da conta {conta}</h1>;
}
export default HomeCliente;
