"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { RgbToHex, HexToRgb } from "./utilities/rgb-to-hex";
import { ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

const RGBtoHEX = () => {
  const [rgb, setRGB] = useState({
    R: "255",
    G: "255",
    B: "255",
  });
  const [hex, setHex] = useState("");
  const [rgbToHex, setRgbTohex] = useState(true);

  const handelRgbPaste = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "v" && e.ctrlKey) {
      const rgbText = await navigator.clipboard.readText();
      const rgbRegex =
        /^rgb\(\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\s*,\s*(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\s*\)$/;
      if (!rgbRegex.test(rgbText.trim())) {
        return;
      }
      const rgbArray = rgbText.split("(")[1].split(")")[0].split(",");
      setRGB({
        R: rgbArray[0].trim(),
        G: rgbArray[1].trim(),
        B: rgbArray[2].trim(),
      });
    }
  };

  useEffect(() => {
    if (rgbToHex) {
      setHex(RgbToHex(rgb.R, rgb.G, rgb.B));
    }
  }, [rgb, rgbToHex]);

  useEffect(() => {
    if (!rgbToHex) {
      const { R, G, B } = HexToRgb(hex);
      setRGB({
        R: R.toString(),
        G: G.toString(),
        B: B.toString(),
      });
    }
  }, [hex, rgbToHex]);

  return (
    <Card className="py-4 w-full md:w-[35rem] mx-auto">
      <CardContent className="space-y-4">
        <div className="text-xs text-muted-foreground">
          <p>{`Tip: paste your valid ${
            rgbToHex ? "RGB" : "HEX"
          } color from clipbord.`}</p>
        </div>

        <div
          className={cn(
            "flex flex-col gap-4",
            !rgbToHex && "flex-col-reverse"
          )}>
          {/* RGB INPUT */}
          <div className="flex items-center gap-4">
            <Input
              readOnly={!rgbToHex}
              onKeyDown={handelRgbPaste}
              value={rgb.R}
              onChange={(e) => {
                if (Number(e.target.value) > 255 || Number(e.target.value) < 0)
                  return;
                setRGB({
                  ...rgb,
                  R: e.target.value,
                });
              }}
              type="number"
              placeholder="R (0 - 255)"
            />
            <Input
              readOnly={!rgbToHex}
              onKeyDown={handelRgbPaste}
              type="number"
              value={rgb.G}
              onChange={(e) => {
                if (Number(e.target.value) > 255 || Number(e.target.value) < 0)
                  return;

                setRGB({
                  ...rgb,
                  G: e.target.value,
                });
              }}
              placeholder="G (0 - 255)"
            />
            <Input
              readOnly={!rgbToHex}
              onKeyDown={handelRgbPaste}
              type="number"
              value={rgb.B}
              onChange={(e) => {
                if (Number(e.target.value) > 255 || Number(e.target.value) < 0)
                  return;
                setRGB({
                  ...rgb,
                  B: e.target.value,
                });
              }}
              placeholder="B (0 - 255)"
            />
          </div>

          <div className="flex items-center justify-center gap-3">
            <div
              className="w-8 h-8 rounded-full"
              style={{
                backgroundColor: hex,
              }}
            />
            <div>
              <Button
                onClick={() => setRgbTohex(!rgbToHex)}
                size={"icon"}
                variant={"outline"}
                className="rounded-full w-8 h-8">
                <ArrowUpDown size={18} />
              </Button>
            </div>
          </div>
          {/* HEX OUTPUT */}
          <div className="space-y-2">
            <Input
              type=""
              value={hex}
              onChange={(e) => {
                setHex(e.target.value);
              }}
              readOnly={rgbToHex}
              placeholder="#"
            />
          </div>
        </div>

        <div>
          <Button
            onClick={() => {
              rgbToHex
                ? navigator.clipboard.writeText(hex)
                : navigator.clipboard.writeText(
                    `rgb(${rgb.R},${rgb.G},${rgb.B})`
                  );
            }}
            size={"sm"}>
            copy
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RGBtoHEX;
