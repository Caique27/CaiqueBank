import React, { useState, useContext } from "react";
import "./LoginGerente.css";
import {
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import LoginButton from "../LoginButton/LoginButton.jsx";
import Validacao from "../../contexts/Validacao.js";
import Autenticacao from "../../contexts/Autenticacao.js";
import { useHistory } from "react-router-dom";

function LoginGerente() {
  const history = useHistory();

  const [senha, setSenha] = useState("");
  const [login, setLogin] = useState("");

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [buttonStatus, setButtonStatus] = useState("waiting");

  const [errosLogin, setErrosLogin] = useState({ valido: true, texto: "" });
  const [errosSenha, setErrosSenha] = useState({ valido: true, texto: "" });

  const validacoes = useContext(Validacao);
  const autenticacoes = useContext(Autenticacao);

  var emptyFields = senha == "" || login == "";
  var noErrors = errosLogin.valido && errosSenha.valido;

  function checarCampo(id, func, value) {
    //teste preenchimento
    func(validacoes.preenchimento(value));
  }
  function finalCheck() {
    checarCampo("Senha", setErrosSenha, senha);
    checarCampo("Login", setErrosLogin, login);
  }

  async function autenticar(evento) {
    evento.preventDefault();

    setButtonStatus("loading");

    if (emptyFields) {
      setTimeout(() => {
        setButtonStatus("waiting");
      }, 500);

      finalCheck();
    } else if (buttonStatus == "waiting" && noErrors) {
      var resultado = await autenticacoes.autenticacaoGerente(login, senha);

      if (resultado.Autenticado) {
        //Redirecionamento de página
        history.replace(`/gerente/${login}`);
      } else {
        if (resultado.erro == "*Senha incorreta") {
          setTimeout(() => {
            setErrosSenha({ valido: false, texto: "*Senha Incorreta" });
            setButtonStatus("waiting");
          }, 1000);
        } else {
          setTimeout(() => {
            setErrosLogin({
              valido: false,
              texto: "*Usuário não existe",
            });

            setButtonStatus("waiting");
          }, 1000);
        }
      }
    } else {
      setButtonStatus("waiting");
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
      className="LoginGerente-form"
      onSubmit={(event) => {
        autenticar(event);
      }}
    >
      <Typography
        sx={{
          fontFamily: "proxima nova",
          fontSize: "110%",
          fontWeight: 500,
        }}
        align="center"
      >
        Faça login no sistema
      </Typography>
      <div className="LoginCliente-dados-login">
        <TextField
          onBlur={(event) => checarCampo(event.target.id, setErrosLogin, login)}
          id="Login"
          label="Login"
          value={login}
          onChange={(event) => {
            setLogin(event.target.value);
          }}
          helperText={errosLogin.texto}
          variant="outlined"
          margin="normal"
          autoComplete="off"
          error={!errosLogin.valido}
          color={errosLogin.valido ? "third" : "error"}
          focused
          disabled={buttonStatus == "loading" ? true : false}
          sx={{ width: "140%" }}
          inputProps={{
            style: {
              height: "1.7rem",
            },
          }}
        />
      </div>

      <div className="LoginGerente-senha">
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
          disabled={buttonStatus == "loading" ? true : false}
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

            form: {
              autocomplete: "off",
            },
          }}
        />
        <Typography
          sx={{
            fontFamily: "proxima nova",
            fontSize: "90%",
            marginTop: "4%",
            marginLeft: "10%",
          }}
        >
          Esqueceu sua senha?
        </Typography>
      </div>
      <LoginButton texto="Entrar" status={buttonStatus} />
    </form>
  );
}
export default LoginGerente;
