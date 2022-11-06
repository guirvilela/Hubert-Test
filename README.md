
# Hubert | Teste-Prático - React

O projeto **Hubert** é uma aplicação web com o propósito de listar os principais produtos de um e-comerce e visualizar seus detalhes.

---

<h2 align="center">Hubert | Teste-Prático</h2>
<h3 align="center">
  <a href="#information_source-visão-geral">Visão Geral</a>&nbsp;|&nbsp;
  <a href="#interrobang-objetivo">Objetivo</a>&nbsp;|&nbsp;
  <a href="#book-documentação">Documentação</a>&nbsp;|&nbsp;
  <a href="#hammer-testes">Testes</a>&nbsp;|&nbsp;
  <a href="#clock1-scrum">Scrum</a>&nbsp;|&nbsp;
  <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
  <a href="#rocket-principais-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#package-como-baixar-e-executar-o-projeto">Baixar e Executar</a>&nbsp;|&nbsp;
  <a href="#thought_balloon-depoimento">Depoimento</a>&nbsp;
</h3>

---

</div>

- [**Link do vídeo completo sobre o projeto**](https://i.imgur.com/cveG3OY.gif)

---

## :information_source: Visão Geral

O projeto proposto pela **Hubert** foi para a participação do processo seletivo para a vaga de Desenvolvedor(a) Front-end Pleno Angular | React. 

Nele, foi desenvolvido uma aplicação web utilizando a lógica de programação com Typescript, a criação das funcionalidades e estrutura para
requisições à API da aplicação, que para isso foi utilizado o Axios para buscar todos os produtos disponíveis do e-comerce.



Além disso,para a construção dessa aplicação foi utilizado os seguintes conceitos:

- HTML;
- Styled components;
- Javascript
- Typescript;
- Componentes reutilizáveis;
- Axios;
- Yarn;
- Jest;
- Storybook;
- React-Icons

---

- **Página Inicial**:

<div align="center" >
  <img src="https://i.imgur.com/vEB4DlL.png" width="550">
</div>

---

- **Página de Detalhes do Produto**:

<div align="center" >
  <img src="https://i.imgur.com/V84TDke.png" width="560">
</div>

---

## :interrobang: Objetivo

Esse teste tem como objetivo, desenvolver as funcionalidades de uma tabela de produtos de um e-comerce, além disso, aplicar animações CSS, responsividade
das telas, testes unitários, componentes organizados, HTML semântico e recursos do próprio React.

Assim, nesse projeto é possível:

1. Verificar todos os produtos disponíveis através de uma tabela;
2. Visualizar animações CSS, como spinner de Loading;
3. Filtrar a tabela pelo nome do produto;
4. Limpar filtro para trazer todos os dados novamente;
5. Navegar entre as as telas com uma animação suave de navegação;
6. Ver detalhadamente as especificações do produto;

---

## :book: Documentação

Para este teste foi utilizado a documentação pelo Storybook para facilitar a visualização dos componentes totalmente separados dos outros e do próprio código, porém mantendo estilos e animações CSS. Além disso é possivel observar todas as propriedades que deverão ser passadas ou não, para aquele componente funcionar.
 
 <div align="center" >
  <img src="https://i.imgur.com/w9sTviZ.png" width="560">
</div>

---
Segue abaixo o vídeo completo da documentação feita para o teste **Hubert**

[**Link do vídeo completo sobre a documentação do projeto**](https://i.imgur.com/Gw3k3wl.gif)

---

## :hammer: Testes

Para a confiabilidade das funcionalidades, foi desenvolvido testes unitarios em cada componente e página da aplicação, para isso foi utilizado o Jest como principal ferramenta de teste. A aplicação foi importante para verificar e prevenir futuros bugs no sistema.

 <div align="center" >
  <img src="https://i.imgur.com/pNRVuDF.png" width="560">
</div>


Segue o link abaixo para verificar os testes feitos com mais detalhes:

[**Link dos testes unitários do projeto**](https://guilherme-vilela.notion.site/Hubert-Testes-Unit-rios-4762a39a583940608f337a5b54a5ec29)

---

## :clock1: Scrum

Para organizar as tarefas mais importantes a serem feitas e determinação do tempo de cada atividade, foi utilizado o Scrum.

<div align="center" >
  <img src="https://i.imgur.com/9tZDjFk.png" width="560">
</div>

---

## :seedling: Requisitos Mínimos

- VsCode
- Node.js
- React
- TypeScript
- Yarn(ou NPM)


---

## :rocket: Principais Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [Vite](https://vitejs.dev/)
- [React](https://pt-br.reactjs.org/)
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [TypeScript](https://www.typescriptlang.org/)
- [Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)
- [NodeJS](https://nodejs.org/en/)
- [Styled Components](https://www.styled-components.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [React-Icons](https://react-icons.github.io/react-icons/)
- [Jest](https://jestjs.io/pt-BR/)
- [Storybook](https://storybook.js.org/)



---

## :package: Como baixar e executar o projeto

- Clonar o projeto:

 ```bash
   git clone https://github.com/guirvilela/Hubert-Test
  ```
  
- É necessário a instalação do yarn de acordo com seu sistema operacional, para isso veja como no site do [Yarn](https://yarnpkg.com/getting-started)
- Instalação das dependências:
  - Execute o comando abaixo dentro da pasta do projeto
  
  ```bash
    yarn
  ```
  
- Execução - Abra a pasta do projeto com alguma IDE(Vscode) ou simplesmente abra o terminal na pasta do projeto e execute o comando abaixo:

  ```bash
     yarn dev
  ```
  
- Documentação:
  - Para acessar a documentação do storybook, execute o seguinte comando dentro do projeto:

  ```bash
      yarn storybook
  ```
  - Caso a documentação não abra corretamente, tente o seguinte comando:
  
  -Windows
  
  ```bash
      set NODE_OPTIONS=--openssl-legacy-provider
  ```
  -Linux
   ```bash
      export NODE_OPTIONS=--openssl-legacy-provider
  ```
  

- Testes: 
  - Para rodar todos os testes da aplicação, execute o seguindo comando dentro do projeto:
  ```bash
      yarn test
  ```
  
---

## :thought_balloon: Depoimento

A experiência de desenvolver o teste para a Hubert foi muito interessante e desafiadora para mim, apesar de me sentir confiante ao decorrer da prática, pois o exercício propunha a utilização do Javascript e React.JS, linguagem de progamação e framework dos quais já possuo experiência por ter as utilizados em meu último projeto. Também fiquei muito animado com a oportunidade de poder participar do processo seletivo, por estar dentro do objetivo de carreira que almejo atualmente.

Para dar início ao projeto, escolhi utilizar o framework React por já estar familiarizado com a ferramenta, além de saber o que se é oferecido por ela e toda a estrutura de desenvolvimento de um projeto utilizando a mesma. Também preferi optar pelo Styled Components como pré-processador de estilização devido a manipulação de propriedades para o CSS e a organização que ele consegue trazer para o HTML, em que conto com o CamelCase, para organizar tanto nome de pastas e componentes, e tags estilizadas.   

Ao executar o que foi indicado, optei primeiramente em observar o layout enviado e separar as cores, fontes, seus tamanhos e espessuras, para então passar para o código em forma de Tema global. Visando manter o padrão da aplicação, configuro as cores e fontes em variáveis, que serão aplicadas em todo o projeto, pois, caso algum dia uma nova configuração seja feita, a mudança no código ocorrerá apenas em uma variável que se aplica em todo o projeto, otimizando assim a padronização do código e a sua organização. Finalizada essa etapa de estilização, o foco se torna fazer todos os componentes da aplicação e documentá-los simultaneamente, já configurando futuras funcionalidades.Em seguida, desenvolvo as páginas principais em que serão utilizadas os componentes já configurados anteriormente e separo algumas lógicas que poderão ser utilizadas pelo projeto, como as requisições api, formatação de moeda e dados para teste. Com todas as páginas finalizadas, a fase de testes é iniciada, utilizando o Jest, e a opção coverage para verificar se todos os componentes foram validados.  

Nas etapas de teste e aplicação do tema global apresentei algumas dificuldades. Na estilização não estava conseguindo fazer a tipagem correta dos objetos, cores e fontes. Além de não conseguir testar se os dados estavam sendo carregados corretamente na tabela. Desse modo, pesquisei sobre os assuntos e consegui sanar as minhas dúvidas, solucionando os problemas.  

Uma das funcionalidades da aplicação é colocar na tabela todos os produtos que foram retornados pela api, para fazer a conexão entre front-end e back-end foi utilizado o Axios, além disso separei a requisição numa pasta chamada "service" na qual apresenta uma função assíncrona que apenas retorna os dados da api, ou um erro. Dentro do arquivo da home foi executada a função e o retorno salvo em um state chamado "products", além disso foi criado um componente "table" que espera a passagem de uma propriedade chamada "data", esperando um array de produtos, para assim renderizar a tabela com os dados carregados. Dentro do projeto também foram feitas animações CSS, como spinner de carregamento, navegação entre as telas suavizadas utilizando o framer-motion, hover suave, e focus para alterar a borda do input ao selecioná-lo.

Com isso, após selecionar o input, é possível filtrar os dados da tabela através do nome do produto, para isso criei um state "updateProducts" que copia o array de produtos, e pelo o que é escrito no campo, faz um filtro trazendo um objeto na qual o nome do produto é igual ao texto digitado, já renderizando em tela se foi encontrado, caso não seja, mostra um texto "Nenhum produto encontrado". Logo após o filtro, é possivel limpar a busca que, ao clicar, o array de produtos retorna ao valor inicial de "updateProducts", e limpa o campo de texto.

Dentro da tabela, um dos requisitos era que, ao clicar em algum dos produtos, seja redirecionado para uma página na qual será exibido as informações do mesmo mais detalhado. Para isso, criei uma página chamada "Details" e ela espera como parâmetro de rota os dados do produto selecionado, sendo que, quando clica em algum dado da tabela seja redirecionado para a url: /details/${id do produto selecionado}, e como parâmetro, os dados do produto. 

Quanto as instruções de como rodar o projeto, fiz um tópico exclusivo na sessão <a href="#package-como-baixar-e-executar-o-projeto">Baixar e Executar</a>. 


---

Desenvolvido por :star2: Guilherme Ribeiro Vilela.
