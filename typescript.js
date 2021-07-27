module.exports = {
	parser: '@typescript-eslint/parser',

	plugins: ['@typescript-eslint'],

	extends: ['plugin:@typescript-eslint/recommended'],

	rules: {
		// Use TS for these
		'react/prop-types': 'off',
		'react/require-default-props': 'off',
		// TS rules
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-empty-function': 'off',
	},
}
