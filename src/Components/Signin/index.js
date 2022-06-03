import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../Utils/Firebase";
import "firebase/auth";

import { CircularProgress } from "@material-ui/core";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useUserContext } from "../Utils/context";

import { showToastError, showToastSuccess } from "../Utils/Tools";

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const user = useUserContext();

  const formik = useFormik({
    initialValues: {
      email: "mahfod-dev@gmail.com",
      password: "1234567",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email adress")
        .required("The email is required"),
      password: Yup.string().required("The password is required"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      submitForm(values);
    },
  });

  const submitForm = async (values) => {
    try {
      const { user } = await signIn(values.email, values.password);

      if (user) {
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);

        showToastSuccess("Welcome Back");
      }
    } catch (error) {
      setLoading(false);
      showToastError("Please check your email or password");
    }
  };

  return (
    <>
      {!user ? (
        <div className="container">
          <div className="signin_wrapper" style={{ margin: "100px" }}>
            <form onSubmit={formik.handleSubmit}>
              <h2>Please Login</h2>
              <input
                type="email"
                name="email"
                placeholder="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error_label">{formik.errors.email}</div>
              ) : null}
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error_label">{formik.errors.password}</div>
              ) : null}

              {loading ? (
                <CircularProgress color="secondary" className="progress" />
              ) : (
                <button type="submit">Login</button>
              )}
            </form>
          </div>
        </div>
      ) : (
        navigate("/dashboard")
      )}
    </>
  );
};
export default Signin;
