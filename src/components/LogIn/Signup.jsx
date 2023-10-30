import { useForm } from "react-hook-form";
import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./login.css";



const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    console.log("data", data);
  };
  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const Multoptions = [
    { value: "FootBall", label: "FootBall" },
    { value: "Reading", label: "Reading" },
    { value: "PlayGames", label: "PlayGames" },
  ];

  return (
    <div className="login-parent">
      <form
        className=" form m-auto"
        onSubmit={handleSubmit(onFormSubmit)}
        noValidate
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label w-100 ">
            User Name
          </label>
          <input
            type="UserName"
            className="form-control"
            id="exampleInputtext"
            aria-describedby="textHelp"
            placeholder="User Name"
            {...register("UserName", {
              required: true,
              minLength: 8,
            })}
          />
          {errors?.text?.type === "required" && (
            <p className="text-danger  text-start mt-1">
              User Namer is required
            </p>
          )}

          {errors?.text?.type === "minLength" && (
            <p className="text-danger  text-start mt-1">
              min length is 8 characters
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label  w-100 ">
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label w-100 ">
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label w-100 ">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder=" Confirm Password"
            {...register("Confirmpassword", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
          />
          {errors?.Confirmpassword?.type === "required" && (
            <p className="text-danger  text-start mt-1">password is required</p>
          )}

          {errors?.Confirmpassword?.type === "pattern" && (
            <p className="text-danger  text-start mt-1">
              Password must have at least one character , one capital letter
              ,one small letter
            </p>
          )}
        </div>
        <div className="selectors">
          <Select options={options} className="select" placeholder="gender" 
          
          {...register("select", {
            required: true,
          })}/>

{errors?.select?.type === "required" && (
            <p className="text-danger  text-start  mx-3">
             please select your gender 
            </p>
          )}
          <Select
            options={Multoptions}
            className="select-hoppies"
            placeholder="Hoppies"
            isMulti
            {...register("select", {
                required: true,
              })}
          />
          {errors?.select?.type === "required" && (
            <p className="text-danger  text-start mx-3">
             please select your hoppies 
            </p>
          )}
          
         
        </div>
        <div className="form-check my-4 ">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            {...register("select", {
                required: true,
              })}
          />
          <label className="form-check-label w-100 " for="exampleCheck1">
            accepte for terms and condation
          </label>
          {errors?.select?.type === "required" && (
            <p className="text-danger  text-start  mx-3">
             please accept on terms and conditions
            </p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Signup;
