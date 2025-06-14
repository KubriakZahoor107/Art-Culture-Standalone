import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

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
  // У Next.js 15+ appDir вже підтримується "з коробки"
  appDir: true,

  webpack(config) {
    config.resolve.alias['@'] = resolve(__dirname, 'src');
    return config;
  },

  env: {
    NEXT_PUBLIC_API_BASE_URL: apiBaseUrl,
  },
};

export default nextConfig;

