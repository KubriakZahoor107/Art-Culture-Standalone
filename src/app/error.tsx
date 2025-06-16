'use client';
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  // we don’t actually use them in CI stub, but we must accept them
  console.error(error);
  return <h1>Stage 0 CI stub: Error</h1>;
}
