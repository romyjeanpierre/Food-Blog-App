import styles from './UserLogOut.module.css';
import { logOut } from '../../utilities/users-service';
import logomod3 from '../../assets/logomod3.png';


export default function UserLogOut({ user, setUser }) {
function handleLogOut() {
  logOut();
  setUser(null);
}

return (
 
  <div className={styles.UserLogOut}>
     <img
            src={logomod3}
            alt="RommY Logo"
            className="rounded-3xl mx-auto w-2/3 md:w-3/ font-burtons border shadow-2xl shadow-white-200 hover:shadow-cyan-500"
          />
    <div>{user.name}</div>
    <div className={styles.email}>{user.email}</div>
    <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
  </div>
);
}