import ErrorPage from "./ErrorPage";
import { ErrorBoundary } from "react-error-boundary";

export default function ReactErrorBoundary({children}) {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onError={(error, errorInfo) => {
        // log the error
        console.log("Error caught!");
        console.error(error);
        console.error(errorInfo);

        // record the error in an APM tool...
      }}
      onReset={() => {
        // reloading the page to restore the initial state
        // of the current page
        console.log("reloading the page...");
        window.location.reload();

        // other reset logic...
      }}
    >
      {children}
    </ErrorBoundary>
  );
}