import React, { ComponentProps } from "react";
import { Input } from "reactstrap";
import { withFormik, Form, Field, FormikProps } from "formik";

type MyHandleChangeFunctionType = (
  event: React.ChangeEvent<HTMLInputElement>
) => void;

export interface IformControlProps {
  label: string;
  type: ComponentProps<typeof Input>["type"];
  error: string;
  handleChange: MyHandleChangeFunctionType;
  value: string;
}

export interface TextFieldProps {
  label: string;
  name: string;
  type: ComponentProps<typeof Input>["type"];
}

export interface ITextFieldProps extends FormikProps<TextFieldProps> {
  setEditMode(arg: boolean): void;
}

export interface MovieState {
  movieList: Array<Object>;
  movieDetail: Object;
}

export interface UserState {
  loading: boolean;
  currentUser: null | Object;
  error: null | string;
}
