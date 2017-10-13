# meepShop 新後台 - Beaker **BETA**
此專案代號：Beaker。<br>
目的重構舊有admin架構，升級react版本至16，優化項目如下。

### 重點更新
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
```
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
**route splitting**
## Wrinting Test
Using Jest<br>
Testing Actions, Reducers, Redux-saga
