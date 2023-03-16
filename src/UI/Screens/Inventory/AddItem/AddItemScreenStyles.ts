import { StyleSheet } from "react-native";

import { colors } from "../../../../Theme/Colors";
import { LayoutDimensions } from "../../../../Theme/LayoutDimensions";

export const addItemScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.background,
    paddingTop: 10,
  },
  buttonsContainer: {
    width: "100%",
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  divider: {
    height: LayoutDimensions.spacing5x,
  },
});
