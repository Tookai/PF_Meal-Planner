import "../styles/recette.css";

const Recette = ({ jour, plat, ingredients }) => {
  return (
    <div className="recette">
      <p>{jour} :</p>
      <h2>{plat}</h2>
      <p>Afin de réaliser cette recette vous aurez besoin de :</p>
      <ul>
        {ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>

      <button className="recette__addBtn">Ajouter aux favoris</button>
    </div>
  );
};

export default Recette;
