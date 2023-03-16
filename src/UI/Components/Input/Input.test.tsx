import { toHaveStyle } from "@testing-library/jest-native";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import React from "react";

import { Input } from "./Input";
import { inputStyles } from "./input.styles";

const fakeValidator = jest.fn(
  (paramToValidate: string) =>
    /^[a-zA-Z\s]*$/.test(paramToValidate) && paramToValidate.length > 0
);

const TEST_ID = "input_test_id";
const TEXT_INPUT = "a text input";

const defaultProps = {
  tag: "aTag",
  unit: "aUnit",
  value: { aGoodOne: "aValue", anUglyOne: "254afdsq4" },
  setValue: jest.fn(),
};

describe("Given the input component", () => {
  expect.extend({ toHaveStyle });
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("When a valid value is send as prop", () => {
    it("The text input style should be set to the success one", async () => {
      const { getByTestId } = render(
        <Input
          tag={defaultProps.tag}
          value={defaultProps.value.aGoodOne}
          setValue={defaultProps.setValue}
          validation={fakeValidator}
          unit={defaultProps.unit}
        />
      );

      const textInput = await waitFor(() => getByTestId(TEST_ID));
      fireEvent(textInput, "blur");
      expect(textInput).toHaveStyle(inputStyles.validatedInput);
    });
  });
  describe("When an invalid value is send as prop", () => {
    it("The text input style should be set to the failure one", async () => {
      const { getByTestId } = render(
        <Input
          tag={defaultProps.tag}
          value={defaultProps.value.anUglyOne}
          setValue={defaultProps.setValue}
          validation={fakeValidator}
          unit={defaultProps.unit}
        />
      );

      const textInput = await waitFor(() => getByTestId(TEST_ID));
      fireEvent(textInput, "blur");
      expect(textInput).toHaveStyle(inputStyles.errorInput);
    });
  });
  describe("When a random value is send as prop and the validation is not send as prop", () => {
    it("The text input style should be set to the default one", async () => {
      const { getByTestId } = render(
        <Input
          tag={defaultProps.tag}
          value={defaultProps.value.anUglyOne}
          setValue={defaultProps.setValue}
          unit={defaultProps.unit}
        />
      );

      const textInput = await waitFor(() => getByTestId(TEST_ID));
      fireEvent(textInput, "blur");
      expect(textInput).toHaveStyle(inputStyles.initialInput);
    });
  });
  describe("When a value is typed in the input field", () => {
    it("The text input style should be set to the default one", async () => {
      const { getByTestId } = render(
        <Input
          tag={defaultProps.tag}
          value={defaultProps.value.anUglyOne}
          setValue={defaultProps.setValue}
          unit={defaultProps.unit}
        />
      );
      const textInput = await waitFor(() => getByTestId(TEST_ID));
      fireEvent.changeText(textInput, TEXT_INPUT);
      expect(defaultProps.setValue).toHaveBeenCalled();
    });
  });
  describe("When input is focused", () => {
    it("The text input style should be set to the focused one", async () => {
      const { getByTestId } = render(
        <Input
          tag={defaultProps.tag}
          value={defaultProps.value.anUglyOne}
          setValue={defaultProps.setValue}
          unit={defaultProps.unit}
        />
      );
      const textInput = await waitFor(() => getByTestId(TEST_ID));
      fireEvent(textInput, "focus");
      expect(textInput).toHaveStyle(inputStyles.onFocus);
    });
  });
});
