import React, { ReactNode } from "react";
import { Form } from "react-bootstrap";

//the props for the authFormGroup component
type AuthFormGroupComponentProps = {
  children: ReactNode | ReactNode[];
};

//the authFormGroup component
export default function AuthFormGroupComponent({
  children,
}: AuthFormGroupComponentProps) {
  return <Form.Group className="mb-4">{children}</Form.Group>;
}
