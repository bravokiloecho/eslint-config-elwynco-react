module.exports = {
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './components'],
          ['~', '.'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.tsx', '.json', '.css'],
      },
    },
  },
}
