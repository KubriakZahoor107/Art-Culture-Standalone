// src/app/error.tsx
'use client'
import { useEffect } from 'react'

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div style={{ padding: 20 }}>
      <h1>Упс… щось пішло не так.</h1>
      <button onClick={() => reset()}>Спробувати ще раз</button>
    </div>
  )
}
