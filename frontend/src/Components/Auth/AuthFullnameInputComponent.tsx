import React, { Dispatch, SetStateAction } from "react";
import { Form } from "react-bootstrap";
import InputLabelRequiredComponent from "../InputLabelRequiredComponent";
import AuthFormGroupComponent from "./AuthFormGroupComponent";

//the props for the authFullnameInput component
type AuthFullnameInputComponentProps = {
  fullname: string;
  setFullname: Dispatch<SetStateAction<string>>;
};

//the authFullnameInput component
export default function AuthFullnameInputComponent({
  fullname,
  setFullname,
}: AuthFullnameInputComponentProps) {
  return (
    <AuthFormGroupComponent>
      <Form.Label>Fullname <InputLabelRequiredComponent /></Form.Label>
      <Form.Control
        type="text"
        placeholder="User 123"
        name="fullname"
        id="fullname"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
        required
      />
      <Form.Text>Displayed name of the user. This name can also be changed later!</Form.Text>
    </AuthFormGroupComponent>
  );
}
