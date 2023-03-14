import { useCallback } from "react";
import {
  Image,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

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
    removeValuable: s.removeValuable,
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
        <Image
          source={require("../../../../assets/Images/remove.png")}
          style={removeIcon}
        />
      </TouchableOpacity>
      <View style={infoContainer}>
        <Text style={valuableName}>{name}</Text>
        {description && <Text style={valuableDescription}>{description}</Text>}
        <Text style={valuablePrice}>{`€ ${price}`}</Text>
      </View>
    </View>
  );
};
