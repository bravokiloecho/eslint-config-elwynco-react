This is an ESLint config for React projects that uses [AirBnB's styleguide](https://github.com/airbnb/javascript) with a few changes to the rules that suit met.

## Installation

Install the package and all its dependencies via:
(If you're using `yarn`, this will still work)

```sh
npx install-peerdeps --dev eslint-config-elwynco-react
```

Then add this line to your `.eslintrc` config file.

```
"extends": ["elwynco-react"]
```

## Import rules (optional)

If you also want to lint absolute imports with Next.js the follow the [instructions on the Next.js website](https://nextjs.org/docs/advanced-features/module-path-aliases) and include the import linting rules from this package by adjusting the `extends` property of your `.eslintrc` config file to:

```
"extends": ["elwynco-react", "elwynco-react/import"]
```

You can then import anything in your `components` directory like this:

```
import MyComponent from "@/MyComponent"
```

and any files in the root of your repo like this:

```
import utils from "~/helpers/utils"
```

## Peer dependencies

It requires `eslint`, `eslint-config-airbnb`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, and `eslint-plugin-jsx-a11y`, `eslint-import-resolver-alias`.

You can view the versions that are supported with:

```sh
npm info "eslint-config-elwynco-react@latest" peerDependencies
```

## Legacy install

If using **npm < 5**, Linux/OSX users can run

```sh
(
  export PKG=eslint-config-elwynco-react;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Which produces and runs a command like:

```sh
npm install --save-dev eslint-config-elwynco-react eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-plugin-react-hooks@^#.#.#
```

If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

```sh
npm install -g install-peerdeps
install-peerdeps --dev eslint-config-elwynco-react
```
The cli will produce and run a command like:

```sh
npm install --save-dev eslint-config-elwynco-react eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-plugin-react-hooks@^#.#.#
```