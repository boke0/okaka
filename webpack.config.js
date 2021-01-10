module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname,
    filename: 'okaka.js',
    library: 'Okaka',
    libraryTarget: 'umd',
    globalObject: 'this'
  }
}
