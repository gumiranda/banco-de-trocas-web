import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { darken } from "polished";

const colors = {
  primary: {
    500: "#9f7aea",
    600: "#6936d1",
    700: "#5932b7",
  },
  secondary: {
    400: "#3f3f3f",
    500: "#2e2e2e",
    600: "#212121",
    900: "#212121",
  },
  tertiary: {
    300: "#3ee360",
    500: "#04D361",
  },
  grayscale: {
    500: "#f0f0f0",
    600: "#949191",
  },
  "bg.canvas": {
    default: "gray.25",
    _dark: "gray.950",
  },
  "bg.surface": {
    default: "white",
    _dark: "gray.900",
  },
  "bg.subtle": {
    default: "gray.50",
    _dark: "gray.800",
  },
  "bg.muted": {
    default: "gray.100",
    _dark: "gray.700",
  },

  "fg.default": {
    default: "gray.900",
    _dark: "white",
  },
  "fg.emphasized": {
    default: "gray.700",
    _dark: "gray.200",
  },
  "fg.muted": {
    default: "gray.600",
    _dark: "gray.300",
  },
  "fg.subtle": {
    default: "gray.500",
    _dark: "gray.400",
  },
  "fg.inverted": {
    default: "white",
    _dark: "gray.950",
  },

  "border.default": {
    default: "gray.200",
    _dark: "gray.800",
  },
  "border.emphasized": {
    default: "gray.300",
    _dark: "gray.700",
  },
  "border.active": {
    default: "gray.400",
    _dark: "gray.600",
  },

  "bg.accent.default": "brand.600",
  "bg.accent.subtle": "brand.500",
  "bg.accent.muted": "brand.400",

  "fg.accent.subtle": "brand.100",
  "fg.accent.muted": "brand.50",
  "fg.accent.default": "white",

  accent: {
    default: "brand.500",
    _dark: "brand.200",
  },
  success: {
    default: "green.500",
    _dark: "green.200",
  },
  error: {
    default: "red.500",
    _dark: "red.200",
  },
  purpleDark: {
    900: "#2a254b",
    800: "#3c2b64",
    700: "#4b3780",
  },
  pink: {
    400: "#ff0080",
  },
};
const shadows = {
  xs: {
    default: "0px 0px 1px rgba(45, 55, 72, 0.05), 0px 1px 2px rgba(45, 55, 72,  0.1)",
    _dark: "0px 0px 1px rgba(13, 14, 20, 1), 0px 1px 2px rgba(13, 14, 20, 0.9)",
  },
  sm: {
    default: "0px 0px 1px rgba(45, 55, 72, 0.05), 0px 2px 4px rgba(45, 55, 72,  0.1)",
    _dark: "0px 0px 1px rgba(13, 14, 20, 1), 0px 2px 4px rgba(13, 14, 20, 0.9)",
  },
  md: {
    default: "0px 0px 1px rgba(45, 55, 72, 0.05), 0px 4px 8px rgba(45, 55, 72,  0.1)",
    _dark: "0px 0px 1px rgba(13, 14, 20, 1), 0px 4px 8px rgba(13, 14, 20, 0.9)",
  },
  lg: {
    default: "0px 0px 1px rgba(45, 55, 72, 0.05), 0px 8px 16px rgba(45, 55, 72,  0.1)",
    _dark: "0px 0px 1px rgba(13, 14, 20, 1), 0px 8px 16px rgba(13, 14, 20, 0.9)",
  },
  xl: {
    default: "0px 0px 1px rgba(45, 55, 72, 0.05), 0px 16px 24px rgba(45, 55, 72,  0.1)",
    _dark: "0px 0px 1px rgba(13, 14, 20, 1), 0px 16px 24px rgba(13, 14, 20, 0.9)",
  },
  focus: {
    default: "0 0 0 4px #EDF2F7",
    _dark: "0 0 0 4px #2D3748",
  },
};
export const theme = extendTheme({
  fonts: {
    heading: "var(--font-league-spartan)",
    body: "var(--font-league-spartan)",
  },
  colors,
  shadows,
  styles: { global: { body: { bg: "secondary.900", color: "white" } } },
  sizes: {
    container: {
      sm: "320px",
    },
  },
  components: {
    Stepper: {
      baseStyle: {
        title: {
          color: "black",
        },
      },
    },
    GradientButton: {
      baseStyle: {
        bgGradient: "linear(to-r, pink.500, purple.500)",
        color: "white",
        _hover: {
          bgGradient: "linear(to-r, pink.600, purple.600)",
        },
      },
    },
    CustomButton: {
      baseStyle: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "md",
        fontFamily: "body",
        textDecoration: "none",
        _focus: {
          boxShadow: "0 0 0 3px #f062c0",
        },
        _disabled: {
          cursor: "not-allowed",
          filter: "saturate(30%)",
        },
      },
      sizes: {
        small: {
          height: "3rem",
          fontSize: "xs",
          px: 4,
        },
        medium: {
          height: "4rem",
          fontSize: "sm",
          px: 6,
        },
        large: {
          height: "5rem",
          fontSize: "md",
          px: 8,
        },
      },
      variants: {
        solid: (props) => ({
          bg: "linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%)",
          color: "white",
          _hover: {
            bg: mode(
              "linear-gradient(180deg, #e35565 0%, #d958a6 50%)",
              "linear-gradient(180deg, #e35565 0%, #d958a6 50%)"
            )(props),
          },
        }),
        minimal: (props) => ({
          bg: "none",
          color: "#ff5f5f",
          _hover: {
            color: mode("#ff5f5f", darken(0.1, "#ff5f5f"))(props),
          },
        }),
        fullWidth: {
          width: "100%",
        },
        withIcon: {
          svg: {
            width: "1.5rem",
            "& + span": {
              ml: 2,
            },
          },
        },
      },
    },
  },
});
