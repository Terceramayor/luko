import { StyleSheet } from "react-native";

import { DeviceService } from "../../../Services/DeviceService/DeviceService";
import { colors } from "../../../theme/Colors";
import { fonts, getFontStyle, size } from "../../../theme/Fonts";
import { LayoutDimensions } from "../../../theme/LayoutDimensions";

const CARD_WIDTH =
  (DeviceService.getScreenWidth() - 3 * LayoutDimensions.spacing6x) * 0.5;

export const valuableCardStyles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: colors.white,
    width: CARD_WIDTH,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    elevation: 3,
  },
  image: {
    borderRadius: 5,
    height: CARD_WIDTH,
    width: CARD_WIDTH,
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: LayoutDimensions.spacing3x,
  },
  valuableName: {
    marginBottom: LayoutDimensions.spacing,
    ...getFontStyle("regular", "title"),
  },
  valuableDescription: {
    ...getFontStyle("regular", "subTitle"),
  },
  valuablePrice: {
    marginTop: LayoutDimensions.spacing8x,
    ...getFontStyle("regular", "content"),
  },
  removeContainer: {
    position: "absolute",
    right: 0,
    margin: LayoutDimensions.spacing,
    height: CARD_WIDTH * 0.25,
    width: CARD_WIDTH * 0.25,
    borderRadius: CARD_WIDTH * 0.25 * 0.5,
  },
  removeIcon: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.75,
    height: CARD_WIDTH * 0.2,
    width: CARD_WIDTH * 0.2,
  },
});
