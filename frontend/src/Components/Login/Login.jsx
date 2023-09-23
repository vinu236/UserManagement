import "./Login.css";
import Box from "../Box/Box";
import Row from "../Row/Row";
import LoginAvatar from "../../assets/imgs/sign-in.png"
import { Link } from "react-router-dom";
import InputField from "../InputField/inputField";
import useLogin from "../../Hooks/useLogin";

const Login = () => {

    const[handleChange,formValues,handleSubmit,isLoading]=useLogin();
    
  return (
    <Box>
      <Row className="login login_container">
        <img
          src={LoginAvatar}
          alt="login page illustration image"
          className="max-w-lg"
          loading="lazy"
        />
        <div className="form_container">
          <h1 className="login_heading">Login</h1>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form_email">
              <InputField
                type="email"
                name="email"
                value={formValues.email}
                required
                onChange={handleChange}
                label={"Email"}
                disabled={isLoading}
              />
            </div>
            <div className="form_password">
              <InputField
                type="password"
                name="password"
                required
                value={formValues.password}
                label={"Password"}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <button className="in_btn" disabled={isLoading}>Login</button>
          </form>
          <div className="flex gap-2 items-center justify-center mt-9 ">
            <p>Don't have an account ?</p>
            <Link to={"/signup"} className="underline text-[#3c474c]" disabled={isLoading}>
              Sign up
            </Link>
          </div>
        </div>
      </Row>
    </Box>
  );
};

export default Login
