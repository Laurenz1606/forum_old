import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import AuthFormGroupComponent from "./AuthFormGroupComponent";

//the props for the authUsernameInput component
type AuthUsernameInputComponentProps = {
  username: string;
};

//the authUsernameInput component
export default function AuthUsernameInputComponent({
  username,
}: AuthUsernameInputComponentProps) {
  return (
    <AuthFormGroupComponent>
    <Form.Label>Username (handle)</Form.Label>
      <InputGroup>
        <InputGroup.Text>@</InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="user123"
          name="username"
          id="username"
          value={username}
          required
          readOnly
          disabled
        />
      </InputGroup>
      <Form.Text>Automatic generated name used for login and unique identification, can't be changed by the user.</Form.Text>
    </AuthFormGroupComponent>
  );
}
