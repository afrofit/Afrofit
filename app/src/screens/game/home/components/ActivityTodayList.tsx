import * as React from "react";
import { Card } from "../../../../../src/components/cards/Card";
import { Font } from "../../../../../src/components/font/Font";
import {
  ItemWrapper,
  LabelWrapper,
  ListWrapper,
  NumWrapper,
} from "./ActivityTodayList.styled";
import { formattedStat } from "../../../../../utils/formatters";
import { TodaysActivityType } from "../../../../../store/reducers/activity/types";

interface Props {
  todaysActivity: TodaysActivityType;
}

export const ActivityTodayList: React.FC<Props> = ({ todaysActivity }) => {
  return (
    <ListWrapper>
      <Card marginBottom={0.1} disablePadding outlined={false} isSquare first>
        <ItemWrapper first={true} last={false}>
          <NumWrapper>
            <Font variant="h3" color="hilite_purpink" caps>
              {formattedStat(todaysActivity.caloriesBurned)}
            </Font>
          </NumWrapper>
          <LabelWrapper>
            <Font variant="p" color="lightblue">
              calories burned
            </Font>
          </LabelWrapper>
        </ItemWrapper>
      </Card>
      <Card marginBottom={0.1} disablePadding outlined={false} isSquare last>
        <ItemWrapper last={true}>
          <NumWrapper>
            <Font variant="h3" color="hilite_purpink" caps>
              {formattedStat(todaysActivity.bodyMovements)}
            </Font>
          </NumWrapper>
          <LabelWrapper>
            <Font variant="p" color="lightblue">
              body movements
            </Font>
          </LabelWrapper>
        </ItemWrapper>
      </Card>
    </ListWrapper>
  );
};
