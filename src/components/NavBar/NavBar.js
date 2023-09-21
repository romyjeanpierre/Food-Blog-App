import { Link } from "react-router-dom";
import { logOut } from "../../utilities/users-service";
import styles from "./NavBar.module.css";
import logomod3 from '../../assets/logomod3.png';
import * as usersService from '../../utilities/users-service';


function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    usersService.logOut();
    setUser(null);
  };
  return (
    <nav className={styles.NavBar}>
      <img
            src={logomod3}
            alt="RommY Logo"
            className="rounded-3xl mx-auto w-2/3 md:w-3/ font-burtons border shadow-2xl shadow-white-200 hover:shadow-cyan-500"
          />
      <h2>Welcome, {user.name} to RommY</h2>
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link> 
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
    </nav>
  );
}

export default NavBar;


