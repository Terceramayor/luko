import { Image, Text, View } from "react-native";

import { valuableCardStyles } from "./ValuableCard.styles";

const {
  container,
  image,
  valuableDescription,
  valuablePrice,
  descriptionContainer,
} = valuableCardStyles;

interface ValuableCardProps {
  description?: string;
  price?: number;
  photoURL?: string;
}

export const ValuableCard = ({
  description = "Very Long Description Very Long Description",
  price = 123456,
  photoURL,
}: ValuableCardProps) => {
  return (
    <View style={container}>
      <Image
        style={image}
        source={{
          uri: "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg",
        }}
      />
      <View style={descriptionContainer}>
        <Text style={valuableDescription}>{description}</Text>
        <Text style={valuablePrice}>{`€ ${price}`}</Text>
      </View>
    </View>
  );
};
