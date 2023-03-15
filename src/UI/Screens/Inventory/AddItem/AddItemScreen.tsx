import { useCallback, useState } from "react";
import { Alert, View } from "react-native";

import { addItemScreenStyles } from "./AddItemScreenStyles";
import { useInventoryStore } from "../../../../Stores/Inventory/InventoryStore";
import { RootTabScreenProps } from "../../../../navigation/types";
import Button from "../../../Components/Button/Button";
import { GetImage } from "../../../Components/GetImage/GetImage";
import { Input } from "../../../Components/Input/Input";

const { container, buttonsContainer } = addItemScreenStyles;

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<"AddItemScreen">) {
  const { addValuable } = useInventoryStore((s) => ({
    addValuable: s.addValuableAction,
  }));

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>("");

  const nameValidator = useCallback((name: string) => {
    const validated = /^[a-zA-Z\s]*$/.test(name);
    return validated;
  }, []);

  const priceValidator = useCallback((price: string) => {
    const validated = /^\d+$/.test(price);
    return validated;
  }, []);

  const handleOnAdd = (): void => {
    if (nameValidator(name) && priceValidator(price) && selectedImage) {
      addValuable(parseInt(price), name, selectedImage, description);
      navigation.pop();
    } else {
      Alert.alert(
        "Form incomplete",
        "Please fill all the mandatory fields, including the image"
      );
    }
  };

  return (
    <View style={container}>
      <View style={buttonsContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Add" onPress={handleOnAdd} />
      </View>
      <GetImage selectImage={setSelectedImage} selectedImage={selectedImage} />
      <Input
        tag="Name"
        placeholder="Just letters e.g. Bracelet"
        validation={nameValidator}
        value={name}
        setValue={setName}
      />

      <Input
        tag="Value"
        placeholder="Just numbers e.g. 700"
        validation={priceValidator}
        value={price}
        setValue={setPrice}
        unit="Eur"
      />
      <Input
        tag="Description"
        placeholder="Optional"
        placeHolderPosition="top"
        value={description}
        setValue={setDescription}
        height={100}
      />
    </View>
  );
}
