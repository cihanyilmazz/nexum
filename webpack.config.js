const path = require('path');

module.exports = {
  entry: './assets/js/main.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
},
devServer: {
    static: {
        directory: path.join(__dirname, '/')
    }
},
  module: {
    rules: [
        {
            test: /\.(sass|css|scss)$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
        },
    ],
  },
  plugins: [
    /* Use the ProvidePlugin constructor to inject jquery implicit globals */
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery'",
        "window.$": "jquery"
    })
  ]
};