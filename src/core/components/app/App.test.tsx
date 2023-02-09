import { render } from "@testing-library/react";
import App from "../app/App";

describe("Given App component", () => {
  describe("When it is render", () => {
    test("Then it should info in display", () => {
      render(<App />);
      expect(App).toHaveBeenCalled();
    });
  });
});
