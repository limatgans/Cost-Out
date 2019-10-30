module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": "eslint:recommended",
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	rules: {
		camelcase: 0,
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"array-callback-return": "warn",
		"default-case": ["warn", { commentPattern: "^no default$" }],
		"dot-location": ["warn", "property"],
		eqeqeq: ["warn", "always", { null: "ignore" }],
		// "guard-for-in": "warn",
		"new-parens": "warn",
		"no-array-constructor": "warn",
		"no-caller": "warn",
		"no-cond-assign": ["warn", "always"],
		"no-const-assign": "warn",
		"no-control-regex": "warn",
		"no-delete-var": "warn",
		"no-dupe-args": "warn",
		"no-dupe-class-members": "warn",
		"no-dupe-keys": "warn",
		"no-duplicate-case": "warn",
		"no-empty-character-class": "warn",
		"no-empty-pattern": "warn",
		"no-eval": "warn",
		"no-ex-assign": "warn",
		"no-extend-native": "warn",
		"no-extra-bind": "warn",
		"no-extra-label": "warn",
		"no-fallthrough": "warn",
		"no-func-assign": "warn",
		"no-implied-eval": "warn",
		"no-invalid-regexp": "warn",
		"no-iterator": "warn",
		"no-label-var": "warn",
		"no-labels": ["warn", { allowLoop: false, allowSwitch: false }],
		"no-lone-blocks": "warn",
		"no-loop-func": "warn",
		"no-mixed-operators": [
			"warn",
			{
				groups: [
					["&", "|", "^", "~", "<<", ">>", ">>>"],
					["==", "!=", "===", "!==", ">", ">=", "<", "<="],
					["&&", "||"],
					["in", "instanceof"]
				],
				allowSamePrecedence: false
			}
		],
		"no-multi-str": "warn",
		"no-native-reassign": "warn",
		"no-negated-in-lhs": "warn",
		"no-new-func": "warn",
		"no-new-object": "warn",
		"no-new-symbol": "warn",
		"no-new-wrappers": "warn",
		"no-obj-calls": "warn",
		"no-octal": "warn",
		"no-octal-escape": "warn",
		"no-redeclare": "warn",
		"no-regex-spaces": "warn",
		"no-restricted-syntax": ["warn", "LabeledStatement", "WithStatement"],
		"no-script-url": "warn",
		"no-self-assign": "warn",
		"no-self-compare": "warn",
		"no-sequences": "warn",
		"no-shadow-restricted-names": "warn",
		"no-sparse-arrays": "warn",
		"no-template-curly-in-string": "warn",
		"no-this-before-super": "warn",
		"no-throw-literal": "warn",
		"no-undef": "error",
		"no-unexpected-multiline": "warn",
		"no-unreachable": "warn",
		"no-unused-expressions": [
			"warn",
			{
				allowShortCircuit: true,
				allowTernary: true
			}
		],
		"no-unused-labels": "warn",
		"no-unused-vars": ["warn", { varsIgnorePattern: "React|debug" }],
		"no-use-before-define": ["warn", "nofunc"],
		"no-useless-computed-key": "warn",
		"no-useless-concat": "warn",
		"no-useless-constructor": "warn",
		"no-useless-escape": "warn",
		"no-useless-rename": [
			"warn",
			{
				ignoreDestructuring: false,
				ignoreImport: false,
				ignoreExport: false
			}
		],
		"no-with": "warn",
		"no-whitespace-before-property": "warn",
		"operator-assignment": ["warn", "always"],
		radix: "warn",
		"require-yield": "warn",
		"rest-spread-spacing": ["warn", "never"],
		strict: ["warn", "never"],
		"unicode-bom": ["warn", "never"],
		"use-isnan": "warn",
		"valid-typeof": "warn",
		"prefer-const": "warn",
		"no-var": "warn",
		"object-shorthand": "warn",
		"prefer-template": "warn",
		"template-curly-spacing": ["warn", "never"],
		// "prefer-arrow-callback": "warn",
		"arrow-spacing": ["warn", { before: true, after: true }],
		// "arrow-parens": ["warn", "as-needed", { requireForBlockBody: false }],
		"no-confusing-arrow": "warn",
		"no-duplicate-imports": "warn",
		"generator-star-spacing": ["warn", "after"],
		"one-var": ["error", "never"],
		// "no-nested-ternary": "warn",
		"brace-style": "warn",
		"newline-per-chained-call": "warn",
		"padded-blocks": ["warn", "never"],
		"object-curly-spacing": ["warn", "always"],
		"id-length": [
			"error",
			{
				min: 2,
				properties: "always",
				exceptions: ["q", "i"]
			}
		],
		// "new-cap": ["error", { "properties": false }],
		"no-underscore-dangle": "warn",
		"no-multi-spaces": ["warn", { ignoreEOLComments: true }],
		"space-before-function-paren": [
			"warn",
			{
				anonymous: "always",
				named: "always",
				asyncArrow: "always"
			}
		],

		// https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
		"react/jsx-equals-spacing": ["warn", "never"],
		"react/jsx-no-duplicate-props": ["warn", { ignoreCase: true }],
		"react/jsx-no-undef": "error",
		"react/jsx-pascal-case": ["warn", { allowAllCaps: true }],
		"react/jsx-uses-react": "warn",
		"react/jsx-uses-vars": "warn",
		"react/no-danger-with-children": "warn",
		"react/no-deprecated": "error",
		"react/no-direct-mutation-state": "warn",
		"react/no-is-mounted": "warn",
		"react/react-in-jsx-scope": "error",
		"react/require-render-return": "warn",
		"react/style-prop-object": "warn",
		"react/prefer-es6-class": "warn",
		// "react/prefer-stateless-function": "warn",
		"react/jsx-closing-bracket-location": "warn",
		"react/jsx-closing-tag-location": "warn",
		"react/jsx-tag-spacing": "warn",
		"react/jsx-curly-spacing": "warn",
		"react/jsx-boolean-value": "warn",
		"react/jsx-wrap-multilines": "warn",
		"react/self-closing-comp": "warn",
		// "react/jsx-no-bind": "error",
		"react/sort-comp": "warn",

		// https://github.com/gajus/eslint-plugin-flowtype
		// "flowtype/define-flow-type": "warn",
		// "flowtype/require-valid-file-annotation": "warn",
		// "flowtype/use-flow-type": "warn",

		// https://github.com/benmosher/eslint-plugin-import
		// "import/prefer-default-export": "warn",
		// "import/no-webpack-loader-syntax": "warn",
		// "import/no-unresolved": "error",
		// "import/export": "warn",
		// "import/first": "warn",
		// "import/newline-after-import": "warn"
	}
};