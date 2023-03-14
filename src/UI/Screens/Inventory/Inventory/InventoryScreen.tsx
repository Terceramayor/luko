import { StyleSheet, View } from "react-native";

import { RootTabScreenProps } from "../../../../navigation/types";
import { colors } from "../../../../theme/Colors";
import { Title } from "../../../Components/Title/Title";
import { ValuableCard } from "../../../Components/ValuableCard/ValuableCard";

export default function InventoryScreen({
  navigation,
  route,
}: RootTabScreenProps<"Inventory">) {
  const handleAddButtonPress = () => navigation.navigate("AddItem");

  return (
    <View style={styles.container}>
      <Title onButtonPress={handleAddButtonPress}>route.name</Title>
      <ValuableCard />
      <ValuableCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
});
