import * as React from "react";
import { View } from "react-native";

import { colors } from "../../../Theme/Colors";
import { RootTabScreenProps } from "../../../navigation/types";
import { Title } from "../../Components/Title/Title";

export const FallbackScreen = ({ route }: RootTabScreenProps<"Inventory">) => {
  return (
    <View
      style={{
        backgroundColor: colors.background,
        flex: 1,
      }}
    >
      <Title>{route?.name}</Title>
    </View>
  );
};
