import { useCallback } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { valuableCardStyles } from "./ValuableCard.styles";
import { useInventoryStore } from "../../../Stores/Inventory/InventoryStore";

const {
  container,
  image,
  valuableName,
  valuableDescription,
  valuablePrice,
  infoContainer,
  removeContainer,
  removeIcon,
} = valuableCardStyles;

const REMOVE_ICON = require("../../../../assets/Images/remove.png");

interface ValuableCardProps {
  id: number;
  description?: string;
  price: number;
  photoURL: string;
  name: string;
}

export const ValuableCard = ({
  id,
  name,
  description,
  price,
  photoURL,
}: ValuableCardProps) => {
  const { removeValuable } = useInventoryStore((s) => ({
    removeValuable: s.removeValuableAction,
  }));

  const removeItem = useCallback(() => {
    removeValuable(id);
  }, [id]);

  return (
    <View style={container}>
      <Image
        style={image}
        source={{
          uri: photoURL,
        }}
      />
      <TouchableOpacity style={removeContainer} onPress={removeItem}>
        <Image source={REMOVE_ICON} style={removeIcon} />
      </TouchableOpacity>
      <View style={infoContainer}>
        <View>
          <Text style={valuableName}>{name}</Text>
          {description && (
            <Text style={valuableDescription}>{description}</Text>
          )}
        </View>
        <Text style={valuablePrice}>{`€ ${price}`}</Text>
      </View>
    </View>
  );
};
