import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { getValuablesAction } from "../../../../Stores/Inventory/InventoryActions";
import { useInventoryStore } from "../../../../Stores/Inventory/InventoryStore";
import { RootTabScreenProps } from "../../../../navigation/types";
import { colors } from "../../../../theme/Colors";
import { Title } from "../../../Components/Title/Title";
import { ValuableCard } from "../../../Components/ValuableCard/ValuableCard";

export default function InventoryScreen({
  navigation,
  route,
}: RootTabScreenProps<"Inventory">) {
  useEffect(() => {
    getValuables();
  }, []);

  const { valuables, getValuables } = useInventoryStore((s) => ({
    valuables: s.valuables,
    getValuables: s.getValuables,
  }));
  const handleAddButtonPress = () => navigation.navigate("AddItem");

  return (
    <View style={styles.container}>
      <Title onButtonPress={handleAddButtonPress}>route.name</Title>
      {valuables?.map(({ description, photo, purchasePrice }, index) => (
        <ValuableCard
          key={index}
          description={description}
          price={purchasePrice}
          photoURL={photo}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.background,
  },
});
