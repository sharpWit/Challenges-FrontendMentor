import "./error.scss";
import { useRouteError } from "react-router-dom";
import LinkButton from "../ui/button/LinkButton";

// Define a type for the error object
interface RouteError {
  data: string | undefined;
  message: string | undefined;
}

function Error() {
  const error = useRouteError();

  // Check if error is not undefined and type assert it to RouteError
  const routeError: RouteError | undefined = error as RouteError | undefined;

  return (
    <div className="errorContainer">
      <h1 className=" font-semibold text-2xl md:text-3xl">
        Something went wrong 😢
      </h1>
      <p className="text-lg md:text-xl">
        {routeError?.data || routeError?.message}
      </p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
