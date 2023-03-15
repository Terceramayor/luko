import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { Text, TextInput, TextInputAndroidProps, View } from "react-native";

import { inputStyles } from "./input.styles";
import { colors } from "../../../theme/Colors";

const { container, input, tagText, unitContainer, inputWrapper } = inputStyles;

interface InputProps {
  tag: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  height?: number;
  unit?: string;
  placeholder?: string;
  placeHolderPosition?: TextInputAndroidProps["textAlignVertical"];
  validation?: (value: string) => boolean;
}

export function Input({
  tag,
  value,
  setValue,
  placeholder,
  height,
  unit,
  placeHolderPosition,
  validation,
}: InputProps) {
  const [error, setError] = useState<boolean | undefined>(undefined);

  const onChangeValue = (newValue: string) => {
    setValue(newValue);
  };

  const inputStateStyle = useCallback((error: boolean | undefined) => {
    switch (error) {
      case true:
        return {
          borderColor: colors.failureDark,
          backgroundColor: colors.failureLight,
        };
      case false:
        return {
          borderColor: colors.successDark,
          backgroundColor: colors.successLight,
        };
      default:
        return {
          borderColor: colors.secondaryGrey,
          backgroundColor: colors.lightGrey,
        };
    }
  }, []);

  const validator = useCallback(() => {
    if (!validation) {
      return;
    }
    setError(!validation(value));
  }, [validation, value]);

  return (
    <View style={container}>
      <Text style={tagText}>{tag}</Text>
      <View style={inputWrapper}>
        <TextInput
          testID="input_test_id"
          textAlignVertical={placeHolderPosition || "center"}
          style={[
            input,
            {
              height,
              ...inputStateStyle(error),
            },
          ]}
          value={value}
          onChangeText={onChangeValue}
          placeholder={placeholder || ""}
          onBlur={validator}
        />
        {unit && (
          <View style={unitContainer}>
            <Text>{unit}</Text>
          </View>
        )}
      </View>
    </View>
  );
}
