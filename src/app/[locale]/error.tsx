'use client';
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  return <h1>Stage 0 CI stub: Locale Error</h1>;
}
