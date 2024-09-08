export const RgbToHex = (r: string, g: string, b: string) => {
  const toHex = (value: number) => {
    if (value > 255) {
      return "FF";
    }
    if (value < 0) {
      return "00";
    }
    return value.toString(16).padStart(2, "0").toUpperCase();
  };
  return `#${toHex(Number(r))}${toHex(Number(g))}${toHex(Number(b))}`;
};
