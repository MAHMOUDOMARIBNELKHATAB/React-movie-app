import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./login.css";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onFormSubmit = () => {
    console.log(errors);
  };
  return (
    <div className="login-parent">
      <form
        className=" form m-auto"
        onSubmit={handleSubmit(onFormSubmit)}
        noValidate
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label ">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
          {errors?.email?.type === "required" && (
            <p className="text-danger  text-start mt-1">email is required</p>
          )}

          {errors?.email?.type === "pattern" && (
            <p className="text-danger  text-start mt-1">
              email mist have @ and .
            </p>
          )}
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="password"
            {...register("password", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
          {errors?.password?.type === "required" && (
            <p className="text-danger  text-start mt-1">password is required</p>
          )}

          {errors?.password?.type === "pattern" && (
            <p className="text-danger  text-start mt-1">
              Password must have at least one character , one capital letter
              ,one small letter
            </p>
          )}
        </div>
        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p className="SignupLink">
          Not a member?
          <Link to="/LogIn/Signup" className="Link"> Signup now</Link>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
