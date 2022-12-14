import React, { Dispatch, SetStateAction } from "react";
import { Form } from "react-bootstrap";
import InputLabelRequiredComponent from "../InputLabelRequiredComponent";
import AuthFormGroupComponent from "./AuthFormGroupComponent";

//the props for the authLoginValueInput component
type AuthLoginValueInputComponentProps = {
  loginValue: string;
  setLoginValue: Dispatch<SetStateAction<string>>;
};

//the authLoginValueInput component
export default function AuthLoginValueInputComponent({
  loginValue,
  setLoginValue,
}: AuthLoginValueInputComponentProps) {
  return (
    <AuthFormGroupComponent>
      <Form.Label>E-Mail or Username (handle) <InputLabelRequiredComponent /></Form.Label>
      <Form.Control
        type="text"
        placeholder="test@example.org or @user123"
        name="login"
        id="login"
        value={loginValue}
        onChange={(e) => setLoginValue(e.target.value)}
        required
      />
      <Form.Text>Your E-Mail adress or unique generated Username (handle). The Username (handle) must start with an "@"!</Form.Text>
    </AuthFormGroupComponent>
  );
}
