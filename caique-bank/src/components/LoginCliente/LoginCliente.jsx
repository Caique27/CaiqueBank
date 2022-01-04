import React, { useState, useContext, useEffect } from "react";
import "./LoginCliente.css";
import {
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import LoginButton from "../LoginButton/LoginButton.jsx";
import Validacao from "../../contexts/Validacao.js";
import Autenticacao from "../../contexts/Autenticacao.js";

function LoginCliente() {
  const [senha, setSenha] = useState("");
  const [conta, setConta] = useState("");
  const [agencia, setAgencia] = useState("");

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [buttonStatus, setButtonStatus] = useState("waiting");

  const [errosAgencia, setErrosAgencia] = useState({ valido: true, texto: "" });
  const [errosConta, setErrosConta] = useState({ valido: true, texto: "" });
  const [errosSenha, setErrosSenha] = useState({ valido: true, texto: "" });

  const validacoes = useContext(Validacao);
  const autenticacoes = useContext(Autenticacao);

  var emptyFields = senha == "" || conta == "" || agencia == "";
  var noErrors = errosAgencia.valido && errosConta.valido && errosSenha.valido;

  const [count, setCount] = useState(0);

  //setLoading(true);

  function checarCampo(id, func, value) {
    //teste preenchimento
    if (id == "Senha") {
      func(validacoes.preenchimento(value));
    } else {
      func(validacoes.numero(value));
    }

    // checarNumericos(evento, func);
  }
  function finalCheck() {
    checarCampo("Senha", setErrosSenha, senha);
    checarCampo("Conta", setErrosConta, conta);
    checarCampo("Agencia", setErrosAgencia, agencia);
  }
  async function autenticar(evento) {
    evento.preventDefault();

    //setButtonStatus("loading");

    if (emptyFields) {
      setTimeout(() => {
        setButtonStatus("waiting");
      }, 500);

      finalCheck();
    } else if (buttonStatus == "waiting" && noErrors) {
      var resultado = await autenticacoes.autenticacao(conta, senha, agencia);
      console.log(resultado);
    }
  }

  const handleClickShowPassword = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className="LoginCliente-form"
      onSubmit={(event) => {
        autenticar(event);
      }}
    >
      <Typography
        sx={{
          fontFamily: "proxima nova regular",
          fontSize: "90%",
          fontWeight: 500,
        }}
        align="center"
      >
        Acesse sua conta
      </Typography>
      <div className="LoginCliente-dados-conta">
        <TextField
          onBlur={(event) => checarCampo(event.target.id, setErrosConta, conta)}
          id="Conta"
          label="Conta"
          value={conta}
          onChange={(event) => {
            setConta(event.target.value);
          }}
          helperText={errosConta.texto}
          variant="outlined"
          margin="normal"
          error={!errosConta.valido}
          color={errosConta.valido ? "third" : "error"}
          focused
          sx={{ width: "140%" }}
          inputProps={{
            style: {
              height: "110%",
            },
          }}
        />
        <TextField
          onBlur={(event) =>
            checarCampo(event.target.id, setErrosAgencia, agencia)
          }
          onChange={(event) => {
            setAgencia(event.target.value);
          }}
          id="Agencia"
          label="Agência"
          helperText={errosAgencia.texto}
          variant="outlined"
          margin="normal"
          error={!errosAgencia.valido}
          color={errosAgencia.valido ? "third" : "error"}
          inputProps={{
            style: {
              height: "110%",
            },
          }}
          focused
          fullWidth
        />
      </div>
      <div className="LoginCliente-senha">
        <TextField
          onBlur={(event) => checarCampo(event.target.id, setErrosSenha, senha)}
          id="Senha"
          label="Senha"
          helperText={errosSenha.texto}
          type={mostrarSenha ? "text" : "password"}
          value={senha}
          onChange={(event) => {
            setSenha(event.target.value);
          }}
          variant="outlined"
          margin="none"
          error={!errosSenha.valido}
          color={errosSenha.valido ? "third" : "error"}
          focused
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {!mostrarSenha ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
            style: {
              width: "110%",
              marginBottom: "0.01%",
              height: "90%",
            },
          }}
        />
        <Typography
          sx={{
            fontFamily: "proxima nova regular",
            fontSize: "70%",
            marginTop: "7%",
            marginLeft: "10%",
          }}
        >
          Esqueceu sua senha?
        </Typography>
      </div>
      <LoginButton texto="Entrar" status={buttonStatus} />

      <div className="LoginCliente-ajuda-conta">
        <Typography
          sx={{ fontFamily: "proxima nova regular", fontSize: "80%" }}
        >
          Ainda não tem uma conta ?
        </Typography>

        <Link to={"/caique"}>
          <Typography
            sx={{
              fontFamily: "proxima nova regular",
              color: "green",
              fontSize: "80%",
              marginLeft: 1,
            }}
          >
            Crie uma
          </Typography>
        </Link>
      </div>
      <div id="margin">.</div>
    </form>
  );
}
export default LoginCliente;
