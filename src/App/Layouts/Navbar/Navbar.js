import { Link, useHistory } from "react-router-dom";
import LocalMallIcon from "@material-ui/icons/LocalMall";

import "./styleNavbar.css";

export default function Navbar() {
  const history = useHistory();

  const handleGoHome = () => history.push('/')
  
  return (
    <nav className="nav">
      <img className="logo" src="/images/crown.svg" alt="crown" onClick={handleGoHome} />
      <div className="links">
        <Link className="link" to="/shop">
          Shop
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
        <Link className="link" to="/sign">
          Sign
        </Link>
        <LocalMallIcon className=" cart" />
      </div>
    </nav>
  );
}
