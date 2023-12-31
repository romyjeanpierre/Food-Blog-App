
//import logomod3 from '../../../assets/logomod3.png'
import SignUpForm from "../components/SignUpForm/SignUpForm";
import LoginForm from "../components/LogInForm/LogInForm";
import {useState} from 'react'
import styles from './AuthPage.module.css';
// import Logo from '../components/Logo/Logo.js';

function AuthPage({setUser}){
    const [showLogin, setShowLogin] = useState(true)
    return(
        <main className ={styles.AuthPage}>
        <div>
           
            <h3 onClick={()=> setShowLogin(!showLogin)}> {showLogin ? "SIGN UP" : "Log In"}</h3>
           { showLogin ? 
           
           (<LoginForm setUser={setUser}/> ) :
           (<SignUpForm setUser={setUser}/>) 
           }
        </div>
        </main>
    )
}

export default AuthPage;
