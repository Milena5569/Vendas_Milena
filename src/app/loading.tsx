export default function Loading() {
  return (
    <main className="min-h-screen bg-background-primary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-6">
          <div className="h-10 w-64 rounded-xl bg-surface-card" />
          <div className="h-6 w-full max-w-2xl rounded-lg bg-surface-card" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-56 rounded-2xl bg-surface-card" />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
