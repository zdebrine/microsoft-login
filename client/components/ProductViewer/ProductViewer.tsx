import { Box, Button, Divider, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { ColorPicker } from "../ColorPicker";
import { HabRow } from "../HAB/HabRow/HabRow";
import { MaterialPicker } from "../MaterialPicker";
import { SizePicker } from "../SizePicker";
import { TrimPicker } from "../TrimPicker";

export const ProductViewer = () => {
  const [uid, setUid] = useState("9fc51ee907424c82bf1a335f58c8c7e5");
  const [material, setMaterial] = useState("timber");
  const [color, setColor] = useState("Unfinished");
  const [ctrim, setTrim] = useState("Black");

  const handleViewChange = (size: string) => {
    if (size === "Mini") {
      setUid("7d599d9214bd4de7b77face1d9e48523");
    } else if (size === "Reg") {
      setUid("9fc51ee907424c82bf1a335f58c8c7e5");
    } else {
      setUid("65cd6a80d5c345f69b8969db9507e9de");
    }
  };

  const handleMaterialChange = (material: string) => {
    setMaterial(material);
  };

  const handleColorChange = (color: string) => {
    setColor(color);
  };

  const handleTrimChange = (trim: string) => {
    setTrim(trim);
  };

  return (
    <HabRow height="100vh">
      <Box
        height={{ base: "25%", md: "100%" }}
        width={{ base: "100vw", md: "85vw" }}
        marginRight={8}
      >
        <iframe
          height="100%"
          width="100%"
          color="#000000"
          src={`https://sketchfab.com/models/${uid}/embed?autostart=1`}
          id="api-frame"
          allow="autoplay; fullscreen; vr"
        ></iframe>
      </Box>
      <Flex width={{ base: "100vw", md: "13vw" }} direction="column">
        <Text fontSize="3xl" marginY={4}>
          {"Exterior"}
        </Text>
        <SizePicker handleViewChange={handleViewChange} />
        <MaterialPicker handleMaterialChange={handleMaterialChange} />
        <ColorPicker
          material={material}
          color={color}
          handleColorChange={handleColorChange}
        />
        <TrimPicker handleTrimChange={handleTrimChange} />
        <Box position="absolute" bottom={12} width="13vw">
          <Flex marginBottom={4} justifyContent="space-between">
            <Text fontSize="xl">{"Total"}</Text>
            <Text fontSize="xl">{"$55,000"}</Text>
          </Flex>
          <Button size="lg" width="100%">
            {"Checkout"}
          </Button>
        </Box>
      </Flex>
    </HabRow>
  );
};
