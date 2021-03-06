# β¨π shared-ui

<br>
npm λ°°ν¬ νμ€νΈλ₯Ό μν μ μ₯μμλλ€.

<br><br>

## π Features

- Language: [typescript](https://www.typescriptlang.org/)
- Code linter: [eslint](https://eslint.org/)
- Code format: [prettier](https://prettier.io/)
- Git commit linter: [husky](https://github.com/typicode/husky) + [lint-staged](https://github.com/okonet/lint-staged)
- UI framework: [ant design](https://ant.design/)
- CSS in JS: [styled-components](https://styled-components.com/)
- Export "es, cjs" format using rollup

<br>

## π‘ Prerequisites

- Vite requires Node.js version >=12.0.0.

<br>

## β‘οΈ Installation

```bash
git clone https://github.com/kangqod/shared-ui.git
cd shared-ui
yarn or yarn install
```

<br>

## π¦ Directory structure

```bash
|-- example           # μμ€ μμ  λ° νμ€νΈ
|-- src               # μμ€ λλ ν λ¦¬
| |-- styles          # Theme
| |-- ui              # UI Components (from antd)
```

<br>

## π¦  How to use the code
```bash
import { Button } from 'kangqod-shared-ui'

...
return (
  <Button className="type1">
    Button
  </Button>
)
...
```

<br>

## π Development

```bash
# Start the vite dev server
yarn dev
```

<br>

## π Build

```bash
# Make a production bundle
yarn build
```

<br>

## π Lint

```bash
yarn lint:fix
```

<br>

## π Prettier

```bash
yarn prettier
```