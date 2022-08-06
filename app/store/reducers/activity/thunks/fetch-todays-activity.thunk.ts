import { AxiosError } from "axios";
import { ApiResponse } from "apisauce";

import { AppThunk } from "../../../store";
import {
  finishedRequest,
  hideGenericErrorDialog,
  newRequest,
  showGenericErrorDialog,
} from "../../ui/ui.slice";
import API_CLIENT from "../../../../api/api-client";
import { setTodaysActivity } from "../activity.slice";
import { TodaysActivityType } from "../types";

const fetchUserTodaysActivityApi = async (userId: string) => {
  return await API_CLIENT.get(`performance/today/${userId}`);
};

export function GetUserTodaysActivityData(userId: string): AppThunk {
  return async (dispatch) => {
    try {
      dispatch(newRequest());
      dispatch(hideGenericErrorDialog());

      const response: ApiResponse<any, any> = await fetchUserTodaysActivityApi(
        userId
      );
      if (response && response.data) {
        const { todaysActivity }: { todaysActivity: TodaysActivityType } =
          response.data;

        dispatch(setTodaysActivity(todaysActivity));
      } else {
        dispatch(finishedRequest());
        return showGenericErrorDialog(
          `An error occured fetching your daily activity data.`
        );
      }
      dispatch(finishedRequest());
    } catch (error: any) {
      console.log("Error!", error.response.data);
      const err = error as AxiosError;
      dispatch(showGenericErrorDialog(` ${err.response?.data as string}`));
      dispatch(finishedRequest());
    }
  };
}
