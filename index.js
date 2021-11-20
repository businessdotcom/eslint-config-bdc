/**
 * Copyright (c) 2019-present, Business.com
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 module.exports = {
	"extends": "react-app",
	"plugins": ["prettier"],
	"rules": {
		"prettier/prettier": [
			"error",
			{
				"bracketSpacing": true,
				"printWidth": 120,
				"semi": false,
				"singleQuote": true,
				"tabWidth": 4,
				"trailingComma": "es5",
				"useTabs": true,
				"endOfLine": "auto"
			}
		],
		"import/no-unresolved": [2, {"commonjs": true, "amd": true}],
		"import/named": 2,
		"import/namespace": 2,
		"import/default": 2,
		"import/export": 2,
	},
	"settings": {
		"import/resolver": {
			"node": {
				"extensions": [
					".js",
					".jsx"
				]
			}
		}
	},
}


// for ref: https://codingsrc.com/eslint-prettier-create-react-app-best-configuration-setup-2019/
