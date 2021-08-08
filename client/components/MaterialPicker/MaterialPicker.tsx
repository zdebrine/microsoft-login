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

export interface MaterialPickerProps {
  handleMaterialChange: (material: string) => void;
}

export const MaterialPicker: FC<MaterialPickerProps> = ({
  handleMaterialChange,
}) => {
  const options = ["Timber", "Concrete", "Brick"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "Timber",
    onChange: (material) => handleMaterialChange(material),
  });

  const group = getRootProps();

  return (
    <Box padding={8} width="100%">
      <Text marginBottom={4} fontSize="md">
        {"Material"}
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
