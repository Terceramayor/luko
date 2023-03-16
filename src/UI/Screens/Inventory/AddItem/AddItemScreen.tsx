import { useCallback, useMemo, useState } from "react";
import { Alert, View } from "react-native";

import { addItemScreenStyles } from "./AddItemScreenStyles";
import { calculateTotalValue } from "../../../../Helpers/calculateTotalValue";
import { useInventoryStore } from "../../../../Stores/Inventory/InventoryStore";
import { textProvider } from "../../../../Text/textProvider";
import { RootTabScreenProps } from "../../../../navigation/types";
import Button from "../../../Components/Button/Button";
import { GetImage } from "../../../Components/GetImage/GetImage";
import { Input } from "../../../Components/Input/Input";

const { container, buttonsContainer, divider } = addItemScreenStyles;

const PRICE_LIMIT = 40000;
const PRICE_ERROR_TITLE = `The limit of valuables insured exceeds the limit of ${PRICE_LIMIT} euros`;

const addItemScreenText = textProvider([
  "FORM_ERROR_TITLE",
  "FORM_ERROR_MESSAGE",
  "PRICE_ERROR_MESSAGE",
  "NAME",
  "VALUE",
  "DESCRIPTION",
  "NAME_PLACEHOLDER",
  "VALUE_PLACEHOLDER",
  "OPTIONAL_PLACEHOLDER",
  "UNIT",
]);

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<"AddItemScreen">) {
  const { addValuable, valuables } = useInventoryStore((s) => ({
    addValuable: s.addValuableAction,
    valuables: s.valuables,
  }));

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>("");

  const nameValidator = useCallback((name: string) => {
    return /^[a-zA-Z\s]*$/.test(name) && name.length > 0;
  }, []);

  const priceValidator = useCallback((price: string) => {
    return /^\d+$/.test(price);
  }, []);

  const currentTotalValue = useMemo(() => {
    return calculateTotalValue(valuables);
  }, [valuables]);

  const handleOnAdd = (): void => {
    if (nameValidator(name) && priceValidator(price) && selectedImage) {
      if (currentTotalValue + parseInt(price, 10) > PRICE_LIMIT) {
        Alert.alert(PRICE_ERROR_TITLE, addItemScreenText.PRICE_ERROR_MESSAGE);
        return;
      }

      addValuable(parseInt(price, 10), name, selectedImage, description);
      navigation.pop();
    } else {
      Alert.alert(
        addItemScreenText.FORM_ERROR_TITLE,
        addItemScreenText.FORM_ERROR_MESSAGE
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
        tag={addItemScreenText.NAME}
        placeholder={addItemScreenText.NAME_PLACEHOLDER}
        validation={nameValidator}
        value={name}
        setValue={setName}
      />
      <View style={divider} />
      <Input
        tag={addItemScreenText.VALUE}
        placeholder={addItemScreenText.VALUE_PLACEHOLDER}
        validation={priceValidator}
        value={price}
        setValue={setPrice}
        unit={addItemScreenText.UNIT}
      />
      <View style={divider} />
      <Input
        tag={addItemScreenText.DESCRIPTION}
        placeholder={addItemScreenText.OPTIONAL_PLACEHOLDER}
        placeHolderPosition="top"
        value={description}
        setValue={setDescription}
        height={100}
      />
    </View>
  );
}
