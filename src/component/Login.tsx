import React, { MouseEvent} from "react";
import { CenterBox, LoginForm } from "../styles/styledLogin";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = (event: MouseEvent) => {
        console.log("clicked")
        navigate("/home")

    }

    

  return (
    <>
      <CenterBox>
      <LoginForm >
          <h2 className="form-group">산림청 국립수목원 어린이생물도감서비스</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit"
          onClick={handleSubmit}
          
          >Welcome</button>
          
          <p>
            Don't have an account? <a href="/home">Sign up</a>
          </p>
        </LoginForm>
      </CenterBox>
    </>
  );
};

export default Login;
