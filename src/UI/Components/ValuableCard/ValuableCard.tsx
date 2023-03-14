import { Image, Text, View } from "react-native";

import { valuableCardStyles } from "./ValuableCard.styles";

const {
  container,
  image,
  valuableName,
  valuableDescription,
  valuablePrice,
  infoContainer,
} = valuableCardStyles;

interface ValuableCardProps {
  description?: string;
  price: number;
  photoURL: string;
  name: string;
}

export const ValuableCard = ({
  name,
  description,
  price,
  photoURL,
}: ValuableCardProps) => {
  return (
    <View style={container}>
      <Image
        style={image}
        source={{
          uri: photoURL,
        }}
      />
      <View style={infoContainer}>
        <Text style={valuableName}>{name}</Text>
        {description && <Text style={valuableDescription}>{description}</Text>}
        <Text style={valuablePrice}>{`€ ${price}`}</Text>
      </View>
    </View>
  );
};
