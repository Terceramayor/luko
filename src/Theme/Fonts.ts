export const fonts = {
  regular: "Circular-Regular",
  bold: "Circular-Bold",
};

export const size = {
  title: 15,
  subTitle: 12,
  content: 10,
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
