import "../Login/Login.css";
import Box from "../Box/Box";
import useSignUp from "../../Hooks/useSignUp";
import LoginAvatar from "../../assets/imgs/sign-in.png"
import Row from "../Row/Row";
import InputField from "../InputField/inputField";

//third party lib
import { Link, useNavigate } from "react-router-dom";




const SignUp = () => {
  const [handleChange,formValues,handleSubmit,isLoading] = useSignUp();
 



  return (
    <Box>
      <Row className="login login_container  ">
        <img
          src={LoginAvatar}
          alt="login page illustration image"
          className="max-w-lg"
          loading="lazy"
        />
        <div className="form_container">
          <h1 className="login_heading">Sign Up</h1>
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
            <div className="form_password mb-[20px]">
              <InputField
                type="password"
                name="password"
                value={formValues.password}
                required
                label={"Password"}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <div className="form_password">
              <InputField
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                required
                label={"Confirm Password"}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <button className="in_btn" disabled={isLoading}>Sign Up</button>
          </form>
            <div className="flex gap-2 items-center justify-center mt-9 ">
            <p>Already have an account?</p>
            <Link to={"/login"} className="underline text-[#3c474c]" disabled={isLoading}>
              Login
            </Link>
          </div>
        </div>
      </Row>
    </Box>
  );



};

export default SignUp;
