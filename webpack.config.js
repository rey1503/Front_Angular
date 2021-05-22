const html = require('html-webpack-plugin');

module.exports= {
    entry:'./src/index.js',
    output:{
        path: __dirname + '/build',
        filename:'bundle.js'
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:[
                {
                    loader:'style-loader'
                },
                {
                    loader:'css-loader'
                }
            ]
        }]
    },
    plugins:[
        new html({
            template:'./src/index.html'
        })
    ]
}