import { Box, HStack, Text, useRadio, useRadioGroup } from "@chakra-ui/react";
import React, { FC } from "react";

function RadioCard(props: any) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="sm"
        _checked={{
          bg: "black",
          color: "white",
          borderColor: "black",
        }}
        _focus={{
          outline: "none",
        }}
        paddingX={5}
        paddingY={3}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export interface TrimPickerProps {
  handleTrimChange: (trim: string) => void;
}

export const TrimPicker: FC<TrimPickerProps> = ({ handleTrimChange }) => {
  const options = ["Black", "White"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "Black",
    onChange: (trim) => handleTrimChange(trim),
  });

  const group = getRootProps();

  return (
    <Box padding={8} width="100%">
      <Text marginBottom={4} fontSize="md">
        {"Trim"}
      </Text>
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </HStack>
    </Box>
  );
};
