import { useRouteError } from "react-router";

function ErrorComponent() {
  const error = useRouteError();
  console.error(error);

  return <h1>An error occurs...</h1>;
}

export default ErrorComponent;
