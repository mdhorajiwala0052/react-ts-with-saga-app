import React, { FC, useEffect } from "react";
import { Formik, Form, FormikProps } from "formik";
import TextField from "../../components/shared/TextField";
import * as Yup from "yup";
import { TextFieldProps } from "../../types";
import { useAppDispatch, useAppSelector } from "../../types/hooks";
import { useNavigate } from "react-router-dom";
import { registerInitiate } from "../../redux/features/userSlice";

const Register: FC = () => {
  const dispatch = useAppDispatch();
  const { loading, currentUser, error } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  const validate = Yup.object({
    fullName: Yup.string()
      .max(50, "Must be 50 characters or less")
      .required("Required"),

    email: Yup.string().email("Invalid email address").required("Required"),

    password: Yup.string()
      .min(8, "Must be 8 characters or more")
      .required("Required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const register = (values): void => {
    // console.log(values.password, "handleSubmit");
    dispatch(registerInitiate(values));
  };

  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        register(values);
      }}
    >
      {/* {(formik) => console.log("formik", formik)}  have to resolve this error */}

      {/* {formik => { */}
      <div>
        <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
        <Form>
          <TextField label="Full Name" name="fullName" type="text" />
          <TextField label="Email" name="email" type="email" />
          <TextField label="Password" name="password" type="password" />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
          />
          <button className="btn btn-danger mt-3 ml-3" type="submit">
            Submit
          </button>
        </Form>
      </div>
      {/* //  }} */}
    </Formik>
  );
};

export default Register;
