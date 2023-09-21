import { useState } from "react";
//import logomod3 from '../../public/logomod3.jpg'

import SignUpForm from "../components/SignUpForm/SignUpForm";
import LoginForm from "../components/LogInForm/LogInForm";

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <img src={process.env.PUBLIC_URL + './logomod3.jpg'} />
      <h3 className='text-4xl font-bold inline border-b-4 border-cyan-500'>Register or Sign In </h3>

      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Sign up" : "Sign in"}
      </button>

      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </div>
  );
}

export default AuthPage;
