import { useState } from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as yup from "yup";

import VisibilityIcon from "../../images/eye-off.svg";
import VisibilityOffIcon from "../../images/eye.svg";

import {
  FormContainer,
  LabelInput,
  ErrorMsg,
  InputControl,
  Input,
  SpanAnimateBtn,
  VisiblePassword,
} from "./FormKitStyles";

import Button from "../Button/Button";

function FormKit({ fields, text }) {
  const [visiblePassword, setVisiblePassword] = useState(true);

  const initialValues = Object.fromEntries(
    fields.map((field) => [field.name, field.initialValue || ""])
  );

  // Cria um objeto de validações usando a biblioteca 'yup' para definir regras de validação.
  const validations = yup.object().shape(
    Object.fromEntries(
      fields.map((field) => [
        field.name,
        // Se houver uma função de validação personalizada no campo, ela será usada.
        field.validation || yup.string().required(`${field.label} is required`), // Define uma regra padrão que exige um valor não vazio.
      ])
    )
  );

  const onSubmit = async (values, actions) => {
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: validations,
    onSubmit,
  });

  return (
    <FormContainer
      initial={{ y: 15, opacity: 0 }}
      animate={{
        opacity: [0, 0.3, 0.5, 0.7, 1],
        y: [10, 8, 6, 4, 3, 2, 1, 0.5, 0],
        transition: { duration: 1, delay: 1.2 },
      }}
      exit={{
        y: [0, 5, 10, 15, 20, 30, 40],
        opacity: 0,
        transition: { duration: 1 },
      }}
      onSubmit={handleSubmit}
    >
      {fields.map((field) => {
        return (
          <InputControl key={field.name}>
            <Input
              type={visiblePassword ? field.type : "text"}
              value={values[field.name] || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder=""
              id={field.name}
              $iserror={
                errors[field.name] && touched[field.name]
                  ? true.toString()
                  : false.toString()
              }
              autoComplete="off"
              aria-autocomplete="none"
            />
            <LabelInput htmlFor={field.name}>{field.label}</LabelInput>
            <ErrorMsg>{errors[field.name]}</ErrorMsg>
            {field.type === "password" ? (
              <VisiblePassword
                src={visiblePassword ? VisibilityIcon : VisibilityOffIcon}
                onClick={() => setVisiblePassword(!visiblePassword)}
              />
            ) : null}
          </InputControl>
        );
      })}
      <Button
        disabled={isSubmitting}
        value="submit"
        $primary={true}
        $hasMarginTop={true}
      >
        {text}
        <SpanAnimateBtn />
      </Button>
    </FormContainer>
  );
}
FormKit.propTypes = {
  fields: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
};

export default FormKit;
