export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-text-primary mb-2">
          Loading PredictaChat
        </h2>
        <p className="text-text-secondary">
          Preparing your prediction markets...
        </p>
      </div>
    </div>
  );
}
