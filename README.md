<h1 align="center">:page_with_curl:Angular Basics</h1>

<p align="center">
  <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
  <img src="https://img.shields.io/github/stars/camilafernanda?style=social"/>
</p>

<h4 align="center"> 
    :construction:  Projeto disponível para evolução  :construction:
</h4>

* [Descrição do Projeto](#descrição-do-projeto)
* [Funcionalidades e Demonstração da Aplicação](#funcionalidades-e-demonstração-da-aplicação)
* [Acesso ao Projeto](#acesso-ao-projeto)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Indice do tutorial](#indice-tutorial)

<h1 id="descrição-do-projeto">Descrição do Projeto</h1>

<p align="left">
  Repositório simples para demonstrar e ensinar o basico do angular com um projeto simples utilizando do basico do Angular para construir uma SPA (Single Page Application), de uma ToDo List.
</p>

<h3 id="funcionalidades-e-demonstração-da-aplicação">🔨 Funcionalidades do projeto</h3>

    Funcionalidade 1: Resgatar uma lista de tarefas de uma API e usar no Front com uma aplicação em angular.
    Funcionalidade 2: Alterar o estado das tarefas para Concluidas ou Em Andamento e salvar essa alteraçõa na API.
    Funcionalidade 3: Acrescentar uma nova tarefa na lista e salvar na API.
    Funcionalidade 4: Remover uma tarefa da lista e do banco na API.
    
<h4 align="center"> 
  :construction:  Fazer um gif do funcionamento e postar  :construction:
</h4>

<h3 id="acesso-ao-projeto">Acesso ao Projeto</h3> 
<p>É um projeto bem simples, foi usado somente o Angular 16 para desenvolver toda a parte do front-end, e para o back-end, foi usado uma api fake criada a partir de um json e rodada com json-server.</p>
<p>Para rodar, primeiramente temos que instalar o Angular.</p>

>Para isso garanta de ter  node instalado em sua ultima versão, através do link:
* [node.js](https://nodejs.org/en) (Procure usar a versão LTS)
  ![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/55eca5ba-8eab-441f-800d-1fd51274a8b7)
  
>E então rodar o comando no terminal:
```
npm install -g @angular/cli
```

>Depois instale o json-server

```
npm install -g json-server
```

**se der algum erro nessas instalações, garanta que o node.js foi instalado na ultima versão, e tente abrir o CMD como ADM**

>E então clone o projeto, e dentro da pasta "todo-list", abra o terminal como ADM e rode:
```
npm install
```
ele ira instalar todas as dependencias  do angular

>Após instalar as dependencias necessárias, para rodar é simples:
```
->Dentro da pasta todo-list rode o comando:
ng serve

->E dentro da pasta json rode o comando:
json-server --watch list.json

->Abra o browser e entre no link http://localhost:4200 para ver a aplicação funcionar
```

<h3 id="tecnologias-utilizadas">Técnologias Utilizadas</h3>

* Angular 16: [documentação](https://angular.io/docs)
* json-server: [documentação](https://www.npmjs.com/package/json-server#getting-started)


<h1 id="indice-tutorial>Tutorial</h1>
  
* [Icones usados](#icones)

<h3 id="icones">Icones</h3>

* [Delete](https://www.flaticon.com/br/icone-gratis/remover-do-carrinho_6815040)
* [Não concluído](https://www.flaticon.com/br/icone-gratis/cancelar_190406?term=cancel&page=1&position=5&origin=search&related_id=190406)
* [Concluído](https://www.flaticon.com/br/icone-gratis/verificado_169780?term=sucesso&page=1&position=3&origin=search&related_id=169780)

  

