import { StyleSheet } from "react-native";

import { colors } from "../../../theme/Colors";
import { getFontStyle } from "../../../theme/Fonts";
import { LayoutDimensions } from "../../../theme/LayoutDimensions";

export const inputStyles = StyleSheet.create({
  container: {},
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
});
