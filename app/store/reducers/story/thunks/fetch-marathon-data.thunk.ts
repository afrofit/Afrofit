import { AxiosError } from "axios";
import { ApiResponse } from "apisauce";

import API_CLIENT from "../../../../../app/api/api-client";
import { AppThunk } from "../../../../store/store";
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  setGenericErrorMessage,
} from "../../ui/ui.slice";
import {
  setMarathonData,
  setUserMarathonScoreIndex,
} from "../../marathon/marathon.slice";

const fetchMarathonDataApi = async (userId: string) => {
  return await API_CLIENT.get(`marathon/${userId}/`);
};

export function FetchMarathonData(userId: string): AppThunk {
  return async (dispatch) => {
    dispatch(newRequest());
    dispatch(hideGenericErrorDialog());

    try {
      const response: ApiResponse<any, any> = await fetchMarathonDataApi(
        userId
      );

      console.log("response", response);

      if (response && response.data) {
        const { marathon, userScoreIndex } = response.data;

        dispatch(setMarathonData(marathon));
        dispatch(setUserMarathonScoreIndex(userScoreIndex));
        return dispatch(finishedRequest());
      } else if (response && !response.ok && response.data) {
        dispatch(finishedRequest());
        return dispatch(
          setGenericErrorMessage(
            response.data ??
              `An error occured fetching your activity data for this story's chapters.`
          )
        );
      }
    } catch (error: unknown) {
      const err = error as AxiosError;
      console.log("Error!", err);
      dispatch(setGenericErrorMessage(` ${err.response?.data as string}`));
      dispatch(finishedRequest());
    }
  };
}