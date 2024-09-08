"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { RgbToHex } from "./utilities/rgb-to-hex";

const RGBtoHEX = () => {
  const [rgb, setRGB] = useState({
    R: "",
    G: "",
    B: "",
  });
  const [hex, setHex] = useState("");

  useEffect(() => {
    setHex(RgbToHex(rgb.R, rgb.G, rgb.B));
  }, [rgb]);

  return (
    <Card className="py-4 w-full md:w-[35rem] mx-auto">
      <CardContent className="space-y-4">
        {/* RGB INPUT */}
        <div className="flex items-center gap-4">
          <Input
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

        <div
          className="w-8 h-8 rounded-full mx-auto"
          style={{
            backgroundColor: hex,
          }}
        />
        {/* HEX OUTPUT */}
        <div className="space-y-2">
          <Input type="" value={hex} placeholder="#" />
          <Button
            onClick={() => {
              navigator.clipboard.writeText(hex);
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
