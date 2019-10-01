const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = () => ({
     output:{
         filename: '[name].[hash].production.bundle.js'
     },

     optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin({}),
            new TerserWebpackPlugin()
        ]
     },

     module: {
         rules: [
             {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
             }
         ]
     },

     plugins: [
        new MiniCssExtractPlugin()
     ]
})