import { toHaveStyle } from "@testing-library/jest-native";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import React from "react";

import { Input } from "./Input";
import { inputStyles } from "./input.styles";
import { colors } from "../../../theme/Colors";

const fakeValidator = jest.fn((paramToValidate: string) =>
  /^[a-zA-Z\s]*$/.test(paramToValidate)
);

const initialStyle = {
  ...inputStyles.input,
  borderColor: colors.secondaryGrey,
  backgroundColor: colors.lightGrey,
};
const successStyle = {
  ...inputStyles.input,
  borderColor: colors.successDark,
  backgroundColor: colors.successLight,
};
const failureStyle = {
  ...inputStyles.input,
  borderColor: colors.failureDark,
  backgroundColor: colors.failureLight,
};

const TEST_ID = "input_test_id";
const TEXT_INPUT = "a text input";

const defaultProps = {
  tag: "aTag",
  unit: "aUnit",
  value: { aGoodOne: "aValue", anUglyOne: "254afdsq4" },
  setValue: () => {},
};

describe("Given the input component", () => {
  expect.extend({ toHaveStyle });
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("When introduced a valid input", () => {
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
      fireEvent.changeText(textInput, TEXT_INPUT);
      fireEvent(textInput, "blur");
      expect(textInput).toHaveStyle(successStyle);
    });
  });
  describe("When introduced an invalid input", () => {
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
      fireEvent.changeText(textInput, TEXT_INPUT);
      fireEvent(textInput, "blur");
      expect(textInput).toHaveStyle(failureStyle);
    });
  });
  describe("When introduced a random input when validation is not send as prop", () => {
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
      fireEvent(textInput, "blur");
      expect(textInput).toHaveStyle(initialStyle);
    });
  });
});
