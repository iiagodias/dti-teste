
## Dev

- Recrutadora: Natasha Vermeuler
- Nome: Iago Dias
- E-mail: iago.unama@hotmail.com

## A aplicação

Um aplicativo móvel capaz de:
* Buscar filmes por título ou ano;
* Ordenar por título ou média de avaliação;
* Ver detalhes do filme.

## Demo

![](./src/assets/image/mo.gif)

## Requisitos

* [React Native](https://reactnative.dev/docs/next/environment-setup);
* [Yarn](https://classic.yarnpkg.com/en/docs/install/) ou [Npm](https://www.npmjs.com/get-npm);
* Emulador ou dispositivo móvel.

## Bibliotecas

- Styled Component;
- Redux;
- Redux Sauce;
- Redux Saga;
- TypeScript.


## Iniciando a aplicação

Após clonar o projeto em sua máquina e com os requisitos configurados, primeiramente deve-se executar o seguinte comando, na raiz do projeto, para instalação das dependências:
 - Caso seu gestor de dependência seja o **yarn**:
```sh
yarn
```
 - Ou o **npm**:
```sh
npm install
```
Em seguida, execute os camandos correspondentes ao S.O. de sua escolha:

#### iOS

Para compilar para iOS é necessário os seguintes comandos:

- Dentro da pasta ios:
 ```sh
pod install
```


- Na raiz do projeto:

 ```sh
react-native run-ios
```



#### Android
Para compilar para Android é necessário os seguinte comando:

- Na raiz do projeto:

 ```sh
react-native run-android
```

## Executando testes

Para execução do teste execute o seguinte comando:
 - Caso seu gestor de dependência seja o **yarn**:
```sh
yarn test
```
 - Ou o **npm**:
```sh
npm run test
```

