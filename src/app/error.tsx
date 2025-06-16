'use client';
import { useEffect } from 'react';
export default function Error({ error, reset }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <div>
      <h1>Помилка сервера</h1>
      <button onClick={() => reset()}>Спробувати ще раз</button>
    </div>
  );
}
