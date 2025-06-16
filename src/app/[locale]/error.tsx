'use client';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return <h1>Stage 0 CI stub: Locale Error</h1>;
}
