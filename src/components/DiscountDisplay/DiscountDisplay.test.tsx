import { render, screen } from "@testing-library/react";

import DiscountDisplay from "./DiscountDisplay";

describe("PriceDisplay", () => {
  test("should render and format the price with the default currency", () => {
    render(<DiscountDisplay discount={15} value={100} message="Message" />);
    const expectedDiscount = screen.queryByText("15% discount on your order");
    const expectedDiscountAmount = screen.queryByText("100 SEK");
    const expectedMessage = screen.queryByText("Message");

    expect(expectedDiscount).toBeInTheDocument();
    expect(expectedDiscountAmount).toBeInTheDocument();
    expect(expectedMessage).toBeInTheDocument();
  });
});
