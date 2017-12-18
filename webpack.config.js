const path = require('path');

var WebpackBuildNotifierPlugin = require('webpack-build-notifier');

const Paths = {
    BUILD: path.resolve(__dirname, 'build'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/js'),
  };

module.exports = {
    entry: './src/index.js',
    output: {
        path: Paths.BUILD,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.jsx?$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/ 
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
        new WebpackBuildNotifierPlugin({
          title: "ShiftIlluminator"
        })
      ],
    devServer: {
        contentBase: Paths.BUILD
    }
};
