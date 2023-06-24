const path = require('path');
const getBaseConfig = require('@liftograph/development-common/webpack.config');

module.exports = () =>  {
    const config = {
        ...getBaseConfig(),
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'index_bundle.js',
        },
    }
    return [config];
}
