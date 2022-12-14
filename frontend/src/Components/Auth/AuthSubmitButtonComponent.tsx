import React from "react";
import { Button } from "react-bootstrap";

//the props for the authSubmitButton component
type AuthSubmitButtonComponentProps = {};

//the authSubmitButton component
export default function AuthSubmitButtonComponent({}: AuthSubmitButtonComponentProps) {
  return (
    <div className="d-grid mb-3">
      <Button type="submit">Login</Button>
    </div>
  );
}
