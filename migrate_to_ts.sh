#!/bin/bash
set -e
REPO_URL="https://github.com/KubriakZahoor107/Art-Culture-Frontend"

echo "Cloning repo" >&2
git clone "$REPO_URL" project && cd project

# rename js/jsx to ts/tsx within src
find src -type f -name '*.js' -exec bash -c 'mv "$1" "${1%.js}.ts"' _ {} \;
find src -type f -name '*.jsx' -exec bash -c 'mv "$1" "${1%.jsx}.tsx"' _ {} \;

echo "Running TypeScript compile check" >&2
npx tsc --noEmit

# Example: install types and create declarations
npm install -D @types/react-quill
mkdir -p src/types
cat <<'TYPES' > src/types/some-untyped-package.d.ts
declare module 'some-untyped-package';
TYPES

# update Node version enforcement
npm pkg set engines.node="'>=18 <19'"
sed -i 's/node-version: .*/node-version: 18.x/' .github/workflows/*.yml || true

npm install
npm run build
npm test
