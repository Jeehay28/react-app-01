import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface ListOfChildServicePayload {
    q: string;
  }

export const listOfChildService = createAsyncThunk(
  "childService/list",
  async (payload: ListOfChildServicePayload, { rejectWithValue }) => {
    const { q } = payload;
    const serviceKey = process.env.REACT_APP_PLANT_BOOK_SERVICE_KEY as string;
    const url = "https://apis.data.go.kr/1400119/ChildService1/childIlstrInfo";
    const params = {
      serviceKey: serviceKey,
      q1: q
     
    };

    try {
      const { data: response } = await axios.get(url, { params });
      return response;
    } catch (err: any) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data);
      } else {
        return rejectWithValue({
          error: {
            url: "[식물도감] 목록",
            code: err.code,
            message: err.message,
          },
        });
      }
    }
  }
);
