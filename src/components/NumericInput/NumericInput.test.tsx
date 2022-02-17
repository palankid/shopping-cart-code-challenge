import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import NumericInput from "./NumericInput";

describe("NumericInput", () => {
  describe("decrease button click events", () => {
    const handleInput = jest.fn();

    test("a click on the decreae button should not have any effect if it's disabled", () => {
      const { getByLabelText, getByDisplayValue } = render(
        <NumericInput value={1} min={1} max={10} onInput={handleInput} />
      );

      fireEvent.click(getByLabelText("Decrease Value"));

      expect(getByLabelText("Decrease Value")).toBeDisabled();
      expect(getByDisplayValue("1")).toBeInTheDocument();
    });

    test("a click on the decrease button should decrease the input value", () => {
      const { getByLabelText, getByDisplayValue } = render(
        <NumericInput value={2} min={1} max={10} onInput={handleInput} />
      );

      fireEvent.click(getByLabelText("Decrease Value"));

      expect(getByDisplayValue("1")).toBeInTheDocument();
    });
  });

  describe("increase button click events", () => {
    const handleInput = jest.fn();

    test("a click on the increase button should not have any effect if it's disabled", () => {
      const { getByLabelText, getByDisplayValue } = render(
        <NumericInput value={10} min={1} max={10} onInput={handleInput} />
      );

      fireEvent.click(getByLabelText("Increase Value"));

      expect(getByLabelText("Increase Value")).toBeDisabled();
      expect(getByDisplayValue("10")).toBeInTheDocument();
    });

    test("a click on the increase button should increase the input value", () => {
      const { getByLabelText, getByDisplayValue } = render(
        <NumericInput value={2} min={1} max={10} onInput={handleInput} />
      );

      fireEvent.click(getByLabelText("Increase Value"));

      expect(getByDisplayValue("3")).toBeInTheDocument();
    });
  });

  describe("input events", () => {
    test("should update the input with the provided value if it's within range", () => {
      const handleChange = jest.fn();
      const { getByLabelText } = render(
        <NumericInput value={2} min={1} max={10} onInput={handleChange} />
      );
      const input = getByLabelText("Numeric Input");

      userEvent.type(input, "5", {
        initialSelectionStart: 0,
        initialSelectionEnd: 1,
      });

      expect(handleChange).toHaveBeenCalledWith(5);
    });

    test("should update the input with the min value if the provided value is below range", () => {
      const handleChange = jest.fn();
      const { getByLabelText } = render(
        <NumericInput value={2} min={1} max={10} onInput={handleChange} />
      );
      const input = getByLabelText("Numeric Input");

      userEvent.type(input, "0", {
        initialSelectionStart: 0,
        initialSelectionEnd: 1,
      });

      expect(handleChange).toHaveBeenCalledWith(1);
    });

    test("should update the input with the max value if the provided value is above range", () => {
      const handleChange = jest.fn();
      const { getByLabelText } = render(
        <NumericInput value={2} min={1} max={7} onInput={handleChange} />
      );
      const input = getByLabelText("Numeric Input");

      userEvent.type(input, "9", {
        initialSelectionStart: 0,
        initialSelectionEnd: 1,
      });

      expect(handleChange).toHaveBeenCalledWith(7);
    });
  });
});
