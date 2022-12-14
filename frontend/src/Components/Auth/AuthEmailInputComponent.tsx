import React, { Dispatch, SetStateAction } from "react";
import { Form } from "react-bootstrap";
import InputLabelRequiredComponent from "../InputLabelRequiredComponent";
import AuthFormGroupComponent from "./AuthFormGroupComponent";

//the props for the authEmailInput component
type AuthEmailInputComponentProps = {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
};

//the authEmailInput component
export default function AuthEmailInputComponent({
  email,
  setEmail,
}: AuthEmailInputComponentProps) {
  return (
    <AuthFormGroupComponent>
      <Form.Label>
        E-Mail <InputLabelRequiredComponent />
      </Form.Label>
      <Form.Control
        type="email"
        placeholder="test@example.org"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Form.Text>Your E-Mail connected to this account!</Form.Text>
    </AuthFormGroupComponent>
  );
}
