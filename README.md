# ✨🎉 shared-ui

<br>
npm 배포 테스트를 위한 저장소입니다.

<br><br>

## 🚀 Features

- Language: [typescript](https://www.typescriptlang.org/)
- Code linter: [eslint](https://eslint.org/)
- Code format: [prettier](https://prettier.io/)
- Git commit linter: [husky](https://github.com/typicode/husky) + [lint-staged](https://github.com/okonet/lint-staged)
- UI framework: [ant design](https://ant.design/)
- CSS in JS: [styled-components](https://styled-components.com/)
- Export "es, cjs" format using rollup

<br>

## 💡 Prerequisites

- Vite requires Node.js version >=12.0.0.

<br>

## ⚡️ Installation

```bash
git clone https://github.com/kangqod/shared-ui.git
cd shared-ui
yarn or yarn install
```

<br>

## 📦 Directory structure

```bash
|-- example           # 소스 예제 및 테스트
|-- src               # 소스 디렉토리
| |-- styles          # Theme
| |-- ui              # UI Components (from antd)
```

<br>

## 📦  How to use the code
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

## 👉 Development

```bash
# Start the vite dev server
yarn dev
```

<br>

## 👉 Build

```bash
# Make a production bundle
yarn build
```

<br>

## 👉 Lint

```bash
yarn lint:fix
```

<br>

## 👉 Prettier

```bash
yarn prettier
```