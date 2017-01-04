const prod = process.argv.indexOf('-p') !== -1;

module.exports = {
    entry: {
        index: './app/' + ( (prod)?'index-aot.ts':'index.ts' )
    },
    output: {
        filename: './app/[name].min.js'
    },
    resolve: {      
      extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['to-string-loader', 'css-loader']

        }, {
            test: /\.html$/,
            loader: 'html?-minimize'

        }, {
            test: /\.(jpg|png|gif)$/,
            loader: 'url-loader?limit=100000'

        }, {
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader']
        }]
    }

};
