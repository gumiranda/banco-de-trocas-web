import { Badge, Box, IconButton } from "@chakra-ui/react";
import { ShoppingCartIcon } from "lucide-react";
import { useCart } from "@/shared/libs/hooks/useCart";

export const CartIcon = () => {
  const { quantity } = useCart();

  return (
    <Box position="relative">
      <IconButton
        icon={<ShoppingCartIcon />}
        aria-label="Shopping Cart"
        variant="unstyled"
        color="white"
        _hover={{ color: "gray.700" }}
        width="2.4rem"
        height="2.4rem"
      />
      {quantity > 0 && (
        <Badge
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="secondary"
          color="white"
          fontSize="1rem"
          borderRadius="full"
          width="1.6rem"
          height="1.6rem"
          position="absolute"
          top="-0.4rem"
          right="-0.4rem"
          aria-label="Cart Items"
        >
          {quantity}
        </Badge>
      )}
    </Box>
  );
};
