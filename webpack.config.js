const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMerge = require('webpack-merge');
const envSpecificConfig = mode => require(`./config/webpack.${mode}`)(mode);

module.exports = ({ mode } = { mode: "production" }) => {
    return WebpackMerge (
        {
            mode,
            entry: {
                maualConfig:  path.resolve(__dirname, './src/app.jsx')
            },
            output: {
                filename: '[name].[hash].bundle.js',
                path: path.resolve(__dirname, 'Public')
            },

            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: ['babel-loader']
                    },
                    {
                        test: /\.(png|jpg|gif)$/,
                        use: [
                          {
                            loader: 'url-loader',
                            options: {
                              limit: 5000
                            }
                          }
                        ]
                      }
                ]
            },

            plugins: [
                new HtmlWebpackPlugin({template: path.resolve(__dirname, './static/index.html')})
            ]

        },
        envSpecificConfig(mode)
    );
}