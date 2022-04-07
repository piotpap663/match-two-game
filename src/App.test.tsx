import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";
import { act } from "react-dom/test-utils";

test("renders menu with links", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByTestId("menu")).toBeInTheDocument();
  expect(screen.getByTestId("menu-home")).toBeInTheDocument();
  expect(screen.getByTestId("menu-about")).toBeInTheDocument();
});

test("renders start game component with links", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByTestId("startgame")).toBeInTheDocument();
});

test("redirects to about page", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  act(() => {
    screen.getByTestId("menu-about").click();
  });
  expect(screen.queryByTestId("startgame")).not.toBeInTheDocument();
  expect(screen.queryByTestId("about")).toBeInTheDocument();
});
