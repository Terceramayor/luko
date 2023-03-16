import { StyleSheet } from "react-native";

import { colors } from "../../../Theme/Colors";
import { getFontStyle } from "../../../Theme/Fonts";
import { LayoutDimensions } from "../../../Theme/LayoutDimensions";

export const inputStyles = StyleSheet.create({
  tagText: {
    ...getFontStyle("bold", "subTitle"),
    marginBottom: LayoutDimensions.spacing3x,
  },
  input: {
    backgroundColor: colors.lightGrey,
    padding: LayoutDimensions.spacing2x,
    borderRadius: LayoutDimensions.spacing2x,
    borderColor: colors.secondaryGrey,
    borderWidth: 1,
  },
  inputWrapper: { position: "relative" },
  unitContainer: {
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    marginRight: LayoutDimensions.spacing3x,
  },
  errorInput: {
    borderColor: colors.failureDark,
    backgroundColor: colors.failureLight,
  },
  validatedInput: {
    borderColor: colors.successDark,
    backgroundColor: colors.successLight,
  },
  initialInput: {
    borderColor: colors.secondaryGrey,
    backgroundColor: colors.lightGrey,
  },
  onFocus: {
    shadowColor: colors.mainBlue,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 20,
  },
});
