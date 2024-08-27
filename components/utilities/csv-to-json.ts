import Papa from "papaparse";

export const csvToJson = (csv: string) => {
  const json = Papa.parse(csv, {
    header: true,
    skipEmptyLines: true,
  });

  if (json.errors.length > 0) {
    throw new Error(json.errors[0].message);
  }

  return JSON.stringify(json.data, null, 2);
};
