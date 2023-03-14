import { StyleSheet } from "react-native";

import { DeviceService } from "../../../Services/DeviceService/DeviceService";
import { colors } from "../../../theme/Colors";
import { fonts, getFontStyle, size } from "../../../theme/Fonts";
import { LayoutDimensions } from "../../../theme/LayoutDimensions";

export const valuableCardStyles = StyleSheet.create({
  container: {
    borderRadius: 5,
    margin: LayoutDimensions.spacing8x,
    backgroundColor: colors.white,
    width: DeviceService.getScreenWidth() * 0.5,
  },
  image: {
    borderRadius: 5,
    height: DeviceService.getScreenWidth() * 0.5,
    width: DeviceService.getScreenWidth() * 0.5,
  },
  descriptionContainer: {
    padding: LayoutDimensions.spacing3x,
  },
  valuableDescription: {
    ...getFontStyle("regular", "subTitle"),
  },
  valuablePrice: {
    marginTop: LayoutDimensions.spacing8x,
    ...getFontStyle("regular", "content"),
  },
});
