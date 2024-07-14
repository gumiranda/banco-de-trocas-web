import { Box, Flex, useTheme, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";

export type DropdownProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export const Dropdown = ({ title, children }: DropdownProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = useTheme();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <Box position="relative" width="max-content" zIndex={theme.zIndices.modal}>
      <Flex
        cursor="pointer"
        color={theme.colors.white}
        position="relative"
        alignItems="center"
        pr="2.4rem"
        zIndex={theme.zIndices.tooltip}
        onClick={isOpen ? onClose : onOpen}
      >
        {title}
      </Flex>

      <Box
        display="flex"
        flexDirection="column"
        bg={theme.colors.white}
        color={theme.colors.black}
        mt={theme.space[2]}
        position="absolute"
        right="0"
        zIndex={theme.zIndices.modal}
        transition="transform 0.2s ease-in, opacity 0.2s"
        transform={isOpen ? "translateY(0)" : "translateY(-2rem)"}
        opacity={isOpen ? 1 : 0}
        pointerEvents={isOpen ? "auto" : "none"}
        visibility={isOpen ? "visible" : "hidden"}
        _before={{
          position: "absolute",
          borderRight: "1.2rem solid transparent",
          borderLeft: "1.2rem solid transparent",
          borderBottom: `1.2rem solid ${theme.colors.white}`,
          top: "-1.2rem",
          right: "2.4rem",
        }}
        aria-hidden={!isOpen}
      >
        {children}
      </Box>

      {isOpen && (
        <Box
          bg="rgba(0, 0, 0, 0.5)"
          position="fixed"
          top="0"
          bottom="0"
          left="0"
          right="0"
          zIndex={theme.zIndices.overlay}
          onClick={onClose}
          aria-hidden={!isOpen}
        />
      )}
    </Box>
  );
};
