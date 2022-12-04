# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Controlled and Uncontrolled Components

**Uncontrolled Components:**  Componentes não controlados, são componentes que não são controlados pelo estado do React e estes são renderizados pela **[DOM](https://www.geeksforgeeks.org/dom-document-object-model/)** (Document Object Model). Assim, para acessar qualquer valor que foi inserido, nós precisamos da ajuda dos refs(referências). Por exemplo, se quisermos inserir um valor como input, este não pode ser controlado, pois depende do navegador. Este é um caso de exemplo de um componente não controlado.

**Controlled Components:** No React, Componentes Controlados são aqueles que em cada dados do formulário, eles são handerizados pelo estado do componente. Este estado pega o valor atual através das propriedades e faz a mudança através de callbacks como; onClick, onChange, etc. Um componente pai gerencia seu próprio estado e passa os novos valores como props para o componentes controlados.

**Controlled Components Example:** 
Estamos criando um formulário que contém um input, uma label e um button de submit. Criamos uma função de submit e passamos no onSubmit, cada vez que clicar nesse button ele vai mostrar o nome que foi digitado no input mostrado no alert do navegador. Estamos criando um estado chamado name e usando o hook useState para armazenar esse valor. Ao digitar no input ficamos ouvindo esse valor ser mudado e guardamos ele dentro do nosso estado chamado name. Há uma outra função no onSubmit que é chamada assim que clicarmos no button do submit do form, essa função envia o valor que está guardado dentro do nosso estado name. Este é mostrado no alert do navegador.
