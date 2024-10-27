import js from '@eslint/js';
import prettierConfig from '@vue/eslint-config-prettier';
import vueTsEslintConfig from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';

export default [
	js.configs.recommended,
	...pluginVue.configs['flat/recommended'],
	...vueTsEslintConfig(),
	prettierConfig,
	{
		rules: {
			complexity: ['error', 4],
			'prefer-const': 'error',
			'sort-imports': [
				'error',
				{
					ignoreCase: true,
					ignoreDeclarationSort: true,
					ignoreMemberSort: false,
					memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
					allowSeparatedGroups: false,
				},
			],
			'vue/multi-word-component-names': 'off',
			'@typescript-eslint/consistent-type-imports': 'error',
		},
	},
];
