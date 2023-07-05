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


<h1 id="indice-tutorial">Tutorial</h1>
  
* [Icones usados](#icones)

<h3 id="icones">Icones</h3>

* [Delete](https://www.flaticon.com/br/icone-gratis/remover-do-carrinho_6815040)
* [Não concluído](https://www.flaticon.com/br/icone-gratis/cancelar_190406?term=cancel&page=1&position=5&origin=search&related_id=190406)
* [Concluído](https://www.flaticon.com/br/icone-gratis/verificado_169780?term=sucesso&page=1&position=3&origin=search&related_id=169780)

<h3 id="criar-novo-projeto">Criar um Novo Projeto</h3>
<p>Para criar o projeto é extremamente simples, use o comando:
  
```
“ng new nome-do-app”
```

Após isso, perguntará primeiro se você quer que ele adicione o Angular Routing (não usaremos nesse projeto), depois irá perguntar qual o tipo de folha de estilos você quer usar (no exemplo foi utilizado SCSS), após selecionar o tipo de folha de estilos, é só esperar a criação do projeto terminar.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/3864e1d7-55bc-416a-bd52-787622d47425)


<h3 id="folder-and-files">Arquivos e Pastas</h3>
<p>Logo que o projeto for criado no local desejado, ele terá estes arquivos (excluindo o .vscode e o README.md que são arquivos do meu vs code e do repositório)</p>

> node_modules: pasta contendo as dependências do projeto, geralmente incluído no arquivo .gitignore e não é subido para o repositório.

> index.html: arquivo base  padrão HTML do projeto.

> styles.scss: arquivo de SCSS global do projeto.

> package-lock.json: arquivo contendo as indicações das dependências usadas no projeto, assim quem baixar o projeto consegue instalar as dependências utilizando o comando “npm install”

> app.component.html: é a pagina principal do projeto, é a partir dela que os componentes são iniciados.
O html é a parte visual do seu componente, basicamente ele é um código comum  em HTML, com a diferença de que não é necessário todo o início do html.

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/554b369c-0071-4113-9826-415bc9e1c177)

> app.component.scss: é a folha de estilos ligada o template app.component.html
É um SCSS comum.

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/4a2a053b-3757-49ed-9b8d-a60fb80da9fe)

> app.component.ts: É a parte, que desenvolve o código e a parte lógica do componente.
É nele que temos a maior diferença de um TS comum.
```
  * import: são as importações de serviços, pipes, e outros arquivos que serão usados dentro do TS

  * @Component()
    -> selector: é o nome como o componente será chamado no html de outros componentes
    -> templateUrl: o caminho do html que será usado no template do componente 
obs: tbm é possivel usar só “template” e fazer o html dentro do arquivo TS.
    -> styleUrl: o caminho da folha de estilos que será usada como SCSS do componente

  * export class: o nome da class do TS, dentro dessa classe que teremos nossos métodos, variaveis e etc
```

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/2d5fbdc7-6e60-4fbd-92cd-174114f7b79a)

>app.module.ts: è o módulo principal do app aqui fazemos as declarações dos componentes, importações de módulos externos, importar serviços e etc.

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/8fdbdd07-36db-46eb-af46-bb0f10ecde11)

<hr>

<h3>Criando o primeiro componente</h3>

<p>Para criar um componente usamos o comando “ng generate component nome-do-componente” ou para simplificar “ng g c nome-do-componente”.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/a387213a-ed39-4ca7-afd0-aaa04b5f07f6)

<p>Ele pode perguntar se você deseja compartilhar dados anônimos, vai de você se quer compartilhar ou não (Y ou N)</p>

<p>O angular criara o componente com o basico para rodar ele, incluindo os arquivos html, scss e ts (obs. os arquivos .spec.ts é um arquivo que é usado somente para criar testes, não irei usar nesse momento)</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/1484e9f5-943d-4df5-9d1a-f1f33f127ca6)

<p>Usando essa forma para criar o componente o angular inclusive faz as declarações necessárias para usar esse componente, como da pra ver o componente foi declarado no app.module.ts</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/cede8214-0342-48d3-8f03-f0dfb4e843eb)

<p>Para usar o novo componente, temos que chama-lo aonde queremos usar, no caso vamos usar no app.component para ver mos na tela, para chamar usamos o nome descrito no “selector” do arquivo .ts do componente, dessa forma:</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/68e9ab83-6559-4582-a465-94caee5c03c6)

<p>E para testarmos, usamos o comando “ng serve” que irá rodar o projeto, ou para simplificar “ng s”, podendo usar “ng s -o”, nesse caso a opção -o irá automaticamente abrir o navegador padrão do computador</p>
<p>Ao iniciar o projeto, dará a mensagem de que foi compilado com sucesso  e irá abrir no browser no link mostrado, geralmente htp://localhost:4200/</p>
<p>O básico que vem no componente é simplesmente o texto “nome-do-componente works”
Como foi chamado no app.componente, aparecerá diretamente na primeira página e podemos ver que tudo está certo com ele aparecendo na tela</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/da79b625-7f15-4449-8b41-fd4954a62709)

<hr>

<h3>Usando ngModel e FormsModule:</h3>

<p>Agora vamos editar o componente de header para mostrar o que queremos, vamos fazer um campo de texto, somente um input e um botão por enquanto</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/b095216d-1cd0-4d5b-9c62-850462e63846)

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/129c8935-b6a3-4583-aaa9-452e4047b7ef)

<p>E como usamos esse input?</p>
<p>No angular temos uma forma muito interessante de tratar com informações vinda de formulários, que é usando a diretiva ngModel, para usar temos que importar o FormsModule no Module que estamos usando, no caso app.module.ts</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/c09a245e-a0c4-43db-a568-2674c5dfe612)

<p>E criamos uma variável no arquivo .ts do componente que iremos usar o input e chamamos essa variável no input.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/3870e749-34d4-4f06-832d-a65b717d4b4a)
![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/a34611d9-6604-488e-a73c-07b6e9305570)

<p>Usar dessa forma chamamos de One-way Data Binding pois ligamos o valor da variável em um único caminho (do input a variável)</p>
<p>Porém se formos no html do componente e colocar o seguinte código:</p>

```
<p>{{todo}}</p>
```

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/8cede15c-6d8f-48f8-9ed6-9b580dba0ea4)

<p>Criamos um Two-Way Data Binding pois ligamos em dois caminhos, do input para a variável e da variável para o paragrafo.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/2c1afe2d-772f-4f46-bcf0-11bb4519c8e6)

<p>E para testar é fácil, é ir no browser e digitar o que quiser no input e então deve aparecer na página o texto que você está digitando no input.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/080b9e97-fdc4-488b-9b17-a77afd4f02b5)
