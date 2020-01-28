# eslint-config-bdc

business.com engineering team's eslint setup via reusable NPM package.


This eslint config extends [this create react app one](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app)
and adds [prettier](https://prettier.io/docs/en/integrating-with-linters.html) formatting to it with some additional rules we standardized around at business.com.

## Install:

#### Step 1: Install the config and all of it's peer deps:
```
yarn add -D @bizdotcom/eslint-config-bdc eslint-config-react-app @typescript-eslint/eslint-plugin@2.x @typescript-eslint/parser@2.x babel-eslint@10.x eslint@6.x eslint-plugin-flowtype@3.x eslint-plugin-import@2.x eslint-plugin-jsx-a11y@6.x eslint-plugin-react@7.x eslint-plugin-react-hooks@1.x prettier eslint-plugin-prettier

or

npm install -D @bizdotcom/eslint-config-bdc eslint-config-react-app @typescript-eslint/eslint-plugin@2.x @typescript-eslint/parser@2.x babel-eslint@10.x eslint@6.x eslint-plugin-flowtype@3.x eslint-plugin-import@2.x eslint-plugin-jsx-a11y@6.x eslint-plugin-react@7.x eslint-plugin-react-hooks@1.x prettier eslint-plugin-prettier
```

#### Step 2: Create a file named `.eslintrc.json` with following contents in the root folder of your project:

```
{
  "extends": "@bizdotcom/eslint-config-bdc"
}
```

## Use:

There are many ways you can run eslint. Here are a few suggestions:

1. Run eslint in your code editor of choice via eslint extension.
	- [vscode eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
		- **(Recommended)** eslint can do more than just lint, especially the way we have it configured.
		To automate some of the fixable errors/warnings and the prettier code formatting
		we recommend that you enable this setting to make eslint run as soon as you hit
		save. Add this to your settings.json:
			```
			"editor.codeActionsOnSave": {
				"source.fixAll.eslint": true
			}
			```
	- [sublime eslint extension](https://github.com/SublimeLinter/SublimeLinter-eslint)
	- and many more can be [found here](https://eslint.org/docs/user-guide/integrations#editors)


2. An NPM script in your package.json: `"lint": "eslint --ext .js,.jsx ./src"`
	- optionally you could also add a script which runs the fix command for you: `"lint-fix": "yarn run lint --fix"`
	- you could have these script run on commit-hooks with help from tools like [husky](https://github.com/typicode/husky)
	or watch your files and run on save via build tools like webpack, gulp, or eslint-watch etc.

3. Like we said, these are just our suggested methods, we know there are others, you're welcome to use whichever method
works best for you!

