
module.exports = {
    entry: {
        index: './app/index.ts'
    },
    output: {
        filename: './app/[name].min.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['to-string-loader', 'css-loader']

        }, {
            test: /\.html$/,
            loader: 'html'

        }, {
            test: /\.(jpg|png|gif)$/,
            loader: 'url-loader?limit=100000'

        }, {
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader']
        }]
    }

};
