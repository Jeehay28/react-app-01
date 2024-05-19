import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useState,
} from "react";
import { Card } from "../styles/styledLayout";
import { useDispatch, useSelector } from "react-redux";
import { listOfChildService } from "../thunk/childService";
import { AppDispatch } from "../store/store";
import { RootState } from "../store/store";
import { Info, Images, ButtonGreen, ButtonRed } from "../styles/styledInfoBox";
import { FilterBox } from "../styles/styledInfoBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopyright,
  faClipboard,
  faQuoteLeft,
  faQuoteRight,
  faCircleExclamation
} from "@fortawesome/free-solid-svg-icons";
import { LoadingBox, LoadingDots } from "../styles/styledUI";
import { FooterContainer, CopyrightText } from "../styles/styledLayout";

const ChildService: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const data = useSelector(
    (state: RootState) => state.childService.childService?.item
  );

  //   const [data, setData] = useState<{ [key: string]: any } | null>(null);
  const [headerInfo, setHeaderInfo] = useState<string[]>([]);
  const [list, setList] = useState<{ [key: string]: string }[]>([]);
  const [q, setQ] = useState("3124");

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(
        listOfChildService({
          q: q,
        })
      );
    };

    fetchData();
    setQ("")
  }, []);

  useEffect(() => {
    if (data) {
      setHeaderInfo(Object.keys(data));
      const temp = [data];
      setList(temp);
    }
  }, [data]);

  const getQ = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setQ(event.target.value);
  };

  const handleFetchData = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const qAsNumber = parseInt(q);
      if (!isNaN(qAsNumber) && qAsNumber >= 1 && qAsNumber <= 4000) {
        dispatch(listOfChildService({ q: q }));
        setQ(""); // Empty the input value
      }
    }
  };

  const secureUrl = (url: string) => {
    return url.startsWith("http://") ? url.replace("http://", "https://") : url;
  };

  if (data) {
    return (
      <>
        <Card>
          <>
          <div style={{marginTop : '50px'}}>
            <FilterBox
              type="text"
              placeholder="도감번호를 입력하세요.(예: 3124)"
              value={q}
              onChange={getQ}
              onKeyDown={handleFetchData}
            />
          </div>

          <Images>
            {data.imgUrl1 !== "NONE" && (
              <img src={data.imgUrl1} alt="Image 1" />
            )}
            {data.imgUrl2 !== "NONE" && (
              <img src={data.imgUrl2} alt="Image 2" />
            )}
            {data.imgUrl3 !== "NONE" && (
              <img src={data.imgUrl3} alt="Image 3" />
            )}
          </Images>

          <Info>
            <div style={{display: 'flex', justifyContent : 'flex-start', gap: '10px'}}>
              <ButtonGreen>
                <FontAwesomeIcon
                  icon={faClipboard}
                  style={{ color: "#4caf50", marginRight: "10px" }}
                />
                {data.childLvbngPilbkNo}
              </ButtonGreen>

              {data.prtctSpecsTpcdNm.trim().length !== 0 && (
                 <ButtonRed>
                  <FontAwesomeIcon
                  icon={faCircleExclamation}
                  style={{ marginRight: "10px" }}
                />
                  {data.prtctSpecsTpcdNm}</ButtonRed>
              )}
            </div>
            <FontAwesomeIcon icon={faQuoteLeft} style={{ color: "grey" }} />
            <div
              dangerouslySetInnerHTML={{ __html: data.lvbngDscrt }}
              style={{ padding: "10px 10px", background: '#fafafa' }}
            ></div>
            <div style={{display: "flex", justifyContent : "flex-end"}}>
            <FontAwesomeIcon icon={faQuoteRight} style={{ color: "grey" }} />
            </div>
            

            <div>
              <strong>학명 :</strong> {data.biogyNm}
            </div>

            <div>
              <strong>과국명 :</strong> {data.famlKrlngNm}
            </div>
            <div>
              <strong>과명 :</strong> {data.famlNm}
            </div>
            <div>
              <strong>속국명 :</strong> {data.genusKrlngNm}
            </div>
            <div>
              <strong>속명 :</strong> {data.genusNm}
            </div>
            <div>
              <strong>서식지 :</strong> {data.hbttNm}
            </div>

            <div>
              <strong>국명 :</strong> {data.lvbngKrlngNm}
            </div>
            <div>
              <strong>생물분류 :</strong> {data.lvbngTpcdNm}
            </div>
            <div>
              <strong>목국명 :</strong> {data.ordKrlngNm}
            </div>
            <div>
              <strong>목명 :</strong> {data.ordNm}
            </div>
          </Info>

          </>
        
        </Card>
       
      </>
    );
  } else {
    return (
      <>
        <Card>
          <LoadingBox style={{ width: "20vw" }}>
            <LoadingDots />
            <LoadingDots />
            <LoadingDots />
            <LoadingDots />
            <LoadingDots />
          </LoadingBox>
        </Card>
      </>
    );
  }
};

export default ChildService;
