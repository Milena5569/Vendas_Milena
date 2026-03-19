export default function Loading() {
  return (
    <main className="min-h-screen bg-background-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 animate-pulse">
          <div className="aspect-square rounded-2xl bg-surface-card" />

          <div className="space-y-4">
            <div className="h-6 w-24 rounded-full bg-surface-card" />
            <div className="h-10 w-full rounded-lg bg-surface-card" />
            <div className="h-5 w-2/3 rounded-lg bg-surface-card" />
            <div className="h-12 w-48 rounded-lg bg-surface-card" />
            <div className="h-24 w-full rounded-2xl bg-surface-card" />
            <div className="flex gap-4">
              <div className="h-12 flex-1 rounded-full bg-surface-card" />
              <div className="h-12 flex-1 rounded-full bg-surface-card" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
