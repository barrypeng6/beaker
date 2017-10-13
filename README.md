# meepShop 新後台 - Beaker **BETA**
此專案代號：Beaker。<br>
目的重構舊有admin架構，升級react版本至16，優化項目如下。

### 重點更新清單
1. react v16
2. react-router v4
3. redux
4. redux-saga
5. code splitting
6. 

# Usage
In this project, you can use with:
### `yarn` or `npm install`
Package install.
### `yarn start` or `npm start`
Runs the App in the Development Mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
### `yarn test` or `npm test`
Launches the Test Runner in the Watch Mode.<br>
Create React App uses Jest as its test runner. 
### `yarn build` or `npm run build`
Builds the App for Production to the `build` folder



# Folder Structure

# New Feature
## React-router v4
## Redux
## Redux-saga
**!Note: 建議先了解redux-thunk, generator function**<br>
### Flow
```js
送出 API request =>
畫面變為loading 畫面 =>
if (response成功) {
  完成成功後的事情
} else {
  完成失敗後的事情
  顯示錯誤訊訊息
}
```
## Code Splitting
[Code splitting](https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html) 可以解決一開始載入bundle.js檔案時，由於bundle檔案包含整個應用程式所需的js，造成app停留在空白畫面的時間太長。<br>

例如：當一開始進入應用程式時，會先進入Login頁面，所需的js其實只有login頁面的元件，並不需要載入其他頁面的js。透過code splitting我們可以切割bundle變成數個chunk，當使用者登入後，再載入所需的chunk或是在login頁面預載其他頁面的chunk，大大減少空白畫面的時間以提升使用者體驗。<br>

ES6的[dynamic `import()`](http://2ality.com/2017/01/import-operator.html#loading-code-on-demand)可以讓目很簡單處理code-splitting<br>
可參考：[dynamic import() example](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting)


此專案採用使用[react-loadble](https://github.com/thejameskyle/react-loadable)去做Route Splitting，好處是在載入chunk時，幫助我們處理loading畫面以及處理載入失敗時的錯誤狀況，另外react-loadble可以提供preload方法，幫助我們在首頁時，能夠預載下其他頁面的chunk.js<br>

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

## Wrinting Test
Using Jest<br>
Testing Actions, Reducers, Redux-saga
