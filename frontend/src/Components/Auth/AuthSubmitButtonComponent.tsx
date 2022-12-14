import React, { ReactNode } from "react";
import { Button } from "react-bootstrap";

//the props for the authSubmitButton component
type AuthSubmitButtonComponentProps = {
  children: ReactNode | ReactNode[];
};

//the authSubmitButton component
export default function AuthSubmitButtonComponent({
  children,
}: AuthSubmitButtonComponentProps) {
  return (
    <div className="d-grid mb-3">
      <Button type="submit">{children}</Button>
    </div>
  );
}
