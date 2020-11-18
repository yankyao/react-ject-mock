## 修改流程

1. 创建项目：
```js
npx create-react-app xxx
```
2. 要使用eject，[Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
```js
// 需要先push
// 添加commit校验，修改package.json
yarn add global commitizen
commitizen init cz-conventional-changelog --save --save-exact
yarn add -D validate-commit-msg husky
```
