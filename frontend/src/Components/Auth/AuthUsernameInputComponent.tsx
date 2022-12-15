import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import useCopy from "../../Hooks/useCopy";
import AuthFormGroupComponent from "./AuthFormGroupComponent";

//the props for the authUsernameInput component
type AuthUsernameInputComponentProps = {
  username: string;
};

//the authUsernameInput component
export default function AuthUsernameInputComponent({
  username,
}: AuthUsernameInputComponentProps) {
  //copy hook
  const copy = useCopy();

  //copy state
  const [copied, setCopied] = useState(false);

  //trigger interval
  useEffect(() => {
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }, [copied])

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
        />
        <Button
          variant="primary"
          onClick={() => {
            copy("@" + username);
            setCopied(true);
          }}
        >
          {copied ? "Copied" : "Copy"}!
        </Button>
      </InputGroup>
      <Form.Text>
        Automatic generated name used for login and unique identification, can't
        be changed by the user.
      </Form.Text>
    </AuthFormGroupComponent>
  );
}
