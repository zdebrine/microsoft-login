import { Box, Center, HStack, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { productColors } from "../../assets/productColors";

function RadioCard(props: any) {
  const handleChange = props.onChange;
  return (
    <Center
      as="button"
      borderWidth="2px"
      borderColor={props.isChecked ? "blue.600" : "transparent"}
      onClick={() => handleChange(props.value)}
      borderRadius={120}
      backgroundImage={props.children}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      height={20}
      width={20}
    />
  );
}

export interface ColorPickerProps {
  handleColorChange: (color: string) => void;
  color: string;
  material: string;
}

export const ColorPicker: FC<ColorPickerProps> = ({
  handleColorChange,
  color,
  material,
}) => {
  const options: any = productColors;

  return (
    <Box padding={8} width="100%">
      <Text marginBottom={4} fontSize="md">
        {"Color"}
      </Text>
      <HStack>
        {options[material.toLowerCase()].map((value: any) => {
          const colorChoice = value[0];
          const image = value[1];
          const isChecked = colorChoice === color;
          return (
            <RadioCard
              key={colorChoice}
              value={colorChoice}
              isChecked={isChecked}
              onChange={handleColorChange}
            >
              {image}
            </RadioCard>
          );
        })}
      </HStack>
    </Box>
  );
};
