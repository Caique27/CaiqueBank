import React, { useState } from "react";
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

function LoginCliente() {
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [buttonStatus, setButtonStatus] = useState("waiting");
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
        event.preventDefault();
        console.log("submit");
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
          id="outlined-basic"
          label="Conta"
          variant="outlined"
          margin="normal"
          color="third"
          focused
          sx={{ width: "140%" }}
          inputProps={{
            style: {
              height: "110%",
            },
          }}
        />
        <TextField
          id="outlined-basic"
          label="Agência"
          variant="outlined"
          margin="normal"
          color="third"
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
          id="outlined-basic"
          label="Senha"
          type={mostrarSenha ? "text" : "password"}
          value={senha}
          onChange={(event) => {
            setSenha(event.target.value);
          }}
          variant="outlined"
          margin="normal"
          color="third"
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
      <LoginButton
        texto="Entrar"
        status={buttonStatus}
        clicar={setButtonStatus}
      />

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
