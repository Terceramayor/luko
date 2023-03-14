import { StyleSheet, View } from "react-native";

import { addItemScreenStyles } from "./AddItemScreenStyles";
import { RootTabScreenProps } from "../../../../navigation/types";
import Button from "../../../Components/Button/Button";

const { container, buttonsContainer } = addItemScreenStyles;

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<"AddItemScreen">) {
  return (
    <View style={container}>
      <View style={buttonsContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Add" disabled onPress={() => undefined} />
      </View>
    </View>
  );
}
