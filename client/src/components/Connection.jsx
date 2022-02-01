import "../styles/connection.css";

const Connection = () => {
  const handleConnection = (e) => {
    e.preventDefault();
  };
  return (
    <div className="connection">
      <h3>Afin de pouvoir administrer les recettes vous devez vous connecter à un compte administrateur.</h3>
      <form onSubmit={handleConnection}>
        <input type="text" placeholder="Pseudo" />
        <input type="password" placeholder="Mot de passe" />
        <button type="submit">Connection</button>
      </form>
    </div>
  );
};

export default Connection;
