import React, { Dispatch, SetStateAction, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import AuthFormGroupComponent from "./AuthFormGroupComponent";

//the props for the authPasswordInput component
type AuthPasswordInputComponentProps = {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  showResetTip?: boolean;
};

//the authPasswordInput component
export default function AuthPasswordInputComponent({
  password,
  setPassword,
  showResetTip,
}: AuthPasswordInputComponentProps) {
  //show password toggle state
  const [showPassword, setShowPassword] = useState(false);

  //show password toggle shorthand
  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <AuthFormGroupComponent>
      <Form.Label htmlFor="password">Password</Form.Label>
      <InputGroup>
        <Form.Control
          type={showPassword ? "text" : "password"}
          placeholder="Y0Ur_P4SsW0rD"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          variant={showPassword ? "danger" : "outline-secondary"}
          onClick={toggleShowPassword}
        >
          {showPassword ? <EyeSlash size={18} /> : <Eye size={18} />}
        </Button>
      </InputGroup>
      {showResetTip ? (
        <Form.Text muted>
          Forgot your Password? <Link to="/password/reset">Click here!</Link>
        </Form.Text>
      ) : (
        ""
      )}
    </AuthFormGroupComponent>
  );
}
