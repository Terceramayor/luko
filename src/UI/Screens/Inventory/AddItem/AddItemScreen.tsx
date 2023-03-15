import { useCallback, useMemo, useState } from "react";
import { Alert, View } from "react-native";

import { addItemScreenStyles } from "./AddItemScreenStyles";
import { calculateTotalValue } from "../../../../Helpers/calculateTotalValue";
import { useInventoryStore } from "../../../../Stores/Inventory/InventoryStore";
import { RootTabScreenProps } from "../../../../navigation/types";
import Button from "../../../Components/Button/Button";
import { GetImage } from "../../../Components/GetImage/GetImage";
import { Input } from "../../../Components/Input/Input";

const { container, buttonsContainer, divider } = addItemScreenStyles;

const FORM_ERROR_TITLE = "Form incomplete";
const FORM_ERROR_MESSAGE =
  "Please fill all the mandatory fields, including the image";

const PRICE_LIMIT = 40000;
const PRICE_ERROR_TITLE = `The limit of valuables insured exceeds the limit of ${PRICE_LIMIT} euros`;
const PRICE_ERROR_MESSAGE =
  "Please remove some items or add an item with a lower price";

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
  const { addValuable, valuables } = useInventoryStore((s) => ({
    addValuable: s.addValuableAction,
    valuables: s.valuables,
  }));

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string>("");

  const nameValidator = useCallback((name: string) => {
    const validated = /^[a-zA-Z\s]*$/.test(name) && name.length > 0;
    return validated;
  }, []);

  const priceValidator = useCallback((price: string) => {
    const validated = /^\d+$/.test(price);
    return validated;
  }, []);

  const currentTotalValue = useMemo(() => {
    return calculateTotalValue(valuables);
  }, [valuables]);

  const handleOnAdd = (): void => {
    if (nameValidator(name) && priceValidator(price) && selectedImage) {
      if (currentTotalValue + parseInt(price) > PRICE_LIMIT) {
        Alert.alert(PRICE_ERROR_TITLE, PRICE_ERROR_MESSAGE);
        return;
      }

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
