import React from "react";
import { ProductViewer } from "../components/ProductViewer/ProductViewer";
import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider>
      <ProductViewer />
    </ChakraProvider>
  );
};

export default App;
