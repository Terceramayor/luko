import * as React from "react";
import { View } from "react-native";

import { RootTabScreenProps } from "../../../navigation/types";
import { colors } from "../../../theme/Colors";
import { Title } from "../../Components/Title/Title";

export const FallbackScreen = ({ route }: RootTabScreenProps<"Inventory">) => {
  return (
    <View
      style={{
        backgroundColor: colors.background,
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
      <Title>{route?.name}</Title>
    </View>
  );
};
