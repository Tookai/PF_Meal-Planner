import Add from "../components/Add";
import Edit from "../components/Edit";
import "../styles/admin.css";

const Admin = () => {
  return (
    <div className="admin">
      <Add />
      <div className="separator"></div>
      <Edit />
    </div>
  );
};

export default Admin;
