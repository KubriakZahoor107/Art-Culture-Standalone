import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


/** @type {import('next').NextConfig} */
const nextConfig = {

  webpack(config) {
    config.resolve.alias['@'] = resolve(__dirname, 'src');
    return config;
  },

  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
};

if (
  process.env.NODE_ENV === 'production' &&
  process.env.npm_lifecycle_event === 'build' &&
  !process.env.NEXT_PUBLIC_API_BASE_URL
) {
  throw new Error(
    'Missing NEXT_PUBLIC_API_BASE_URL – потрібен для production build'
  );
}

export default nextConfig;

