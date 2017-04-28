---
title: Stone Demo SDK Cordova
description: Demonstration how to use Stone Mobile SDK in Cordova Plugin.
---
<!---    
#    license: Copyright (c) 2017 Stone Pagamentos
#    
#             Permission is hereby granted, free of charge, to any person obtaining a copy
#             of this software and associated documentation files (the "Software"), to deal
#             in the Software without restriction, including without limitation the rights
#             to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
#             copies of the Software, and to permit persons to whom the Software is
#             furnished to do so, subject to the following conditions:
#    
#             The above copyright notice and this permission notice shall be included in all
#             copies or substantial portions of the Software.
#    
#             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
#             IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
#             FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
#             AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
#             LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
#             OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
#             SOFTWARE.
-->

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

    :warning: Note que algumas funcionalidades não irão funcionar corretamente. Isso ocorre pois esse projeto foi criado exclusivamente para dispositos mobile.

4. Com o diretório `www` criado, use o comando a seguir:

    $ ionic state restore
    
    Este comando irá restaurar o projeto ao seu estado padrão com base no arquivo `package.json`. Com isso alguns novos diretórios e arquivos serão criados.
 
Pronto! Agora a demo está instalado e configurado.
