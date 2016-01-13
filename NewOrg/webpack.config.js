module.exports = {
    entry: "./src/app.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    resolve: {
      path: __dirname,
      extensions: ['', '.jsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "babel-loader" }
        ]
    }
};
