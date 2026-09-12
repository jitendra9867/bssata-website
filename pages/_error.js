function Error({ statusCode }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4">🙏</div>
        <h1 className="text-4xl font-banner font-bold text-saffron-500 mb-2">
          {statusCode || 'Error'}
        </h1>
        <p className="text-gray-600 mb-6">
          {statusCode === 404
            ? 'The page you are looking for could not be found.'
            : 'An unexpected error occurred. Please try again.'}
        </p>
        <a href="/" className="btn-primary">
          ← Back to Home
        </a>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
