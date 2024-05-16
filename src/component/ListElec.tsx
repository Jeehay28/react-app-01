import React, { useEffect, useState } from "react";
import { Card } from "../styles/styledLayout";
import { Table } from "../styles/styledTable";

const ListElect: React.FC = () => {
  const [data, setData] = useState<{ [key: string]: any } | null>(null);
  const [headerInfo, setHeaderInfo] = useState<string[]>([]);
  const [list, setList] = useState<{ [key: string]: string }[]>([]);

  const serviceKey = process.env.REACT_APP_SERVICE_KEY as string;
  const baseUrl =
    "https://apis.data.go.kr/B552584/kecoapi/cpointEnrgUsqntStatsService/getElec";

  const page = 1;
  const perPage = 10;
  // const headers = {
  //   Authorization: "Infuser data-portal-test-key",
  // };

  useEffect(() => {
    // Construct the request URL with the API key
    const url = new URL(baseUrl);
    url.searchParams.append("serviceKey", serviceKey);
    url.searchParams.append("pageNo", "1");
    url.searchParams.append("numOfRows", "10");
    url.searchParams.append("returnType", "json");

    // Send GET request to the API
    fetch(url)
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
      console.log(data);
      setHeaderInfo(Object.keys(data.body.items[0]));
      setList(data.body.items);
    }
  }, [data]);

  return (
    <>
      <Card>
        <h3 style={{color : "#222831", marginTop : '1rem'}}>탄소중립포인트 에너지 수도 사용량 통계</h3>
        <Table>
          <>
            <thead>
              <tr>
                {headerInfo?.map((item, index) => (
                  <th style={{ padding: "5px 5px" }} key={index}>{item}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {list?.map((el: { [key: string]: string }, elIndex: number) => (
                <tr key={elIndex}>
                  {headerInfo?.map((key: string, keyIndex: number) => (
                    <td style={{ padding: "5px 5px" }} key={keyIndex}>
                      {el[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </>
        </Table>
      </Card>
    </>
  );
};

export default ListElect;
