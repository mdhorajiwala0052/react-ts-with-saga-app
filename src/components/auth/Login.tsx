import React, { FC, ChangeEvent, useState, useEffect } from "react";
// import { Form, Row, Col, Button } from "reactstrap";
// import FormControl from '../shared/FormControl'
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../../components/shared/TextField";

const Login: FC = () => {
  // const [state, setState] = useState({
  //     email: '',
  //     password: '',
  //     emailError: '',
  //     passwordError: '',
  // });

  // const { email, password, emailError, passwordError } = state;

  // const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
  //     let { name, value } = e.target;
  //     setState({...state, [name]: value});
  // }

  const validate = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),

    password: Yup.string()
      .min(8, "Must be 8 characters or more")
      .required("Required"),
  });

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    let isError = false;
    // console.log("state", state);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values, "values");
      }}
    >
      {/* {formik => { */}
      <div>
        <h1 className="my-4 font-weight-bold .display-4">Sign In</h1>
        <Form>
          <TextField label="Email" name="email" type="email" />
          <TextField label="Password" name="password" type="password" />
          <button className="btn btn-danger mt-3 ml-3" type="submit">
            Submit
          </button>
        </Form>
      </div>
      {/* //  }} */}
    </Formik>

    // <Row>
    //   <Col md={4}>
    //     <Form onSubmit={handleSubmit}>
    //       <input
    //         type="email"
    //         name="email"
    //         placeholder="Email Address"
    //         id="email"
    //         className="form-control"
    //         onChange={handleChange}
    //         value={email}
    //         required
    //       />

    //       <input
    //         type="password"
    //         name="password"
    //         placeholder="Password"
    //         id="password"
    //         className="form-control"
    //         onChange={handleChange}
    //         value={password}
    //         required
    //       />

    //       <button className="btn btn-secondary btn-block" type="submit">
    //         {" "}
    //         Sign In{" "}
    //       </button>

    //       <hr />

    //       <p>Don't have an account?</p>
    //       <Link to={"/register"}>
    //         <button
    //           className="btn btn-primary btn-block"
    //           type="button"
    //           id="button-signup"
    //         >
    //           {" "}
    //           <i className="fas fa-user-plus"> </i> Signup new account
    //         </button>
    //       </Link>
    //     </Form>
    //   </Col>
    // </Row>
  );
};

export default Login;
