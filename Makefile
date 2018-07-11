install:
	npm install

build:
	rm -rf dist
	npm run build

publish:
	npm publish --access=public

start:
	npm run babel-node -- src/bin/brain-games.js

lint:
	npm run eslint .