const path = require('path');
const srcPath = path.resolve(__dirname, 'src');

module.exports = {
    module: {
        rules: [
            {
              test: /\.[tj]sx?$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              },
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.jsx', '.js', '.ts'],
        alias: {
            components: path.join(srcPath, 'components'),
            containers: path.join(srcPath, 'containers'),
            pages: path.join(srcPath, 'pages'),
            store: path.join(srcPath, 'store'),
            utils: path.join(srcPath, 'utils'),
            assets: path.join(srcPath, 'assets'),
            api: path.join(srcPath, 'api'),
        }        
    }
}