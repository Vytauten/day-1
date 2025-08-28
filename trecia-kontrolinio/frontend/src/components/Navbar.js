import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const handleClick = (e) => {
    logout();
  };

  const { user } = useAuthContext();

  return (
    <header>
      <div className="container">
        <Link to={"/"}>
          <h1>Mano darbai</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <button onClick={handleClick}>Atsijungti</button>
            </div>
          )}
          {!user && (
            <div>
              <Link to={"/login"}>Prisijungti</Link>
              <Link to={"/signup"}>Registruotis</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
