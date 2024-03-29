import { TEMP_VIDEO_LINK } from "../../../app/constants/device";
import { ChapterType } from "../../types/ChapterModel";

export const CHAPTER3_AUDIO_MAP: {
  [key: string]: { url: number; alt_url: number };
} = {
  story003_chapter1: {
    url: require("../../assets/audio/chapters/3/story003_chapter1.mp3"),
    alt_url: require("../../assets/audio/story/3/story003_intro_alt.mp3"),
  },
  story003_chapter2: {
    url: require("../../assets/audio/chapters/3/story003_chapter2.mp3"),
    alt_url: require("../../assets/audio/story/3/story003_intro_alt.mp3"),
  },
  story003_chapter3: {
    url: require("../../assets/audio/chapters/3/story003_chapter3.mp3"),
    alt_url: require("../../assets/audio/story/3/story003_intro_alt.mp3"),
  },
  story003_chapter4: {
    url: require("../../assets/audio/chapters/3/story003_chapter4.mp3"),
    alt_url: require("../../assets/audio/story/3/story003_intro_alt.mp3"),
  },
  story003_chapter5: {
    url: require("../../assets/audio/chapters/3/story003_chapter5.mp3"),
    alt_url: require("../../assets/audio/story/3/story003_intro_alt.mp3"),
  },
  story003_chapter6: {
    url: require("../../assets/audio/chapters/3/story003_chapter6.mp3"),
    alt_url: require("../../assets/audio/story/3/story003_intro_alt.mp3"),
  },
  story003_chapter7: {
    url: require("../../assets/audio/chapters/3/story003_chapter7.mp3"),
    alt_url: require("../../assets/audio/story/3/story003_intro_alt.mp3"),
  },
  story003_chapter8: {
    url: require("../../assets/audio/chapters/3/story003_chapter8.mp3"),
    alt_url: require("../../assets/audio/story/3/story003_intro_alt.mp3"),
  },
  story003_chapter9: {
    url: require("../../assets/audio/chapters/3/story003_chapter9.mp3"),
    alt_url: require("../../assets/audio/story/3/story003_intro_alt.mp3"),
  },
  story003_chapter10: {
    url: require("../../assets/audio/chapters/3/story003_chapter10.mp3"),
    alt_url: require("../../assets/audio/story/3/story003_intro_alt.mp3"),
  },
  story003_chapter11: {
    url: require("../../assets/audio/chapters/3/story003_chapter11.mp3"),
    alt_url: require("../../assets/audio/story/3/story003_intro_alt.mp3"),
  },
  story003_chapter12: {
    url: require("../../assets/audio/chapters/3/story003_chapter12.mp3"),
    alt_url: require("../../assets/audio/story/3/story003_intro_alt.mp3"),
  },
  story003_chapter13: {
    url: require("../../assets/audio/chapters/3/story003_chapter13.mp3"),
    alt_url: require("../../assets/audio/story/3/story003_intro_alt.mp3"),
  },
  story003_chapter14: {
    url: require("../../assets/audio/chapters/3/story003_chapter14.mp3"),
    alt_url: require("../../assets/audio/story/3/story003_intro_alt.mp3"),
  },
  story003_chapter15: {
    url: require("../../assets/audio/chapters/3/story003_chapter15.mp3"),
    alt_url: require("../../assets/audio/story/3/story003_intro_alt.mp3"),
  },
};

export const CHAPTER_3_DATA: ChapterType[] = [
  {
    id: "story003_chapter1",
    order: 1,
    storyId: "story003",
    targetSteps: 1050,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story003_chapter2",
    order: 2,
    storyId: "story003",
    targetSteps: 1200,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story003_chapter3",
    order: 3,
    storyId: "story003",
    targetSteps: 1300,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story003_chapter4",
    order: 4,
    storyId: "story004",
    targetSteps: 1350,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story003_chapter5",
    order: 5,
    storyId: "story003",
    targetSteps: 1400,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story003_chapter6",
    order: 6,
    storyId: "story003",
    targetSteps: 1500,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story003_chapter7",
    order: 7,
    storyId: "story003",
    targetSteps: 1500,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story003_chapter8",
    order: 8,
    storyId: "story003",
    targetSteps: 1600,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story003_chapter9",
    order: 9,
    storyId: "story003",
    targetSteps: 1600,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story003_chapter10",
    order: 10,
    storyId: "story003",
    targetSteps: 1650,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story003_chapter11",
    order: 11,
    storyId: "story003",
    targetSteps: 1650,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story003_chapter12",
    order: 12,
    storyId: "story003",
    targetSteps: 1700,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story003_chapter13",
    order: 13,
    storyId: "story003",
    targetSteps: 1750,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story003_chapter14",
    order: 14,
    storyId: "story003",
    targetSteps: 1800,
    videoUrl: TEMP_VIDEO_LINK,
  },
  {
    id: "story003_chapter15",
    order: 15,
    storyId: "story003",
    targetSteps: 2000,
    videoUrl: TEMP_VIDEO_LINK,
  },
];
