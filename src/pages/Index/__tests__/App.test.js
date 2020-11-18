import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import App from "../App";

/* 测试渲染 */
test("renders Click Me Text", () => {
  render(<App />);
  const linkElement = screen.getByText(/ClickBtn/i);
  expect(linkElement).toBeInTheDocument();
});

/* 交互测试 */

test("click Click Me btn", () => {
  render(<App />);
  fireEvent.click(screen.getByText(/ClickBtn/i));
  setTimeout(() => {
    expect(screen.getByText("Clicked get AsyncBlock")).toBeInTheDocument();
  }, 200);
});
