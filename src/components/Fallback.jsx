function Fallback({ error, resetErrorBoundary }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-gray-700 mb-6">
        {error?.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={resetErrorBoundary}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
      >
        Try Again
      </button>
    </div>
  );
}

export default Fallback;
