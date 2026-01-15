export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-timber-cream">
      <div className="text-center">
        <h1 className="text-6xl font-display font-bold text-timber-dark-brown mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center bg-timber-green text-white px-6 py-3 rounded-md hover:bg-timber-dark-green transition-colors font-semibold"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
