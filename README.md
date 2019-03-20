# TO DO APP

## Observações gerais

Desenvolvi todo o app seguindo em boa parte o que recomenda a própria
documentação do vue.

Com exceção de parte da comunicação entre componentes ser realizada
através do RXJS, não saí muito do padrão de desenvolvimento com vue.

Procurei utilizar o mínimo possível de bibliotecas de terceiros, porque
ao meu ver, depender de mais de bibliotecas de terceiro não é uma boa.

Ao implementar minhas próprias features, tenho mais flexibilidade,
rapidez e domínio para implementar recursos. Ou pelo menos, deveria ser assim...

### Recursos do App
1. Cadastro de tasks
2. Atualização do status das tasks {complete, notComplete, null}
3. Filtragem de tasks por status
4. Criar e remover tasks
5. Realtime data store manager com FIREBASE
6. Gestão centralizada de dados com Vuex
8. Event driven comunication com RXJS
7. Design responsivo

### O que fiz de diferente do exercício proposto
1. Ao invés de utilizar vuetify, decidi implementar todos os componentes
2. Não utilizei nenhum preprocessador css (por exemplo: Stylus)
4. Não criei a tela de login, ao invés, configurei o FIREBASE para não solicitar
autenticação.
5. Decidi criar uma tela apenas. Isso me ajudou a evitar a necessidade de utilizar o VueRouter.
6. Devido a alguns imprevistos/falta de tempo não implementei os testes de E2E, mas,
pretendo realizar a implementação, porque no vue, vai ser um desafio muito legal.

## OBSERVAÇÕES SUPER IMPORTANTES
1. Ao utilizar o Firebase, decidi mesclar os recursos do JS SDK com implementações
que eu mesmo fiz para tratar o crud dentro do Vuex, eliminando a necessidade de
acessar o FIREBASE de dentro dos componentes através do SDK.
Você pode ver essa estrutura em src/db e src/helpers/dataSync.js.

2. Para compartilhar dados entres os componentes criei um recurso que chamei de eventBus,
que nada mais é do que um "observador" que permite trocar informações entre componentes.
Você pode ver sua construção no diretório: src/eventBus, quaisquer novos recursos
referentes a eventos podem ser gerenciados através desse observador, inclusive adicionando
novos recursos se necessário.

3. Ao invés de utilizar a própria estrutura do FIREBASE para gerar subdocumentos, achei
que seria interessante utilizar os hashs do frirebase como identificadores para subdocumentos
e gerar ids numéricos para gerir os dados no vuex e fazer a sincronização dos documentos
no firebase com o helper dataSync e você pode encontrá-lo em:
src/helpers/dataSync.js

Dessa forma pude manter as atualizações em realtime sem a necessidade de usar o pacote firestore do FIREBASE e todos o "CRUD" gerenciado de dentro da store/vuex.

## Conclusão

Fiquei satisfeito com os recursos implementados, mas, com mais tempo certamente eu modificaria algumas coisas e adicionaria recursos tanto para melhorar a experiência
do usuário, como para melhorar a performance e principalmente no que diz respeito a
cincronização de dados com o firebase.

Foi bem divertido fazer esse app, mesmo em meio a correria o que tornou o desafio um
pouquinho mais complicado, mas, no fim, deu tudo certo!

Muito obrigado por ler tudo até aqui!

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
