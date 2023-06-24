const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const typescriptRule = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
};

const cssLoader = {
    loader: 'css-loader',
    options: {
        modules: {
            exportLocalsConvention: 'camelCase',
        },
    },
};

const cssRule = {
    test: /\.css$/i,
    use: ['style-loader', cssLoader],
}

const lessRule = {
    test: /\.less$/,
    use: ['style-loader', cssLoader, 'less-loader'],
}

const config = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
    },
    module: {
        rules: [
            typescriptRule,
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    target: ['web', 'es5'],
    plugins: [new HtmlWebpackPlugin()],
};

module.exports = () => {
    if (process.env.BUILD_ENV === 'production') {
        config.mode = 'production';
    } else {
        config.mode = 'development';
        config.devtool = 'source-map';
    }

    return config;
};

Object.assign(module.exports, {
    typescriptRule,
    lessRule,
    cssRule,
});
