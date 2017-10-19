# 新後台 - Beaker **BETA**
此專案代號：Beaker。<br>
目的重構舊有admin架構。

### 重點更新清單
1. React v16
2. React Router v4
3. Redux
4. Redux-saga
5. Code Splitting
6. Jest
7. Flow
8. Reselect
9. Cypress

# Usage
此專案使用**Create React App**，可以使用以下script開始。
### `yarn` or `npm install`
Package install.
### `yarn start` or `npm start`
Runs the App in the Development Mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
### `yarn test` or `npm test`
Launches the Test Runner in the Watch Mode.<br>
Create React App uses Jest as its test runner. 
### `yarn cypress` or `npm run cypress`
Launches the End-to-end Testing<br>
In this project, we use Cypress for end-to-end testing.
### `yarn build` or `npm run build`
Builds the App for Production to the `build` folder



# Folder Structure

# New Feature
## React-router v4
[REACT ROUTER TRAINING](https://reacttraining.com/react-router/web/guides/philosophy)
## Redux
## Redux-saga
**!Note: 建議先了解redux-thunk, generator function**<br>
### 流程
```js
送出 API request =>
畫面變為loading 畫面 =>
if (response success) {
  完成成功後的事情
} else {
  完成失敗後的事情
  顯示錯誤訊訊息
}
```
## Code Splitting
[Code splitting](https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html) 可以解決一開始載入js檔案時，由於bundle檔案包含整個應用程式所需的js，造成app停留在空白畫面的時間太長。<br>

例如：當一開始進入應用程式時，會先進入**Login**頁面，所需的js其實只有**Login**頁面的元件，並不需要載入其他頁面的js。透過code splitting我們可以切割bundle變成數個chunk，當使用者登入後，再載入所需的chunk或是在login頁面預載其他頁面的chunk，大大減少空白畫面的時間以提升使用者體驗。<br>

ES6的[dynamic `import()`](http://2ality.com/2017/01/import-operator.html#loading-code-on-demand)可以讓目很簡單處理code-splitting<br>
可參考：[dynamic import() example](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting)

此專案採用使用[react-loadble](https://github.com/thejameskyle/react-loadable)去達成Route Splitting，好處是在載入chunk時，幫助我們處理loading畫面以及處理載入失敗時的錯誤狀況，另外react-loadble可以提供**preload**方法，幫助我們在首頁時，能夠預載下其他頁面的chunk.js<br>

### Example
```js
import Loadable from 'react-loadable';
import Loading from './my-loading-component';

const LoadableComponent = Loadable({
  loader: () => import('./my-component'),
  loading: Loading,
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}
```

## Unit Test
Using Jest<br>
Testing Actions, Reducers, Redux-saga

## End-to-end Test
Use [Cypress.io](https://www.cypress.io/)
