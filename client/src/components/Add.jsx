import { useState } from "react";
import "../styles/add.css";

const Add = () => {
  const [raw, setRaw] = useState(["", "", ""]);

  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [ingredient, setIngredient] = useState("");

  const [recipe, setRecipe] = useState([]);

  const handleIngredient = (e) => {
    e.preventDefault();
    setRecipe([...recipe, `${quantity}${unit} ${ingredient}`]);
  };

  const handleAdd = (e) => {
    e.preventDefault();
  };
  return (
    <div className="add">
      <div className="add__add">
        <form className="add__form">
          <input type="text" className="add__input" placeholder="Nom du plat" name="title" onChange={(e) => setTitle(e.target.value)} />

          {raw.map((a, i) => (
            <div key={i}>
              <input
                type="number"
                name="quantity"
                className="add__input"
                placeholder="Quantité"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <input type="text" name="unit" className="add__input " placeholder="Unité" onChange={(e) => setUnit(e.target.value)} />
              <input
                type="text"
                name="ingredient"
                className="add__input "
                placeholder="Ingrédient"
                onChange={(e) => setIngredient(e.target.value)}
              />
              <button onClick={handleIngredient} style={{ display: "none" }}>
                O
              </button>
            </div>
          ))}

          <button
            className="add__btnIngredient"
            onClick={(e) => {
              e.preventDefault();
              setRaw([...raw, ""]);
            }}
          >
            +1 Ingrédient
          </button>
          <div>
            {recipe.length !== 0 &&
              recipe.map((item, index) => (
                <span key={index}>
                  <p>{item}</p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setRecipe(recipe.filter((word) => word != item));
                    }}
                  >
                    DELETE
                  </button>
                </span>
              ))}
          </div>

          <button className="add__btnAdd" onClick={handleAdd}>
            Ajouter le plat !
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
