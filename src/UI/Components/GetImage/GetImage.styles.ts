import { StyleSheet } from "react-native";

import { DeviceService } from "../../../Services/DeviceService/DeviceService";
import { colors } from "../../../Theme/Colors";
import { LayoutDimensions } from "../../../Theme/LayoutDimensions";

const IMAGE_DIMENSION_REFERENCE = DeviceService.getScreenWidth() * 0.15;
const IMAGE_WRAPPER = IMAGE_DIMENSION_REFERENCE * 2.5;

export const getImageStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: LayoutDimensions.spacing4x,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: IMAGE_WRAPPER * 0.5,
    borderStyle: "dashed",
    borderColor: colors.secondaryGrey,
    backgroundColor: colors.mainGrey,
    width: IMAGE_WRAPPER,
    height: IMAGE_WRAPPER,
  },
  image: {
    height: IMAGE_DIMENSION_REFERENCE,
    width: IMAGE_DIMENSION_REFERENCE,
  },
  selectedImage: {
    position: "absolute",
    height: IMAGE_WRAPPER,
    width: IMAGE_WRAPPER,
    borderRadius: IMAGE_WRAPPER * 0.5,
    opacity: 0.3,
  },
});
