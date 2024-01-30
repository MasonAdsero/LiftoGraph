# Liftograph

## Contributing
To set up the repo, run the following command `nvm use && npm ci` to install all of the current dependencies. Then run `npm run build` at the root directory to build the entire project. Once all of the current dependencies are installed and the project has been built, run `cd packages/liftograph-app && npm run start` from the root directory.

### Installing New Dependencies
The root `package.json` should **NOT** contain any `dependencies` or `devDependencies`. To install dependencies within a specific workspace, run `npm i [dependency-name] -w [package-name]` for production dependencies and `npm i --save-dev [dependency-name] -w [package-name]` for development dependencies. To find the dependency's name, visit the package's NPM page. To find the destination package's name, look at it's `package.json` and use the name listed there.

### Adding New Packages
Run `npm init -w ./packages/<package name>` to create a new workspace within Liftograph. Change the name to in the package.json to follow the `@liftograph/<package name>` convention.

To add tests, copy the `jest.config.js` and `babel.config.js` files from an existing repo and add them to the new repo.
