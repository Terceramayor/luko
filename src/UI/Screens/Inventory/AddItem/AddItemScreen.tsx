import { useCallback, useState } from "react";
import { Alert, View } from "react-native";

import { addItemScreenStyles } from "./AddItemScreenStyles";
import { useInventoryStore } from "../../../../Stores/Inventory/InventoryStore";
import { RootTabScreenProps } from "../../../../navigation/types";
import Button from "../../../Components/Button/Button";
import { GetImage } from "../../../Components/GetImage/GetImage";
import { Input } from "../../../Components/Input/Input";

const { container, buttonsContainer, divider } = addItemScreenStyles;

const FORM_ERROR_TITLE = "Form incomplete";
const FORM_ERROR_MESSAGE =
  "Please fill all the mandatory fields, including the image";

const NAME = "Name";
const VALUE = "Value";
const DESCRIPTION = "Description";

const NAME_PLACEHOLDER = "Just letters e.g. Bracelet";
const VALUE_PLACEHOLDER = "Just numbers e.g. 700";
const OPTIONAL_PLACEHOLDER = "Optional";
const UNIT = "€";

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
      Alert.alert(FORM_ERROR_TITLE, FORM_ERROR_MESSAGE);
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
        tag={NAME}
        placeholder={NAME_PLACEHOLDER}
        validation={nameValidator}
        value={name}
        setValue={setName}
      />
      <View style={divider} />
      <Input
        tag={VALUE}
        placeholder={VALUE_PLACEHOLDER}
        validation={priceValidator}
        value={price}
        setValue={setPrice}
        unit={UNIT}
      />
      <View style={divider} />
      <Input
        tag={DESCRIPTION}
        placeholder={OPTIONAL_PLACEHOLDER}
        placeHolderPosition="top"
        value={description}
        setValue={setDescription}
        height={100}
      />
    </View>
  );
}
