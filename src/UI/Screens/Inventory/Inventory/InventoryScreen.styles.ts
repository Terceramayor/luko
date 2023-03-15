import { StyleSheet } from "react-native";

import { DeviceService } from "../../../../Services/DeviceService/DeviceService";
import { colors } from "../../../../theme/Colors";
import { LayoutDimensions } from "../../../../theme/LayoutDimensions";

export const inventoryScreenStyles = StyleSheet.create({
  container: {
    marginHorizontal: LayoutDimensions.spacing6x,
  },
  listInnerContainer: {
    marginTop: LayoutDimensions.spacing6x,
    display: "flex",
  },
  listColumn: {
    justifyContent: "space-between",
    marginBottom: LayoutDimensions.spacing6x,
  },
});
