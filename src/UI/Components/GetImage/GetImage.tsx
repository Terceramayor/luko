import * as ImagePicker from "expo-image-picker";
import { Dispatch, SetStateAction } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import { getImageStyles } from "./GetImage.styles";

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

const ALERT_MESSAGE = "You have not select any image!";
const FOLDER_IMAGE = require("../../../../assets/Images/folder.png");
const IMAGE_QUALITY = 1;
const IMAGE_SELECTED = "Done";
const IMAGE_NOT_SELECTED = "Pick a picture";

export function GetImage({ selectImage, selectedImage }: GetImageProps) {
  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: IMAGE_QUALITY,
    });

    if (!result.canceled && result.uri) {
      selectImage(result.uri);
    } else {
      alert(ALERT_MESSAGE);
    }
  };
  return (
    <View style={container}>
      <TouchableOpacity style={imageContainer} onPress={pickImageAsync}>
        <Image style={image} source={FOLDER_IMAGE} />
        {selectedImage ? (
          <Text>{IMAGE_SELECTED}</Text>
        ) : (
          <Text>{IMAGE_NOT_SELECTED}</Text>
        )}
        {selectedImage && (
          <Image style={selectedImageStyle} source={{ uri: selectedImage }} />
        )}
      </TouchableOpacity>
    </View>
  );
}
