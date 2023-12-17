import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/configureStore";

test("renders App Component", () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(container).not.toBeEmptyDOMElement();
});
