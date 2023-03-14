export const fonts = {
  regular: "Circular-Regular",
  bold: "Circular-Bold",
};

export const size = {
  title: 50,
  subTitle: 25,
  content: 18,
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
