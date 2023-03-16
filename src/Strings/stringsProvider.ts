import { Strings } from "./Strings";

type textKeys = keyof typeof Strings;
interface UItext {
  [key: string]: string;
}

export const stringsProvider = (keys: textKeys[]): UItext => {
  let text: UItext = {};
  keys.forEach((key) => {
    text = { ...text, [key]: Strings[key] };
  });
  return text;
};
