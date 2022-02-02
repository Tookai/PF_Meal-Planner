import { useState } from "react";
import "../styles/add.css";

const Add = () => {
  const [raw, setRaw] = useState([]);

  const handleIngredient = (e) => {
    e.preventDefault();
  };

  const handleAdd = (e) => {
    e.preventDefault();
  };
  return (
    <div className="add">
      <div className="add__add">
        <form className="add__form">
          <input type="text" className="add__input" placeholder="Nom du plat" name="title" />
          <div>
            <input type="number" name="quantity" className="add__input" placeholder="Quantité" />
            <input type="text" name="unit" className="add__input " placeholder="Unité" />
            <input type="text" className="add__input " placeholder="Ingrédients" name="desc" />
          </div>
          <div>
            <input type="number" name="quantity" className="add__input" placeholder="Quantité" />
            <input type="text" name="unit" className="add__input " placeholder="Unité" />
            <input type="text" className="add__input " placeholder="Ingrédients" name="desc" />
          </div>
          <div>
            <input type="number" name="quantity" className="add__input" placeholder="Quantité" />
            <input type="text" name="unit" className="add__input " placeholder="Unité" />
            <input type="text" className="add__input " placeholder="Ingrédients" name="desc" />
          </div>
          {raw.map((a, i) => (
            <div key={i}>
              <input type="number" name="quantity" className="add__input" placeholder="Quantité" />
              <input type="text" name="unit" className="add__input " placeholder="Unité" />
              <input type="text" className="add__input " placeholder="Ingrédients" name="desc" />
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

          <button className="add__btnAdd" onClick={handleAdd}>
            Ajouter le plat !
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
