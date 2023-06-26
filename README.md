# Liftograph

## Contributing
To set up the repo, run the following command `nvm use && npm ci` to install all of the current dependencies. Then run `npx lerna run build` at the root directory to build the entire project. Once all of the current dependencies are installed and the project has been built, run `cd packages/liftograph-app && npm run start` from the root directory.

### Installing New Dependencies
The root `package.json` should **NOT** contain any `dependencies` or `devDependencies`. To install dependencies within a specific workspace, run `npm i [dependency-name] -w [package-name]` for production dependencies and `npm i --save-dev [dependency-name] -w [package-name]` for development dependencies. To find the dependency's name, visit the package's NPM page. To find the destination package's name, look at it's `package.json` and use the name listed there. 
