# Art & Culture

This project uses **Next.js** for server-side rendering (SSR).

This project requires **Node.js 18 LTS**. After cloning, run `nvm use` in the
project directory to switch to this version. The `.nvmrc` file and the
`package.json` `engines` field enforce this requirement.

## Getting Started

After running `nvm use`, install dependencies and create a local environment file based on `.env.sample`:

```bash
npm install
cp .env.sample .env.local
```

If you see peer dependency errors, try:

```bash
npm install --legacy-peer-deps
```

Tests rely on an up-to-date `package-lock.json`.


## Environment Variables

Copy `.env.sample` to `.env.local` (or `.env`) and provide values for:
- `NEXT_PUBLIC_API_BASE_URL` (optional, defaults to `http://localhost:3000`)
- `API_BASE_URL` (optional)
- `NEXTAUTH_SECRET`
- `GITHUB_ID` and `GITHUB_SECRET`
- `NEXT_PUBLIC_GA_ID` (optional)
- `TOKEN` (optional)
Environment variables are validated at runtime via [`src/utils/env.ts`](src/utils/env.ts).

### Environment

Ensure `.env.local` contains:
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```
before running `npm run build`. This variable defines the base URL used by server components to access internal API routes (see `.env.sample` for defaults).
If `NEXT_PUBLIC_API_BASE_URL` is not set, the build will now fail in production.
The error message will read `Missing NEXT_PUBLIC_API_BASE_URL`.

## NextAuth

Ensure the environment variables above are set. Start the development server and open `/api/auth/signin` to test authentication.


## Routing
Client components now rely on Next.js navigation hooks instead of React Router.
Console debug and error output is disabled in production via `src/utils/logger.ts`.
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

SEO metadata is defined in [`src/meta/index.ts`](src/meta/index.ts).

## Middleware and SSR

The middleware in [`middleware.ts`](middleware.ts) now detects the locale from the
URL. Requests without a locale prefix are redirected to `/uk` by default and an
`X-Art-Culture` header is added to all responses.

### Supported Locales

Pages are available in Ukrainian (`uk`) and English (`en`). These locales are
pre-rendered at build time.

A demo SSR page is available at [`src/pages/ssr.tsx`](src/pages/ssr.tsx) which uses `getServerSideProps` to select a random news item on each request.

## Static Regeneration

News pages are pre-rendered at build time but regenerate periodically. The
`revalidate` export in [`src/app/news/[id]/page.tsx`](src/app/news/%5Bid%5D/page.tsx)
instructs Next.js to refresh the static content every 60 seconds.

For information on obtaining sample SQL dumps see [docs/SAMPLE_DATA.md](docs/SAMPLE_DATA.md).

## License

This project is licensed under the [MIT License](LICENSE).
