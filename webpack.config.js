var path = require('path');

module.exports = {
   mode: 'none',
   entry:{
      App:  './app/assets/scripts/App.js'  
   },
   output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'app/temp/scripts')
   },
   module: {
      rules: [
         {
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['env']
               }
            },
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/
         }
      ]
   }
}