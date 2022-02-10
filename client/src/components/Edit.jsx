import "../styles/edit.css";
import * as api from "../apiCalls";
import { useQuery, useQueryClient } from "react-query";
import { useState } from "react";

const Edit = () => {
  const [title, setTitle] = useState("xxxxxxxxx");
  const [ingredient, setIngredient] = useState("xxxxxxxxx");

  const queryClient = useQueryClient();

  console.log(title);
  console.log(ingredient);

  const handleSearchTitle = (e) => {
    e.preventDefault();
    fetchIng();
    fetchTitle();
  };

  const handleSearchIng = (e) => {
    e.preventDefault();
    fetchTitle();
    fetchIng();
  };

  const { data: mealTitle, refetch: fetchTitle } = useQuery("search title", () => api.searchTitle(title), { enabled: false });

  const { data: mealIng, refetch: fetchIng } = useQuery("search ingredient", () => api.searchIngredient(ingredient), { enabled: false });

  return (
    <div className="edit">
      <form onSubmit={handleSearchTitle} className="edit__form">
        <input
          type="text"
          placeholder="Chercher une recette"
          className="edit__input"
          onChange={(e) => {
            setTitle(e.target.value);
            setIngredient("xxxxxxxx");
          }}
        />
        <button type="submit" style={{ display: "none" }}></button>
      </form>

      <form onSubmit={handleSearchIng} className="edit__form">
        <input
          type="text"
          placeholder="Chercher un ingrédient"
          className="edit__input"
          onChange={(e) => {
            setIngredient(e.target.value);
            setTitle("xxxxxxxxx");
          }}
        />
        <button type="submit" style={{ display: "none" }}></button>
      </form>

      <div className="response">
        {mealTitle &&
          mealTitle.map((meal, i) => (
            <div className="searched" key={meal + i}>
              <p>id: {meal._id}</p>
              <p>auteur: {meal.author}</p>
              <p>titre: {meal.title}</p>
              {meal.ingredients.map((ing, i) => (
                <p>
                  {i + 1}. {ing}
                </p>
              ))}
            </div>
          ))}

        {mealIng &&
          mealIng.map((meal, i) => (
            <div className="searched" key={meal + i}>
              <p>id: {meal._id}</p>
              <p>auteur: {meal.author}</p>
              <p>titre: {meal.title}</p>
              {meal.ingredients.map((ing, i) => (
                <p>
                  {i + 1}. {ing}
                </p>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Edit;
