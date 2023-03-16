import * as ImagePicker from "expo-image-picker";
import { Dispatch, SetStateAction } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { getImageStyles } from "./GetImage.styles";
import { textProvider } from "../../../Text/textProvider";

const {
  container,
  imageContainer,
  image,
  selectedImage: selectedImageStyle,
} = getImageStyles;

interface GetImageProps {
  selectedImage: string;
  selectImage: Dispatch<SetStateAction<string>>;
}

const FOLDER_IMAGE = require("../../../../assets/Images/folder.png");
const IMAGE_QUALITY = 1;

const getImageText = textProvider([
  "ALERT_MESSAGE",
  "IMAGE_NOT_SELECTED",
  "IMAGE_NOT_SELECTED",
]);

export function GetImage({ selectImage, selectedImage }: GetImageProps) {
  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: IMAGE_QUALITY,
    });

    if (!result.canceled && result.uri) {
      selectImage(result.uri);
    } else {
      alert(getImageText.ALERT_MESSAGE);
    }
  };
  return (
    <View style={container}>
      <TouchableOpacity style={imageContainer} onPress={pickImageAsync}>
        <Image style={image} source={FOLDER_IMAGE} />
        {selectedImage ? (
          <Text>{getImageText.IMAGE_SELECTED}</Text>
        ) : (
          <Text>{getImageText.IMAGE_NOT_SELECTED}</Text>
        )}
        {selectedImage && (
          <Image style={selectedImageStyle} source={{ uri: selectedImage }} />
        )}
      </TouchableOpacity>
    </View>
  );
}
