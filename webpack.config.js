const path = require("path");

module.exports = {
    mode: "development",
    devtool:"inline-source-map",
    entry:["@babel/polyfill","./src/app.js"],
    output:{
        filename:"index.js",
        path:path.resolve(__dirname,"build")
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:[
                    "babel-loader"
                ]
            }
        ]
    }
}