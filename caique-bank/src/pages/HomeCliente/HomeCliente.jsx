import React, { useState, useContext } from "react";
import "./HomeCliente.css";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
function HomeCliente() {
  const { conta } = useParams();

  return (
    <main className="HomeCliente-page">
      <Header nome="Cliente" />
      <section className="HomeCliente-content">aa</section>
    </main>
  );
}
export default HomeCliente;
