// next.config.js (або next.config.mjs)

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

//
// Дістаємо __dirname у ESM
//
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//
// Базовий URL для API
//
const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

//
// Якщо ми в production і не передали змінну — попереджаємо
//
if (
  process.env.NODE_ENV === 'production' &&
  !process.env.NEXT_PUBLIC_API_BASE_URL
) {
  console.warn(
    'NEXT_PUBLIC_API_BASE_URL is not set; using default http://localhost:3000'
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  //
  // Stage 0: Ігноруємо помилки TS та ESLint під час збірки
  //
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  //
  // Налаштовуємо імпорт з '@/…' на папку src
  //
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': resolve(__dirname, 'src'),
    };
    return config;
  },

  //
  // Пробросимо NEXT_PUBLIC_API_BASE_URL у браузер
  //
  env: {
    NEXT_PUBLIC_API_BASE_URL: apiBaseUrl,
  },
};

export default nextConfig;
