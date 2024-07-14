import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { ButtonProps, CustomButton } from "./CustomButton";
import { useCart } from "@/shared/libs/hooks/useCart";

type CartButtonProps = {
  id: string;
  hasText?: boolean;
} & Pick<ButtonProps, "size">;

export const CartButton = ({ id, size = "small", hasText = false }: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart();
  const ButtonText = isInCart(id) ? "Remove from cart" : "Add to cart";

  return (
    <CustomButton
      icon={<Icon as={isInCart(id) ? MinusIcon : AddIcon} w={6} h={6} />}
      size={size}
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
      aria-label={ButtonText}
    >
      {hasText && ButtonText}
    </CustomButton>
  );
};
