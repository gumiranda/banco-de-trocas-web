import { chakra, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";
import { ReactNode } from "react";

export const SocialButton = ({ children, label, href, ...rest }: any) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      {...rest}
      rounded={"full"}
      w={12}
      h={12}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
