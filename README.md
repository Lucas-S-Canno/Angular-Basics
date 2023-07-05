<h1 align="center">:page_with_curl:Angular Basics</h1>

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
* [Criando um novo projeto](#get-started)
* [Arquivos e pastas](#folders-and-files)
* [Criando o primeiro componente](#first-component)
* [Trabalhando com formulário](#ngmodel-and-forms)
* [Trabalhando com listas](#ngfor)
* [Criando interfaces](#creating-interfaces)
* [Diretiva ngIf](#ngif)
* [Trabalhando com CRUD](#working-with-api)

<hr>

<h3 id="icones">Icones</h3>

* [Delete](https://www.flaticon.com/br/icone-gratis/remover-do-carrinho_6815040)
* [Não concluído](https://www.flaticon.com/br/icone-gratis/cancelar_190406?term=cancel&page=1&position=5&origin=search&related_id=190406)
* [Concluído](https://www.flaticon.com/br/icone-gratis/verificado_169780?term=sucesso&page=1&position=3&origin=search&related_id=169780)

<hr>

<h3 id="criar-novo-projeto">Criar um Novo Projeto</h3>
<p>Para criar o projeto é extremamente simples, use o comando:
  
```
“ng new nome-do-app”
```

Após isso, perguntará primeiro se você quer que ele adicione o Angular Routing (não usaremos nesse projeto), depois irá perguntar qual o tipo de folha de estilos você quer usar (no exemplo foi utilizado SCSS), após selecionar o tipo de folha de estilos, é só esperar a criação do projeto terminar.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/3864e1d7-55bc-416a-bd52-787622d47425)

<hr>

<h3 id="get-started">Arquivos e Pastas</h3>
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

<h3 id="first-component">Criando o primeiro componente</h3>

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

<h3 id="ngmodel-and-forms">Usando ngModel e FormsModule:</h3>

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

<hr>

<h3 if="ngfor">Trabalhando com listas:</h3>

<p>Para trabalhar com listas é simples, mas para fazer da maneira correta criei um componente chamado de item-list e irei chamar no app.componente como feito com o header, e irei criar um array simples de texto no .ts do novo componente.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/2ba88afd-a52b-45ef-b1a2-9b17378a2dd1)
![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/05f25a06-6056-4802-93e4-19375530f919)

<p>E para ver no html é só usar a diretiva ngFor, essa diretiva cria cópias da tag até acabar o array, lembre-se para usar diretivas como ngFor tem que colocar o * antes para indicar para o compilador do Angular que isto é uma diretiva.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/86795fee-ed95-4a6a-9038-26c462330439)
![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/2f3d8935-5fbf-4dd8-9176-9f801b53a5dc)

<hr>

<h3 id="creating-interfaces">Criando interfaces:</h3>

<p>Uma interface é um tipo de objeto que você cria, por exemplo, o básico para uma to-do list é saber o que tem que ser feito e se já está feito ou não.</p>
<p>A interface é criada usando o comando “ng g interface nome-da-interface” no console</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/134101de-5df9-4a77-a1bc-769ae3c11d6e)

<p>Nesse exemplo foi usado como nome “core/models/item” pois assim ele criou inclusive as pastas dentro de apps como foi especificado no comando.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/99a2c073-dad9-446c-b77b-908888fd7bc1)

<p>Essa interface terá duas propriedades “title” que será do tipo string e terá o texto do item e “ready” que será um booleano que indica se o item já foi feito ou não, a interface irá ficar assim:</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/d4fdf5d4-2cc3-42bf-b1fc-1cb9ce8a1005)

<p>Agora vamos usar no componente de lista de itens.</p>
<p>Para isso temos que fazer algumas adaptações, primeiro vamos mudar nosso array para um array de objetos do tipo item dessa forma:</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/c6780839-9559-4e2c-b635-aa0cf4f2a932)

<p>Agora indicamos por meio do tipo “Item[]” que o array “itemList” será um array de “Item” por indicarmos depois do “:” o tipo “Item” e após o nome do tipo usar o “[]” para mostrar que é um array.</p>
<p>E agora vamos adaptar o html para continuar mostrando os objetos porém com todas as informações que temos agora, simples, irei criar um checkbox para indicar se o item foi concluído ou não e então chamar corretamente no html, chamando o item.propriedade.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/e3696865-8e5d-4aa2-907c-96d7a8ebc629)

<p>Inclusive podemos usar o ngModel com um booleano dessa forma em um checkbox para deixar ele marcado ou não e alterar na variável ao mesmo tempo.</p>

<hr>

<h3 id="ngif">Diretiva ngIf:</h3>
<p>Para continuar vou dar uma estilizada no projeto para deixar mais bonito, mas nada que interfira no funcionamento da lista.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/ef95dff3-a6c6-4366-94d3-40879fff1262)

<p>Mas mesmo estilizando o projeto, vemos que o checkbox não ficou muito legal com o contexto da página, como se não se encaixasse no layout.</p>
<p>Nesse caso, vamos colocar uns ícones mais bonitos.</p>
<p>Para isso vamos pegar os ícones e colocá-los em uma pasta chamada icons dentro de assets.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/8bcb9f80-b988-4bc9-af90-38bf0725e817)

<p>Vamos colocar as imagens no lugar do input agora</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/d8854d64-d6ff-4ffd-93e2-18d79b0e4115)

<p>E agora? Estamos com as duas imagens e sem saber qual tarefa foi concluída ou não.
Simples, vamos usar o ngIf, é uma diretiva do angular que esconde ou apresenta um conteúdo no html a partir de true ou false (podendo ser de uma variável ou até um método que retorna um booleano), antes de tudo, existem inúmera maneira de se fazer isso, essa é somente uma para demonstrar o funcionamento do ngIf.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/03a41ec8-b5a5-4320-9d7f-96037a3cc377)

<p>Ao deixarmos o código dessa forma, estamos dizendo para o angular o seguinte:
Caso a propriedade ready do item seja true, mostre o checked, caso seja false, mostre o unchecked.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/d8367c05-709e-4a7e-8bf4-bc9f882278a1)

<p>Agora vamos fazer essas imagens funcionarem como um botão.</p>
<p>Para isso vamos usar o (click) na tag para executar um método</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/eea31bf8-d577-4161-99d5-f21492c17b45)
![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/edcc9572-36f7-4c57-9712-0eb5d064ef40)

<p>Como vemos, além de chamar um método podemos enviar uma informação para a função, no caso o item da lista de itens, e a função altera esse valor para o contrário. (não irei entrar em detalhes de funcionamento de funções neste repositório)</p>

<hr>

<h3 id="working-with-api">Trabalhando com Crud:</h3>

<p>Para começar o CRUD precisamos de uma api, mas iremos usar uma api fake com json-server.</p>
<p>Isso, instale o json-server com o comando “npm i -g json-server”.</p>
<p>Após instalado o json-server, vamos criar uma pasta chamada json e criar um arquivo json de lista dentro dela.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/36dcc3d1-45ad-4d20-a2ac-3897a79518f0)

```
{
	"todo-list": [
    	{
        	"id": 1,
        	"title": "Comprar ovos",
        	"ready": false
    	},{
        	"id": 2,
        	"title": "Comprar Refrigerante",
        	"ready": false
    	},{
        	"id": 3,
        	"title": "Comprar Arroz",
        	"ready": false
    	},{
        	"id": 4,
        	"title": "Comprar Feijão",
        	"ready": false
    	},{
        	"id": 5,
        	"title": "Comprar Frango",
        	"ready": false
    	}
	]
}
```

<p>E então vamos com um novo terminal para a pasta json e rodamos o comando “json-server –watch nome-do-arquivo.json”.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/1dbd7f7d-b775-4916-a7cd-3e626dd0e1fd)

<p>agora temos 2 links de api:</p>

>http://localhost:3000 -> página principal do json-server, temos nela varias informações sobre como funciona o json-server e algumas coisas mais.
>http://localhost:3000/todo-list -> nela temos a nossa api fake que criamos com a lista de items que criamos no json, onde podemos usar todas as aplicações do CRUD (GET, PUT, POST, PATCH E DELETE)

<p>Agora dentro da pasta core, vamos uma pasta chamada services e criar um serviço com o comando “ng g s core/services/list/list”.</p>
<p>Para começar a usar o chamadas http precisamos primeiramente importar o “HttpClient Module” do arquivo “app.module.ts”</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/b8068a95-b324-453a-bd8b-7584fafbee65)

<p>Agora voltando ao service que criamos a pouco e importamos no constructor o “HttpClient” para conseguir fazer chamadas http dentro do serviço.</p>
<p>E vamos fazer uma chamada simples de GET para buscar todos os itens da lista.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/d5731267-a0e9-4aea-84a9-a81a9441da07)

<p>Para isso usamos o Observable, que permite que mensagens sejam trafegadas entre a aplicação.</p>
<p>Para aproveitar a oportunidade e mostrar mais algumas ferramentas do angular para passagem de informação entre componentes ( Input e Output) vamos chamar a função para buscar toda a lista no “app.component.ts”, inclusive vamos no model e acrescentar o id no modelo, pois vamos precisar no futuro e já deixamos o modelo correto para o uso da api.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/6af14133-8734-4510-a244-4aea719005a6)

<p>E para usar o serviço no app.component precisamos importar o serviço e chamar o método criado.</p>
<p>E ficou assim o meu app.component.ts</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/01fb5f0b-3a9b-4763-b5d9-4ed0f18da2e1)

<p>Para explicar um pouco melhor, comecei importando o serviço que criamos dentro do constructor para conseguir usar os métodos criados dentro dele.</p>
<p>Então criei um método chamado getAllListItens() para chamar o método que criamos no serviço, então indico o serviço, o método e o uso o subscribe para executar a função e esperar a resposta, dentro do subscribe temos essa forma onde, o “next” é executado no momento em que temos a resposta do método do serviço, o “complete” é executado após o next e o “error” caso de algum erro no método ele executa no lugar das outras chamadas para um melhor tratamento de erro.</p>
<p>Como usamos o console log e não mexemos ainda na lista de itens que é mostrada na tela vemos a informação assim no console:</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/e0ae6ee3-1886-4908-9a05-7608923612d3)

<p>Agora vamos refatorar um pouco nosso código e usar o dados do json-server e para isso vamos usar o Input()</p>
<p>Primeiramente vamos no item-list.component.ts e vamos apagar o conteúdo da variável itemList, e então logo acima vamos acrescentar o @Input() e importa-lo no componente</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/29690eb4-cb69-42ac-9159-6fcb1090d926)

<p>Apenas mantive o “=[]” para indicar que começara como um array vazio</p>
<p>E  agora no app.component vamos no html indicar que a informação que vamos fazer o input para o componente de lista.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/9a9d6ac5-28d0-432d-8c4a-a2e1dea5cf1b)

<p>Aqui indicamos que o itemList do app.component.ts irá fazer o input para o itemList do item-list.component.ts</p>
<p>Agora deve estar funcionando, como próximo passo, vamos atualizar a informação se a task está pronta ou não na api, vamos usar o output para fins de estudo.
mas para começar</p>
<p>Vamos lá para o nosso service, e vamos aproveitar para criar os métodos CRUD que faltam, PUT, POST e DELETE</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/51864261-0d8d-499c-a628-6b6f3d71c435)

<p>Como o POST cria um item no banco, e o PUT atualiza um item do banco, precisamos enviar um body no request, que consistem em um objeto do tipo Item que será enviado e como o PUT atualiza especificamente um item e o DELETE, apaga especificamente um item do banco, precisamos enviar o id para que nossa api saiba qual item deve modificar ou apagar.</p>

>OBS: Se voltar e ver no modelo que criei de Item, vemos que no id tem um “?” antes do “:”, isso indica que esse campo não é obrigatório, pois quando iremos enviar no body, não precisa necessariamente ter no objeto, mas quando recebemos e para usar na identificação do item na api (por exemplo com parâmetro na url), precisamos do id no objeto, já quando uso “!” antes dos “:” na variável, indica que obrigatoriamente a variável ou propriedade terá um valor.

<p>Agora vamos para o output, da um pouco mais de trabalho que o input, mas ainda assim, é bem tranquilo de fazer.</p>
<p>Para começar vamos criar no componente filho (item-list.component.ts), aliás como chamamos o item-list.component dentro do app.component tratamos como o app.component sendo o componente pai e o item-list.component como componente filho,
Para isso precisamos fazer o anotação @Output e fazer a sua importação e também tratamos a variável de Output como um EventEmitter do tipo Item para enviarmos o item completo, porém com o valor de ready atualizado.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/3a07c8c7-d703-4663-93a9-d1ed817ac90b)

<p>Inclusive utilizei a função usada anteriormente para alterar o valor de ready.</p>
<p>E vamos atualizar o template html para emitir esse evento.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/fcc3b0e7-82da-429f-89e7-14c99b8f3519)

<p>E para o componente pai (app.component.ts) foi desenvolvido esse método para realizar o update da informação, usando do subscribe novamente. e também, assim que foi realizado o PUT, a lista de itens é apagada e então recuperada novamente (apenas uma forma de atualizar as informações da página sem necessariamente atualizar a página toda)</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/33f89f20-f527-4234-af12-58b5bd6e2537)

<p>e o html fica assim, onde indicamos a variável que sera emitida no componente filho e então chamamos o método que será usado, lembrando que o “$event” é o valor que está sendo passado entre componentes pelo Output. E sim é possível usar mais de um input e output no mesmo componente.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/06d93d1e-3723-462f-8018-59177b80c00b)

<p>e para testar simplesmente abra o projeto no browser e clique no botão de update do item e veja se ele altera no json da api fake que criamos.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/2a6ab551-6f09-40a4-a651-801732b8efb1)

<p>Para o POST vamos fazer a mesma coisa, porém com um Output de string do header.component para o app.component e vamos definir o objeto item no próprio método e então fazer a chamada do serviço.</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/53dba9fc-ae8e-4cd8-87db-921d409114b8)
![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/3066d005-3268-482e-89e8-c8089d313d17)
![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/3fb4190a-4a9f-4099-9d86-7516fd7a23d9)
![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/849b0143-afde-49a5-8329-2f2b7f24918a)

<p>E para o delete, vamos criar um botão no item para chamar um output do id e então chamar o método de remover do serviço</p>

![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/4c163c2d-7ba4-4572-9a1d-72a697be16a3)
![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/fb2de59d-cc07-4900-8ba3-d83fdaa22723)
![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/c211355a-07d5-43de-b5a1-a25360ec5908)
![image](https://github.com/Lucas-S-Canno/Angular-Basics/assets/56321276/e5d8d2c3-7381-4162-987a-93739d4637b0)

<p>É sempre importante ir salvando e testando a cada passo completo, se possível sempre fazendo os commits para caso de algum problema seja possível ver quais foram as mudanças e fazer uma análise mais fácil, ou até voltar para um último ponto funcional.</p>
<p>E lembrando também que os logs que estamos colocando são somente para análise, um produto final não deve conter logs para o lado do cliente (lembrando que logs são diferentes de tratamentos de erros, esse devem sempre estar presentes).</p>

