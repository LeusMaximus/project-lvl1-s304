install:
	npm install

publish:
	npm publish --access=public

start:
	npm run babel-node -- src/bin/brain-games.js
