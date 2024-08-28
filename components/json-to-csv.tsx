"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { jsonToCsv } from "./utilities/json-to-csv";

const JsonToCsv = () => {
  const [jsonInput, setJsonInput] = useState<string>();
  const [outputCsv, setOutputCsv] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputCsv);
  };

  const handelChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const input = event.target.value;
      setJsonInput(input);

      if (input.trim() === "") {
        setOutputCsv("");
      }

      try {
        const csv = jsonToCsv(input);
        setOutputCsv(csv);
      } catch (error) {
        if (error instanceof Error) {
          setOutputCsv(error.message);
        }
      }
    },
    []
  );

  return (
    <Card className="py-4">
      <CardContent className="md:grid grid-cols-2 gap-6 flex flex-col">
        {/* JSON INPUT */}
        <div>
          <Textarea
            value={jsonInput}
            onChange={handelChange}
            className="focus-visible:ring-transparent"
            placeholder="Paste your JSON here"
          />
        </div>
        {/* CSV OUTPUT */}
        <div>
          <Textarea
            className="focus-visible:ring-transparent"
            placeholder="CSV output will appear here"
            readOnly
            value={outputCsv}
          />

          <Button
            size={"sm"}
            className="mt-2"
            variant={"default"}
            onClick={copyToClipboard}>
            copy
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JsonToCsv;
