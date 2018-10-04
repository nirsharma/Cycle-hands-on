const webpack = require('webpack')

module.exports = {
    entry: './src/main.js',
    output: {path: __dirname + '/dist', filename : 'bundle.js'},
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    watch: true,
    devtool: '#inline-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            snabbdom : 'snabbdom-jsx'
        })
    ]
}
