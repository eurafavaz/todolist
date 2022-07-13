import logo from "../../assets/images/icons8-check-62.png";
import styles from "../Navbar/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <img
          src={logo}
          alt="figura de agenda de tarefas azul"
          width="30"
          height="24"
          className="d-inline-block align-text-top"
        />
      </div>
    </nav>
  );
}

export default Navbar;
