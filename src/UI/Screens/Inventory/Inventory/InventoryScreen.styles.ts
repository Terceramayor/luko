import { StyleSheet } from "react-native";

import { LayoutDimensions } from "../../../../Theme/LayoutDimensions";

export const inventoryScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listInnerContainer: {
    paddingHorizontal: LayoutDimensions.spacing6x,

    marginTop: LayoutDimensions.spacing6x,
    display: "flex",
  },
  listColumn: {
    justifyContent: "space-between",
    marginBottom: LayoutDimensions.spacing6x,
  },
});
