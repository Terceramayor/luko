import { StyleSheet } from "react-native";

import { DeviceService } from "../../../../Services/DeviceService/DeviceService";
import { colors } from "../../../../theme/Colors";
import { LayoutDimensions } from "../../../../theme/LayoutDimensions";

export const inventoryScreenStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  listInnerContainer: {
    marginTop: LayoutDimensions.spacing6x,
    display: "flex",
  },
  listColumn: {
    justifyContent: "space-around",
    marginBottom: LayoutDimensions.spacing6x,
  },
});
