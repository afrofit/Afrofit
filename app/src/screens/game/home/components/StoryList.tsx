import { ColorType } from "../../../../../theme/globals";
import * as React from "react";
import { Card } from "../../../../../src/components/cards/Card";
import { Font } from "../../../../../src/components/font/Font";

import {
  CardContentWrapper,
  CardImage,
  StoryListWrapper,
  TagWrapper,
} from "./StoryList.styled";
import Spacer from "../../../../../src/components/elements/Spacer";
import { Placer } from "../../../../../src/components/elements/Placer";

import {
  STORY_DATA_EXTRAS_MAP,
  STORY_DATA,
} from "../../../../../data/story_data";
import {
  selectUser,
  selectUserIsSubscribed,
} from "../../../../../../app/store/reducers/auth/auth.slice";
import { useSelector } from "react-redux";

interface Props {
  handleNavigateToStory: (storyId: string) => void;
}

export const StoryList: React.FC<Props> = ({ handleNavigateToStory }) => {
  const currentUser = useSelector(selectUser);
  const userIsSubscribed = useSelector(selectUserIsSubscribed);

  React.useEffect(() => {
    console.log("userIsSubscribed", userIsSubscribed);
  }, [userIsSubscribed]);

  if (!currentUser) return null;

  const storyDisabled = React.useCallback(
    (storyOrder: number) => {
      return (
        currentUser.lastStoryCompleted !== storyOrder - 1 || !userIsSubscribed
      );
    },
    [userIsSubscribed]
  );

  return (
    <StoryListWrapper showsVerticalScrollIndicator={false}>
      {STORY_DATA.sort((a, b) => (a.order > b.order ? 1 : -1)).map((story) => {
        const imageSource = STORY_DATA_EXTRAS_MAP[story.id].thumbUrl;
        return (
          <Card
            marginBottom={10}
            disablePadding
            key={story.id}
            outlined={false}
            bgColor={story.color as ColorType}
            onPress={() => handleNavigateToStory(story.id)}
            disabled={storyDisabled(story.order)}
          >
            <CardContentWrapper>
              <Placer left={-5}>
                <CardImage source={imageSource} />
              </Placer>
              <TagWrapper>
                <Font variant="sm2" color="lightblue" caps>
                  {story.difficulty}
                </Font>
              </TagWrapper>
              <Spacer h={10} />
              <Font variant="h3" color="dark">
                {story.title}
              </Font>
            </CardContentWrapper>
          </Card>
        );
      })}
    </StoryListWrapper>
  );
};
