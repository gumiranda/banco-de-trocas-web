import { Button as ChakraButton, useStyleConfig, forwardRef } from "@chakra-ui/react";

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  minimal?: boolean;
  icon?: JSX.Element;
  as?: React.ElementType;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CustomButton = forwardRef<ButtonProps, "button">(
  (
    {
      children,
      icon,
      size = "medium",
      fullWidth = false,
      minimal = false,
      ...props
    }: any,
    ref
  ) => {
    const styles = useStyleConfig("CustomButton", {
      size,
      variant: minimal ? "minimal" : "solid",
    });
    const sx = {
      ...styles,
      ...(fullWidth && { width: "100%" }),
      ...(icon && { svg: { width: "1.5rem", "& + span": { ml: 2 } } }),
    };
    return (
      <ChakraButton sx={sx} ref={ref} {...props}>
        {icon}
        {children && <span>{children}</span>}
      </ChakraButton>
    );
  }
);
