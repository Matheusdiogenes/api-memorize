<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Tecnologias utilizadas

<p>Linguagem: <a href="https://www.typescriptlang.org/" target="blank">Typescript</a></p>
<p>Framework: <a href="http://nestjs.com/" target="blank">NestJS</a></p>
<p>Biblioteca(s): <a href="https://momentjs.com/" target="blank">Moment.Js</a> para manipulação de datas</p>

## Descrição

Essa é uma API de flashcards que utiliza a técnica da Repetição Espaçada ou Spaced Repetition System (SPS) para memorização.

### Como funciona ?

Ao criar o flashcard, o usuário rever o flashcard no mesmo dia. Se o usuário lembrar da resposta, a revisão do flashcard é marcada para o dia seguinte. Se ele acertar novamente a revisão do flashcard é marcado para 2 dias depois da última revisão. O espaçamento entre as revisões é controlado pelo nível do cartão, onde o nível é não sequencial e representa a distância do dia da última revisão e a próxima. Caso a resposta esteja errada, o nível do cartão é retornado ao estado inicial (nível 1).

Exemplo:

| Nível | Revisão | Acertou? |
|-------|---------|----------|
| 1     | 1 dia   | true     |
| 2     | 2 dias  | true     |
| 4     | 4 dias  | true     |
| 8     | 8 dias  | true     |


## Instalação

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
