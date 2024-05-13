import React, { useEffect, useState } from "react";

const List: React.FC = () => {
  const [data, setData] = useState<{ [key: string]: any } | null>(null);
  const [headerInfo, setHeaderInfo] = useState<string[]>([]);
  const [list, setList] = useState<{ [key: string]: string }[]>([]);

  const apiKey = "Infuser data-portal-test-key";
  const baseUrl =
    "https://api.odcloud.kr/api/15070372/v1/uddi:132ff02a-48b5-4271-aee0-8f3b919aca78";

  const page = 1;
  const perPage = 10;
  const headers = {
    Authorization: "Infuser data-portal-test-key",
  };

  useEffect(() => {
    // Construct the request URL with the API key
    const url = new URL(baseUrl);
    url.searchParams.append("page", "1");
    url.searchParams.append("perPage", "10");

    // Send GET request to the API
    fetch(url, { headers })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (data) {
      setHeaderInfo(Object.keys(data.data[0]));
      setList(data.data);
    }
  }, [data]);

  return (
    <>
      <table>
        <>
          <thead>
            <tr>
            {headerInfo?.map((item, index) => (
              <th style={{padding : '5px 5px'}}>{item}</th>
            ))}
            </tr>
            
          </thead>

          <tbody>
            {list?.map((el: {[key: string] : string}, elIndex: number) => (
              <tr key={elIndex}>
                {headerInfo?.map((key: string, keyIndex: number) => (
                  <td 
                  style={{padding : '5px 5px'}}
                  key={keyIndex}>{el[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </>
      </table>
    </>
  );
};

export default List;
