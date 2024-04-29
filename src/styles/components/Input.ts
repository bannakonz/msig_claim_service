import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    borderRadius: "12px",
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
      borderRadius: "12px"
    }
  })
};

const variants = {
  outline: definePartsStyle({
    field: {
      color: "txt_normal",
      borderColor: "bg",
      _placeholder: {
        color: "gray"
      },
      _readOnly: {
        boxShadow: "none"
      },
      _disabled: {
        background: "blue_second_4",
        borderWidth: "1px",
        opacity: 1,
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
