import React, { useEffect, useState } from "react";
import { Card } from "../styles/styledLayout";
import { Table } from "../styles/styledTable";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { listOfChildService } from "../thunk/childService";
import { AppDispatch } from "../store/store";
import { RootState } from "../store/store";

const MedicalPlants: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const data = useSelector((state: RootState) => state.childService);

//   const [data, setData] = useState<{ [key: string]: any } | null>(null);
  const [headerInfo, setHeaderInfo] = useState<string[]>([]);
  const [list, setList] = useState<{ [key: string]: string }[]>([]);

//   useEffect(() => {
//     const fetchData = async() => {
//         await dispatch(listOfChildService())

//     }

//     fetchData()
//   }, []);

  useEffect(() => {
    if (data) {
      console.log(data);
    //   setHeaderInfo(Object.keys(data.body.items[0]));
    //   setList(data.body.items);
    }
  }, [data]);

  return (
    <>
      <Card>
        <h3 style={{color : "#222831", marginTop : '1rem'}}>산림청 약용식물 정보</h3>
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

export default MedicalPlants;
