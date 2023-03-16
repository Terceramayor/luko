import { Dimensions } from "react-native";

export class DeviceService {
  public static getScreenWidth(): number {
    return Dimensions.get("window").width;
  }
  public static getScreenHeight(): number {
    return Dimensions.get("window").height;
  }
}
