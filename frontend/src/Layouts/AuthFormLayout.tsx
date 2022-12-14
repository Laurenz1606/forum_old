import React, {
  FormEvent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Alert, Card, Container, Form, ListGroup } from "react-bootstrap";
import { authContext } from "../Contexts/authContext";

export interface IAuthError {
  err: boolean;
  code: number;
  msg: string;
}

//the props for the authForm layout
type AuthFormLayoutProps = {
  children: ReactNode | ReactNode[];
  error: IAuthError;
  onSubmit: (e: FormEvent<HTMLFormElement>) => any;
  page: string;
  secondary: ReactNode | ReactNode[];
};

//the authForm layout
export default function AuthFormLayout({
  children,
  error,
  onSubmit,
  page,
  secondary,
}: AuthFormLayoutProps) {
  const { fetch } = useContext(authContext);

  const [name, setName] = useState("Loading...");

  useEffect(() => {
    (async () => {
      //fetch name of forum from backend
      const { data, err, nav } = await fetch<{ name: string }>("/info/name");

      //when auth error navigate
      if (err) return nav();

      //set name
      setName(data?.name as string);
    })();
  }, [fetch]);

  return (
    <Container style={{ paddingTop: "20vh" }}>
      <h1 className="text-center mb-2">
        {page} to {name} Forum
      </h1>
      <Card>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {error.err ? <Alert variant="danger">{error.msg}</Alert> : ""}
              <Form onSubmit={onSubmit}>{children}</Form>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="mt-3">{secondary}</div>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}
