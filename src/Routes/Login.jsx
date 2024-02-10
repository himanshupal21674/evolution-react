import React, {useState, useContext} from "react";
import {useHistory} from "react-router-dom";

//import Context
import { AuthContext } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { setAuthState } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      const response = await
      fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type":
          "application/json",
        },
        body:
        JSON.stringify({email: username, password}),
      })
      const data = await response.json();
      if (response.ok){
        setAuthState({isAuth:
        true, token: data.token});
        history.push("/Dashboard");
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Error:",error);
    }
  }
}

function Login() {
  return (
    <div>
      <form data-testid="login-form">
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
