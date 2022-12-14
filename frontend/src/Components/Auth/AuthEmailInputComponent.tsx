import React, { Dispatch, SetStateAction } from "react";
import { Form } from "react-bootstrap";
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
      <Form.Label>E-Mail</Form.Label>
      <Form.Control
        type="email"
        placeholder="test@example.org"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </AuthFormGroupComponent>
  );
}
