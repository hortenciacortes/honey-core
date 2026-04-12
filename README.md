# Honey Core

Biblioteca Angular de componentes e utilitários para o design system da Honey.

## Requisitos

- Node.js e npm instalados
- Angular CLI compatível com o projeto

## Instalação

```bash
npm install
```

## Desenvolvimento

Para subir a aplicação local:

```bash
npm start
```

## Storybook

Para rodar o Storybook em desenvolvimento:

```bash
npm run storybook
```

Para gerar o build estático do Storybook:

```bash
npm run build-storybook
```

## Build da biblioteca

Para gerar o pacote da lib em `dist/honey-core`:

```bash
npm run build:lib
```

## Testes

Para executar os testes unitários:

```bash
npm test
```

## Publicação no npm

Antes de publicar, atualize manualmente a versão nos dois arquivos abaixo:

- `package.json`
- `projects/honey-core/package.json`

Os dois arquivos devem ficar com a mesma versão antes da publicação.

### Criar o token no npm

O token de publicação deve ser criado na sua conta do npm.

Ao gerar o token, selecione a opção:

- `Bypass two-factor`

### Fluxo de publicação

1. Atualize manualmente a versão em `package.json` e `projects/honey-core/package.json`.

2. Publique no npm com o token criado no portal do npm:

```bash
npm publish --access public --//registry.npmjs.org/:_authToken=SEUTOKEN
```
