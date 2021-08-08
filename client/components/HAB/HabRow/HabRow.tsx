import React, { FC, ReactNode } from "react";
import { Box, BoxProps } from "@chakra-ui/react";

export interface HabRowProps extends BoxProps {
  children: ReactNode;
}

export const HabRow: FC<HabRowProps> = ({ children, ...rest }) => (
  <Box display="flex" flexWrap="wrap" {...rest}>
    {children}
  </Box>
);
