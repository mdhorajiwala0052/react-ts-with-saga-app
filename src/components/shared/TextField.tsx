import React, { FC } from "react";
import { TextFieldProps } from "../../types";
import { ErrorMessage, useField } from "formik";

const TextField: FC<TextFieldProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-2">
      <label htmlFor={field.name}> {label} </label>
      <input
        className={`form-control shadow-name ${
          meta.touched && meta.error && "is-invalid"
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage name={field.name} component="div" className="error" />
    </div>
  );
};

export default TextField;
