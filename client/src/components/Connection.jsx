import "../styles/connection.css";
import { useMutation } from "react-query";
import * as api from "../apiCalls";
import { useState } from "react";
import Cookies from "js-cookie";

const Connection = () => {
  const [regPseudo, setRegPseudo] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const [logPseudo, setLogPseudo] = useState("");
  const [logPassword, setLogPassword] = useState("");

  console.log(regPseudo, regPassword);

  const { mutate: register, isLoading: loadReg } = useMutation(api.registerUser, {
    onSuccess: () => {
      alert("Votre compte a bien été créé, maintenant vous pouvez vous connecter.");
    },
  });

  const { mutate: login, isLoading: loadLog } = useMutation(api.loginUser, {
    onSuccess: (res) => {
      const user = { pseudo: res.pseudo, userId: res.userId, token: res.token };
      console.log(user);
      Cookies.set("user", JSON.stringify(user), { expires: 7 });
      window.location.reload();
    },
  });

  const handleConnection = (e) => {
    e.preventDefault();
    const user = { pseudo: logPseudo, password: logPassword };
    if (user.pseudo !== "" && user.password !== "") {
      login(user);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const user = { pseudo: regPseudo, password: regPassword };
    if (user.pseudo !== "" && user.password !== "") {
      register(user);
    }
  };

  return (
    <div className="connection">
      <h3>Afin de pouvoir administrer les recettes vous devez vous connecter à un compte administrateur.</h3>
      <form onSubmit={handleConnection}>
        <input type="text" placeholder="Pseudo" onChange={(e) => setLogPseudo(e.target.value)} />
        <input type="password" placeholder="Mot de passe" onChange={(e) => setLogPassword(e.target.value)} />
        {loadLog ? <button type="submit">....</button> : <button type="submit">Créer son compte</button>}
      </form>
      <div className="separator"></div>
      <h3>Vous n'avez pas encore de compte ?</h3>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Pseudo" onChange={(e) => setRegPseudo(e.target.value)} />
        <input type="password" placeholder="Mot de passe" onChange={(e) => setRegPassword(e.target.value)} />
        {loadReg ? <button type="submit">....</button> : <button type="submit">Créer son compte</button>}
      </form>
    </div>
  );
};

export default Connection;
