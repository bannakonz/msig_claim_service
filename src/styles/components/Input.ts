import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    borderRadius: "100px",
    p: "16px"
  },
  element: {
    pr: "16px"
  }
});

const sizes = {
  md: definePartsStyle({
    field: {
      fontSize: "21px",
      lineHeight: "27.3px",
      h: "auto",
      borderRadius: "16px"
    }
  })
};

const variants = {
  outline: definePartsStyle({
    field: {
      color: "txt_normal",
      borderColor: "gray",
      _placeholder: {
        color: "#919191"
      },
      _readOnly: {
        boxShadow: "none"
      },
      _disabled: {
        color: "txt_copy_right",
        background: "gray_alpha.300",
        borderWidth: "1px",
        borderColor: "gray",
        opacity: 1
      }
    }
  })
};

export const Input = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
});
