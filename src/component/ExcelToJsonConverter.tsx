import React, { useState } from "react";
import * as XLSX from "xlsx";
import { CenterBox } from "../styles/styledLogin";

const ExcelToJsonConverter: React.FC = () => {
  const [jsonData, setJsonData] = useState<any[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const json = XLSX.utils.sheet_to_json(worksheet);
      const transformedData = json.map((item: any) => ({
        number: item["number"],
        name: item["name"],
      }));
      setJsonData(transformedData);
    };
    reader.readAsArrayBuffer(file);
  };

  const downloadJson = () => {
    const jsonString = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <CenterBox>
      <div>
        <h1>Upload Excel File</h1>
        <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
        {jsonData?.length > 0 && (
          <div>
            <h2>Data from Excel</h2>
            {/* <ul>
            {jsonData.map((item, index) => (
              <li key={index}>
                {item.number}: {item.name}
              </li>
            ))}
          </ul> */}
            <button onClick={downloadJson}>Download JSON</button>
          </div>
        )}
      </div>
    </CenterBox>
  );
};
export default ExcelToJsonConverter;
