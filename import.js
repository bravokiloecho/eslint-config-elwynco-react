module.exports = {
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@/constants', './constants'],
          ['@/copy', './copy'],
          ['@/tempData', './tempData'],
          ['@/helpers', './helpers'],
          ['@/graphQl', './graphQl'],
          ['@', './components'],
          ['~', '.'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json', '.css'],
      },
    },
  },
}
