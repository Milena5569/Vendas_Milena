export default function Loading() {
  return (
    <main className="min-h-screen bg-background-primary">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-8">
          <div className="h-12 w-72 rounded-xl bg-surface-card" />
          <div className="h-6 w-full max-w-3xl rounded-lg bg-surface-card" />
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="rounded-3xl border border-border-soft bg-surface-card/70 p-6">
                <div className="mb-5 h-8 w-48 rounded-lg bg-background-primary" />
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 3 }).map((__, cardIndex) => (
                    <div key={cardIndex} className="h-56 rounded-2xl bg-background-primary" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
