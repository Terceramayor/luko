import { useCallback, useEffect, useMemo } from "react";
import { StyleSheet, View, FlatList, ListRenderItem } from "react-native";

import { inventoryScreenStyles } from "./InventoryScreen.styles";
import { Valuable } from "../../../../Models/Inventory/Domain/Valuable";
import { useInventoryStore } from "../../../../Stores/Inventory/InventoryStore";
import { RootTabScreenProps } from "../../../../navigation/types";
import { colors } from "../../../../theme/Colors";
import { Title } from "../../../Components/Title/Title";
import { ValuableCard } from "../../../Components/ValuableCard/ValuableCard";

const { container, listInnerContainer, listColumn } = inventoryScreenStyles;

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

  const renderValuableCard: ListRenderItem<Valuable> = useCallback(
    ({ index, item: { description, purchasePrice, photo, name } }) => {
      return (
        <ValuableCard
          name={name}
          key={index}
          description={description}
          price={purchasePrice}
          photoURL={photo}
        />
      );
    },
    []
  );

  return (
    <View style={container}>
      <Title onButtonPress={handleAddButtonPress}>route.name</Title>
      <FlatList
        columnWrapperStyle={listColumn}
        contentContainerStyle={listInnerContainer}
        renderItem={renderValuableCard}
        data={valuables}
        numColumns={2}
      />
    </View>
  );
}
