import { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";

import { addItemScreenStyles } from "./AddItemScreenStyles";
import { useInventoryStore } from "../../../../Stores/Inventory/InventoryStore";
import { RootTabScreenProps } from "../../../../navigation/types";
import Button from "../../../Components/Button/Button";
import { Input } from "../../../Components/Input/Input";

const { container, buttonsContainer } = addItemScreenStyles;

export default function AddItemScreen({
  navigation,
}: RootTabScreenProps<"AddItemScreen">) {
  const { addValuable } = useInventoryStore((s) => ({
    addValuable: s.addValuable,
  }));

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [formError, setFormError] = useState<boolean>(false);

  const nameValidator = useCallback((name: string) => {
    const validated = /^[a-zA-Z]+$/.test(name);
    return validated;
  }, []);

  const priceValidator = useCallback((price: string) => {
    const validated = /^\d+$/.test(price);
    return validated;
  }, []);

  const handleOnAdd = (): void => {
    if (nameValidator(name) && priceValidator(price)) {
      addValuable(parseInt(price), name, "photoURL", description);
      //Pop screen
    }
  };

  return (
    <View style={container}>
      <View style={buttonsContainer}>
        <Button title="Cancel" onPress={() => navigation.goBack()} />
        <Button title="Add" onPress={handleOnAdd} />
      </View>
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
