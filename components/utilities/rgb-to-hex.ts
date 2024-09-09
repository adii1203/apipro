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

export const HexToRgb = (hex: string) => {
  const normiliseHex = hex.startsWith("#") ? hex.slice(1) : hex;

  const isValedHex = /^([A-Fa-f0-9]{6})$/;

  if (!isValedHex.test(normiliseHex)) {
    return { R: 0, G: 0, B: 0 };
  }

  const R = parseInt(normiliseHex.slice(0, 2), 16);
  const G = parseInt(normiliseHex.slice(2, 4), 16);
  const B = parseInt(normiliseHex.slice(4, 6), 16);

  return { R, G, B };
};
