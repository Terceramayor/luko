import { StyleSheet } from "react-native";

import { DeviceService } from "../../../Services/DeviceService/DeviceService";
import { colors } from "../../../theme/Colors";
import { fonts, getFontStyle, size } from "../../../theme/Fonts";
import { LayoutDimensions } from "../../../theme/LayoutDimensions";

const CARD_WIDTH = DeviceService.getScreenWidth() * 0.4;

export const valuableCardStyles = StyleSheet.create({
  container: {
    borderRadius: 5,
    margin: LayoutDimensions.spacing8x,
    backgroundColor: colors.white,
    width: CARD_WIDTH,
  },
  image: {
    borderRadius: 5,
    height: CARD_WIDTH,
    width: CARD_WIDTH,
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
