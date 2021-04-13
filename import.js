module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './components'],
          ['~', '.'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json', '.css'],
      },
    },
  },
}
