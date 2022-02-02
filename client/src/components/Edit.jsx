import "../styles/edit.css";

const Edit = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    alert("vous avez cherché");
  };

  return (
    <div className="edit">
      <form onSubmit={handleSearch} className="edit__form">
        <input type="text" placeholder="Chercher une recette" className="edit__input" />
        <button type="submit" style={{ display: "none" }}></button>
      </form>

      <form onSubmit={handleSearch} className="edit__form">
        <input type="text" placeholder="Chercher un ingrédient" className="edit__input" />
        <button type="submit" style={{ display: "none" }}></button>
      </form>
    </div>
  );
};

export default Edit;
