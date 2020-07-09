#!/bin/bash

set -e
set -o pipefail

if [ ! -d "node_modules/.bin" ]; then
  echo "Be sure to run \`yarn install\` before building GraphiQL."
  exit 1
fi

rm -rf dist/ && mkdir -p dist/
babel src --root-mode upward --ignore __tests__ --out-dir dist/
echo "Done"
