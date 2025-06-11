# Art & Culture

This project uses **Next.js** for server-side rendering (SSR).

This project requires **Node.js 18**. Run `nvm use` in the project
directory to switch to this version. The `.nvmrc` file and the
`package.json` `engines` field enforce this requirement.

## Getting Started

After switching to Node 18, install dependencies and create a local `.env` file based on `.env.sample`:

```bash
npm install
```

If you see peer dependency errors, try:

```bash
npm install --legacy-peer-deps
```

Tests rely on an up-to-date `package-lock.json`.

This repository uses [Git LFS](https://git-lfs.com/) to store large
binary assets. After cloning, make sure Git LFS is installed and pull
the LFS objects:

```bash
git lfs install
git lfs pull
```


## Environment Variables

Copy `.env.sample` to `.env` and update the values as needed.

- `DATABASE_URL` – connection string for PostgreSQL
- `REDIS_URL` or `UPSTASH_REDIS_REST_URL`/`UPSTASH_REDIS_REST_TOKEN`
- `SHOPIFY_API_KEY` and `SHOPIFY_API_SECRET`
- `NEXTAUTH_SECRET` and provider credentials like `GITHUB_ID`/`GITHUB_SECRET`
- `NEXT_PUBLIC_HOST` – hostname used when rendering on the server
- `NEXT_PUBLIC_API_BASE_URL` – base URL used by server components to fetch internal API routes. This must be set for production builds and defaults to `http://localhost:3000` during development. [`next.config.mjs`](next.config.mjs) checks for this variable and throws an error when it is missing.
- `API_BASE_URL` - fallback base URL for server-side API utilities
- `TOKEN` - access token for internal APIs
- `NEXT_PUBLIC_API_URL` is no longer used and can be removed

### Environment

Ensure `.env.local` contains:
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```
before running `npm run build`. This variable defines the base URL used by server components to access internal API routes (see `.env.sample` for defaults).
The build script fails if `NEXT_PUBLIC_API_BASE_URL` is not set because [`next.config.mjs`](next.config.mjs) enforces its presence.

## NextAuth

Ensure the environment variables above are set. Start the development server and open `/api/auth/signin` to test authentication.

## Development

Run the development server:

```bash
npm run dev
```


## Linting

Run ESLint to check code style:

```bash
npm run lint
```

The ESLint rules are configured in `.eslintrc.json`.

## Production

Build and start the production server:

```bash
npm run build
npm start
```

## Deployment

See [docs/GCP_DEPLOYMENT.md](docs/GCP_DEPLOYMENT.md) for instructions on building a Docker image and deploying to Google Cloud Run.

### Docker

Build a production image using the included `Dockerfile`:

```bash
docker build -t art-culture .
```

Run the container locally with environment variables from your `.env` file:

```bash
docker run --env-file .env -p 3000:3000 art-culture
```

The image can also be pushed to a container registry for deployment. See the [GCP deployment guide](docs/GCP_DEPLOY.md) for an example using Google Artifact Registry and Cloud Run.



## Testing

Run `npm install` before executing tests to install dev dependencies such as Jest.

Run all tests once:

```bash
npm test
```

To continually run tests as files change, use watch mode:

```bash
npm run test:watch
```

If tests hang, run the debug command to detect open handles:

```bash
npm run test:debug
```

## SEO

SEO metadata is defined in [`src/meta/index.js`](src/meta/index.js).

## Middleware and SSR

The middleware in [`middleware.ts`](middleware.ts) now detects the locale from the
URL. Requests without a locale prefix are redirected to `/uk` by default and an
`X-Art-Culture` header is added to all responses.

### Supported Locales

Pages are available in Ukrainian (`uk`) and English (`en`). These locales are
pre-rendered at build time.

A demo SSR page is available at [`src/pages/ssr.js`](src/pages/ssr.js) which uses `getServerSideProps` to select a random news item on each request.

## Static Regeneration

News pages are pre-rendered at build time but regenerate periodically. The
`revalidate` export in [`src/app/news/[id]/page.tsx`](src/app/news/%5Bid%5D/page.tsx)
instructs Next.js to refresh the static content every 60 seconds.

For information on obtaining sample SQL dumps see [docs/SAMPLE_DATA.md](docs/SAMPLE_DATA.md).

## License

This project is licensed under the [MIT License](LICENSE).
