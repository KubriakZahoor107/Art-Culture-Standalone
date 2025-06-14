# CI Audit Report

This document summarizes configuration issues discovered during the audit and provides example fixes.

## Overview

The project lacked a CI workflow and environment validation. Tests could not run reliably in a clean environment. TypeScript types for layout and pages referenced `next` types that may not exist across versions. Environment variables were not validated consistently.

## Recommended Changes

1. **GitHub Actions** – Add a workflow using Node.js 18. Cache dependencies and run lint, tests and build:
   ```yaml
   name: CI
   on: [push, pull_request]
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 18
             cache: 'npm'
         - name: Use Node 18 via nvm
           run: |
             nvm install 18
             nvm use 18
         - name: Cache node_modules
           uses: actions/cache@v3
           with:
             path: node_modules
             key: ${{ runner.os }}-node-${{ hashFiles('package-lock.json') }}
             restore-keys: ${{ runner.os }}-node-
         - run: npm install --legacy-peer-deps
         - run: npm run lint
         - run: npm test -- --runInBand --ci --detectOpenHandles
         - run: npm run build
   ```

2. **Environment check** – Throw a descriptive error when `NEXT_PUBLIC_API_BASE_URL` is missing:
   ```js
   if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_API_BASE_URL) {
     throw new Error('Missing NEXT_PUBLIC_API_BASE_URL');
   }
   ```

3. **TypeScript types** – Provide local `LayoutProps` and `PageProps` definitions and import them from pages:
   ```ts
   // src/types/layout.ts
   export type LayoutProps<T = {}> = { children: React.ReactNode; params: T };
   export type PageProps<T = {}> = { params: T };
   ```

Include these examples in pull requests whenever similar issues arise.
