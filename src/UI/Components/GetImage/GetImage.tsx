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

export function GetImage({ selectImage, selectedImage }: GetImageProps) {
  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.uri) {
      selectImage(result.uri);
    } else {
      alert("You did not select any image!");
    }
  };
  return (
    <View style={container}>
      <TouchableOpacity style={imageContainer}>
        <Image
          style={image}
          source={require("../../../../assets/Images/camera.png")}
        />
        <Text>Take a picture</Text>
      </TouchableOpacity>
      <TouchableOpacity style={imageContainer} onPress={pickImageAsync}>
        <Image
          style={image}
          source={require("../../../../assets/Images/folder.png")}
        />
        {selectedImage ? <Text>Done</Text> : <Text>Pick a picture</Text>}
        {selectedImage && (
          <Image style={selectedImageStyle} source={{ uri: selectedImage }} />
        )}
      </TouchableOpacity>
    </View>
  );
}
