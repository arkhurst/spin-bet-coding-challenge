import { Game } from "@/data/type";
import { useMemo } from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { FULL_TIME_MINS } from "@/lib/index";
import "react-circular-progressbar/dist/styles.css";
import { theme } from "@/lib/theme";

const Progress = styled.span`
  height: 90px;
  width: 90px;
`;

export const CircularProgressBar = ({ game }: { game: Game }) => {
  const statusText = useMemo(() => {
    if (game) {
      if (game.liveStatus === "-") {
        return "";
      }

      if (game.liveStatus === "Canceled") {
        return "";
      }
      return game.liveStatus;
    }
  }, [game]);

  const textColor = useMemo(() => {
    switch (statusText) {
      case "FT":
        return theme.colors.green.primary;
      default:
        return theme.colors.primary;
    }
  }, [statusText]);

  const percentage = useMemo(() => {
    if (game) {
      if (/\d/.test(game.liveStatus)) {
        return Number(game.liveStatus.replace("+", ""));
      }

      if (game.liveStatus === "HT") {
        return FULL_TIME_MINS / 2;
      }

      if (game.liveStatus === "FT") {
        return FULL_TIME_MINS;
      }
    }
    return 0;
  }, [game]);

  return (
    <Progress>
      <CircularProgressbar
        maxValue={FULL_TIME_MINS}
        value={percentage}
        text={`${statusText}${/\d/.test(game.liveStatus) ? "'" : ""}`}
        styles={buildStyles({
          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "round",

          // Text size
          textSize: "25px",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Colors
          pathColor: theme.colors.green.primary,
          textColor: textColor,
          trailColor: "#5c5b5b",
        })}
      />
    </Progress>
  );
};
