import { render } from "@testing-library/react";
import { Info } from "../info/info";

describe("Given Info component", () => {
  describe("When it is render", () => {
    test("Then it should info in display", () => {
      render(<Info />);
      expect(Info).toHaveBeenCalled();
    });
  });
});
