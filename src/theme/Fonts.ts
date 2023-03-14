export const fonts = {
  regular: "Circular-Regular",
  bold: "Circular-Bold",
};

export const size = {
  title: 20,
  subTitle: 15,
  content: 12,
};

export const getFontStyle = (
  family: keyof typeof fonts,
  fontSize: keyof typeof size
) => {
  return {
    fontFamily: fonts[family],
    fontSize: size[fontSize],
  };
};
