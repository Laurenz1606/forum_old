import React, { Dispatch, SetStateAction } from "react";
import { Form } from "react-bootstrap";
import AuthFormGroupComponent from "./AuthFormGroupComponent";

//the props for the authUsernameInput component
type AuthUsernameInputComponentProps = {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
};

//the authUsernameInput component
export default function AuthUsernameInputComponent({
  username,
  setUsername,
}: AuthUsernameInputComponentProps) {
  return (
    <AuthFormGroupComponent>
      <Form.Label>Username (handle)</Form.Label>
      <Form.Control
        type="text"
        placeholder="user123"
        name="username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
    </AuthFormGroupComponent>
  );
}
