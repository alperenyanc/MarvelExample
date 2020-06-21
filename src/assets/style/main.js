import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
import { colorsText } from "./color";

const TypePhone =
  width <= 363
    ? "s"
    : width > 363 && width <= 500
    ? "md"
    : width > 500 && width <= 950
    ? "l"
    : "xl";

const FontSize = (number) => {
  if (TypePhone == "s") {
    return number - 2;
  }
  if (TypePhone == "md") {
    return number;
  }
  if (TypePhone == "l") {
    return number + 2;
  }
  if (TypePhone == "xl") {
    return number + 6;
  }
};
 

const textStyles = StyleSheet.create({
  bold: {
    color: colorsText.main,    
    fontWeight: "700",
  },
  boldWhite: {
    color: colorsText.white,    
    fontWeight: "700",
  },
  boldNC: {    
    fontWeight: "700",
  },
  boldExtra: {
    color: colorsText.main,
    fontWeight: "900",
  },
  boldExtraWhite: {
    color: colorsText.white,
    fontWeight: "900",
  },
  boldExtraNC: {
    fontWeight: "900",
  },
  boldSemi: {
    color: colorsText.main,
    fontWeight: "500",
  },
  boldSemiWhite: {
    color: colorsText.white,
    fontWeight: "500",
  },
  boldSemiNC: {
    fontWeight: "500",
  },
  normal: {
    color: colorsText.main,
  },
  normalWhite: {
    color: colorsText.white, 
  },
  normalNC: {
     
  },
 
  toUpperCase: {
    textTransform: "uppercase",
  },
  letterSpacing1: {
    letterSpacing: 1,
  },
  fontSize10: {
    fontSize: FontSize(10),
  },

  fontSize11: {
    fontSize: FontSize(11),
  },
  fontSize12: {
    fontSize: FontSize(12),
  },
  fontSize13: {
    fontSize: FontSize(13),
  },
  fontSize14: {
    fontSize: FontSize(14),
  },
  fontSize15: {
    fontSize: FontSize(15),
  },
  fontSize16: {
    fontSize: FontSize(16),
  },
  fontSize17: {
    fontSize: FontSize(17),
  },
  fontSize18: {
    fontSize: FontSize(18),
  },
  fontSize20: {
    fontSize: FontSize(20),
  },
  fontSize22: {
    fontSize: FontSize(22),
  },
  fontSize30: {
    fontSize: FontSize(30),
  },
  fontSize40: {
    fontSize: FontSize(40),
  },
});

 

 
export {
  textStyles,  
  width,   
  TypePhone,
  height,   
};
