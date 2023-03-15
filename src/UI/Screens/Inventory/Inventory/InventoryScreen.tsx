import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { StyleSheet, View, FlatList, ListRenderItem } from "react-native";

import { inventoryScreenStyles } from "./InventoryScreen.styles";
import { Valuable } from "../../../../Models/Inventory/Domain/Valuable";
import { DeviceService } from "../../../../Services/DeviceService/DeviceService";
import { useInventoryStore } from "../../../../Stores/Inventory/InventoryStore";
import { RootTabScreenProps } from "../../../../navigation/types";
import { Title } from "../../../Components/Title/Title";
import { ValuableCard } from "../../../Components/ValuableCard/ValuableCard";

const { container, listInnerContainer, listColumn } = inventoryScreenStyles;
const CARD_WIDTH = DeviceService.getScreenWidth() * 0.4;

export default function InventoryScreen({
  navigation,
  route,
}: RootTabScreenProps<"Inventory">) {
  useEffect(() => {
    getValuables();
  }, []);

  const { valuables, getValuables } = useInventoryStore((s) => ({
    valuables: s.valuables,
    getValuables: s.getValuablesAction,
    removeValuable: s.removeValuableAction,
  }));
  const handleAddButtonPress = () => navigation.navigate("AddItemScreen");

  const renderValuableCard: ListRenderItem<Valuable> = useCallback(
    ({ index, item: { description, purchasePrice, photo, name, id } }) => {
      return (
        <ValuableCard
          id={id}
          name={name}
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
      <Title onButtonPress={handleAddButtonPress}>Inventory</Title>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={listColumn}
        contentContainerStyle={listInnerContainer}
        renderItem={renderValuableCard}
        data={valuables}
        numColumns={2}
      />
    </View>
  );
}
