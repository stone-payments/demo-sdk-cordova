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

- [Android](https://stone-pagamentos.gitbooks.io/sdk-android/)
- [iOS](https://github.com/stone-pagamentos/sdk-ios-v2)

## Plataformas Suportadas

- Android
- iOS

## Pré requisitos

- [Node](https://nodejs.org)
- [NPM](https://www.npmjs.com)
- [Cordova](https://cordova.apache.org/#getstarted)
- [Ionic](https://ionicframework.com)

## Configurações

1. Abra o Terminal e clone o repositório.
2. Dentro do repositório clonado, use o comando a seguir:

        $ npm install

    Com isso o diretório `node_modules` será criado dentro da estrutura do projeto.

3. Ainda dentro do projeto, teste se a demo foi criada com sucesso. Use o comando a seguir:

        $ ionic serve
    
    Este comando irá abrir a demo no browser e o diretório `www` será criado no projeto.

    > :warning: Note que algumas funcionalidades não irão funcionar corretamente. Isso ocorre pois esse projeto foi criado exclusivamente para dispositos mobile.

4. Com o diretório `www` criado, use o comando a seguir:

       $ ionic state restore
    
    Este comando irá restaurar o projeto ao seu estado padrão com base no arquivo `package.json`. Com isso alguns novos diretórios e arquivos serão criados.
 
    Estamos quase terminando, vamos para a última etapa. 

5. Agora vamos editar o arquivo `SplashScreen.java`. Esse arquivo encontra-se no seguinte caminho:

        plugins/cordova-plugin-splashscreen/src/android/SplashScreen.java
    
    Adicione o seguinte import: `import stone.application.StoneStart;`
    
    Ainda no mesmo arquivo, dentro do método `cordova.getActivity().runOnUiThread` que está na classe `showSplashScreen`, adicione a seguinte linha: `StoneStart.init(SplashScreen.this.cordova.getActivity());`.
    
    Assim, iremos garantir que toda vez que a demo seja iniciada, o StoneCode seja carregado.

    Pronto! Terminamos as configurações necessárias para iniciar a demo.

    > :warning: Para configurar no iOS, siga as instruções para instalação da SDK neste [link](https://github.com/stone-pagamentos/sdk-ios-v2)

## Instalação

1. Conecte um dispositivo mobile ao computador e use o comando a seguir:

        $ ionic run
        
    Aguarde até que todo o carregamento seja concluido e a demo seja executada no dispositivo.
    
    Pronto! Agora a demo está instalada no dispositivo mobile e já pode ser testada.
    
    > :warning: Para dispositos Android versão 6+ será necessário habilitar as permissões manualmente.
