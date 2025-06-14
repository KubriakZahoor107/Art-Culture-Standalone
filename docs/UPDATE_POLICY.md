# Dependency and Environment Update Policy

This project relies on several key tools and frameworks. To keep the codebase stable we periodically review and update dependencies.

## Schedule
- **Quarterly audit** – run `npm outdated` every three months and plan upgrades for major packages.
- **Security patches** – apply as soon as possible after notification.

## Key Versions
- **Node.js** – locked to version 18.x via `.nvmrc` and the `engines` field in `package.json`.
- **React & Next.js** – upgrade only after verifying compatibility with all libraries.
- **Other dependencies** – follow semantic versioning; prefer minor/patch upgrades.

When a major release of React, Next.js or Node.js becomes available, create a dedicated branch to test the upgrade and update this document with any new requirements.
