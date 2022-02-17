import { render, screen } from "@testing-library/react";

import PriceDisplay from "./PriceDisplay";

describe("PriceDisplay", () => {
  test("should render and format the price with the default currency", () => {
    render(<PriceDisplay price={1000} variant="body1" />);
    const expectedText = screen.queryByText("1 000 SEK");

    expect(expectedText).toBeInTheDocument();
  });

  test("should render and format the price with the given currency", () => {
    render(<PriceDisplay price={1000} currency="NOK" variant="body1" />);
    const expectedText = screen.queryByText("1 000 NOK");

    expect(expectedText).toBeInTheDocument();
  });
});
