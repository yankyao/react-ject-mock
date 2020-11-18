import React, { Suspense, lazy } from "react";
import "./App.css";

const LazyBlock = lazy(() => import("./componnets/LazyBlock"));

class Index extends React.Component {
  state = {
    asyncBlock: null,
  };
  handleClick = async () => {
    /* 异步模块 */
    const asyncData = await import("./componnets/AsyncBlock");
    const AsyncBlock = () => {
      return (
        <div>
          <asyncData.default />
        </div>
      );
    };
    this.setState({ asyncBlock: AsyncBlock() });
  };
  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>ClickBtn</button>
        {this.state.asyncBlock}
        <Suspense fallback={<div>Loading...</div>}>
          <LazyBlock />
        </Suspense>
      </div>
    );
  }
}

export default Index;
