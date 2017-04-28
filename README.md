# Demo Cordova/Ionic
Esse repositório contém uma demo de como implementar as funcionalidades da SDK no Cordova/Ionic.

## Documentação da SDK

[GitBook](https://stone-pagamentos.gitbooks.io/sdk-android/)

## Plataformas Suportadas

- Android
- iOS (Em Breve)

## Pré requisitos

- [Node](https://nodejs.org)
- [NPM](https://www.npmjs.com)
- [Cordova](https://cordova.apache.org/#getstarted)
- [Ionic](https://ionicframework.com)

## Instalação

1. Abra o Terminal e clone o repositório.
2. Dentro do repositório clonado, use o comando a seguir:

    $ npm install

    Com isso o diretório `node_modules` será criado dentro da estrutura do projeto.

3. Ainda dentro do projeto, teste se a demo foi criado com sucesso. Use o comando a seguir:

    $ ionic serve
    
    Este comando irá abrir a demo no browser e o diretório `www` será criado no projeto.

    ![alt text](https://assets-cdn.github.com/images/icons/emoji/unicode/26a0.png "Alert Image") Note que algumas funcionalidades não irão funcionar corretamente. Isso ocorre pois esse projeto foi criado exclusivamente para dispositos mobile.

4. Com o diretório `www` criado, use o comando a seguir:

    $ ionic state restore
    
    Este comando irá restaurar o projeto ao seu estado padrão com base no arquivo `package.json`. Com isso alguns novos diretórios e arquivos serão criados.
 
Pronto! Agora a demo está instalado e configurado.
