import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { Text, TextInput, TextInputAndroidProps, View } from "react-native";

import { inputStyles } from "./input.styles";
import { colors } from "../../../Theme/Colors";

const {
  input,
  tagText,
  unitContainer,
  inputWrapper,
  errorInput,
  validatedInput,
  initialInput,
  onFocus: onFocusStyle,
} = inputStyles;

interface InputProps {
  tag: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  height?: number;
  unit?: string;
  placeholder?: string;
  placeHolderPosition?: TextInputAndroidProps["textAlignVertical"];
  validation?: (value: string) => boolean;
  maxLength?: number;
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
  maxLength,
}: InputProps) {
  const [error, setError] = useState<boolean | undefined>(undefined);
  const [onFocus, setOnFocus] = useState<boolean>(false);

  const onChangeValue = (newValue: string) => {
    setValue(newValue);
  };

  const inputStateStyle = useCallback((error: boolean | undefined) => {
    switch (error) {
      case true:
        return errorInput;
      case false:
        return validatedInput;
      default:
        return initialInput;
    }
  }, []);

  const handleOnBlur = useCallback(() => {
    setOnFocus(false);
    if (!validation) {
      return;
    }
    setError(!validation(value));
  }, [validation, value]);

  const handleOnFocus = () => {
    setOnFocus(true);
  };

  return (
    <View>
      <Text style={tagText}>{tag}</Text>
      <View style={inputWrapper}>
        <TextInput
          maxLength={maxLength || undefined}
          multiline
          testID="input_test_id"
          textAlignVertical={placeHolderPosition || "center"}
          style={[
            input,
            {
              height,
              ...inputStateStyle(error),
            },
            onFocus && { ...onFocusStyle },
          ]}
          value={value}
          onChangeText={onChangeValue}
          placeholder={placeholder || ""}
          placeholderTextColor={colors.secondaryGrey}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
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
