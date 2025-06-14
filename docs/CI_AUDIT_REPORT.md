# CI Audit Report

This report summarizes the configuration issues identified in the project and provides
examples of the patches applied.

## Identified Problems

- Missing GitHub Actions workflow for linting, testing and building.
- Lack of explicit environment variable check for `NEXT_PUBLIC_API_BASE_URL` in production.
- README did not clearly explain how to create the `.env.local` file.

## Applied Fixes

1. **Next.js configuration**
   Added a runtime check in `next.config.mjs` that throws an error if
   `NEXT_PUBLIC_API_BASE_URL` is not provided when `NODE_ENV` is set to
   `production`.

2. **README instructions**
   Clarified how to create the local environment file from `.env.sample`.

3. **GitHub Actions**
   Created `.github/workflows/ci.yml` which installs Node 18 via `nvm`, caches
   dependencies, and runs `npm run lint`, `npm test` and `npm run build`.

### Patch Examples

```diff
-if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_API_BASE_URL) {
-  throw new Error('NEXT_PUBLIC_API_BASE_URL must be defined in production');
+if (
+  process.env.NODE_ENV === 'production' &&
+  !process.env.NEXT_PUBLIC_API_BASE_URL
+) {
+  throw new Error('Missing NEXT_PUBLIC_API_BASE_URL');
 }
```

```diff
-Copy `.env.sample` to `.env.local` (or `.env`) and provide values for:
+Create a `.env.local` file by copying `.env.sample`:
+
+```bash
+cp .env.sample .env.local
+```
+
+Then provide values for:
```

```yaml
name: CI
on:
  push:
    branches: [main]
  pull_request:
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install Node using nvm
        run: |
          source $NVM_DIR/nvm.sh
          nvm install 18
          nvm use 18
          node -v
      - name: Cache node_modules
        uses: actions/cache@v3
        with:
          path: node_modules
          key: ${{ runner.os }}-node-${{ hashFiles('package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
      - name: Cache npm
        uses: actions/cache@v3
        with:
          path: ~/.npm
          key: ${{ runner.os }}-npm-${{ hashFiles('package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-npm-
      - name: Install dependencies
        run: npm install --legacy-peer-deps
      - name: Lint
        run: npm run lint
      - name: Test
        run: npm test -- --runInBand --ci --detectOpenHandles
      - name: Build
        run: npm run build
```

