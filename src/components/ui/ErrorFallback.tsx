interface ErrorFallbackProps {
  error: Error; // Assuming error is an instance of the Error class
  resetErrorBoundary: () => void;
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <>
      <div>
        <h1>Something went wrong 🥴</h1>
        <p>{error.message}</p>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    </>
  );
}

export default ErrorFallback;
