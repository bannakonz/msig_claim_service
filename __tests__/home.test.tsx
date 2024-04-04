import Home from "@/pages/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("[RENDER] Home Page", () => {
  it("should render", () => {
    render(<Home />);

    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });
});
