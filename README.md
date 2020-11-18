## 修改流程

1. 创建项目：
```js
npx create-react-app xxx
```
2. 使用eject，[Commit message 和 Change log 编写指南](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)
```js
// 需要先push
// 添加commit校验，修改package.json
yarn add global commitizen
commitizen init cz-conventional-changelog --save --save-exact
yarn add -D validate-commit-msg husky
// eject
yarn eject
```

3. 代码校验及格式化

```js
yarn add lint-staged eslint-config-prettier eslint-plugin-prettier prettier -D
```
> 添加.eslintrc.js
> 配置pre-commit校验
> 配置lint

4. 打包分析


```js
yarn add source-map-explorer
```
> 使用异步模块；
```js
/* 写法一 */
handleClick = async () => {
    /* 异步模块 */
    const asyncData = await import("./componnets/AsyncBlock.js");
    const AsyncBlock = () => {
      return (
        <div>
          <asyncData.default />
        </div>
      );
    };
    this.setState({ asyncBlock: AsyncBlock() });
};
/* 写法二，使用suspense/lazy */
const LazyBlock = lazy(() => import("./componnets/LazyBlock"));

<Suspense fallback={<div>Loading...</div>}>
  <LazyBlock />
</Suspense>
```

5. 切换到流行的Ts

```ts
yarn add typescript @types/node @types/react @types/react-dom @types/jest @babel/preset-typescript -D
```
添加tsconfig.json，做相应配置


6. 设置环境变量
根据不同环境创建.env文件
在项目中可以访问process.env.[vars]

7. jest测试

