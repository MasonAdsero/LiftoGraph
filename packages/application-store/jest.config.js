const sharedConfig = require('@liftograph/development-common/jest.config');
module.exports = {
    ...sharedConfig,
    testEnvironment: 'jsdom'
};
