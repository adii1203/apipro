"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "./ui/card";
import { Textarea } from "./ui/textarea";
import { csvToJson } from "./utilities/csv-to-json";

const CsvToJson = () => {
  const [csvString, setCsvString] = useState("");
  const [outputJson, setOutputJson] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputJson);
  };

  const handelChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = event.target.value;
      setCsvString(value);

      if (value.trim() === "") {
        setOutputJson("");
        return;
      }
      try {
        const data = csvToJson(value);
        setOutputJson(data);
      } catch (error) {
        setOutputJson(error as string);
      }
    },
    []
  );

  return (
    <Card className="py-4">
      <CardContent className="md:grid grid-cols-2 gap-6 flex flex-col">
        {/* CSV INPUT */}
        <div>
          <Textarea
            value={csvString}
            onChange={handelChange}
            className="focus-visible:ring-transparent"
            placeholder="Paste your CSV here"
          />
        </div>
        {/* JSON INPUT */}
        <div>
          <Textarea
            className="focus-visible:ring-transparent"
            placeholder="JSON output will appear here"
            readOnly
            value={outputJson}
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

export default CsvToJson;
