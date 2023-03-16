import { TEXT } from "./Text";

type textKeys = keyof typeof TEXT;
interface UItext {
  [key: string]: string;
}

export const textProvider = (keys: textKeys[]): UItext => {
  let text: UItext = {};
  keys.forEach((key) => {
    text = { ...text, [key]: TEXT[key] };
  });
  return text;
};
