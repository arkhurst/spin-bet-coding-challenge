import { Game } from "@/data/type";
import { formatDate } from "@/lib/date-utils";
import { useMemo } from "react";
import { CloseIcon } from "@/components/Icons";
import {
  CountryText,
  GameModalHeader,
  GameStatus,
  LeagueText,
  ModalContent,
  ModalInnerContainer,
  TeamScores,
  TeamScoresContainer,
  ViewerModalContainer,
} from "./index.styles";
import { DateText, Margin } from "@/components/atoms";
import { CloseButton } from "@/components/molecules";
interface GameViewModalProps {
  onClose: VoidFunction;
  game: Game;
}

export const GameViewModal = ({ game, onClose }: GameViewModalProps) => {
  const gameTime = useMemo(() => {
    if (game) {
      if (game.liveStatus === "FT") {
        return "ENDED";
      }

      if (game.liveStatus === "Canceled") {
        return "CANCELED";
      }

      if (game.liveStatus === "-") {
        return formatDate(new Date(game.timestamp)).format("MMM Do HH:mm");
      }

      return "LIVE";
    }
  }, [game]);

  const statusText = useMemo(() => {
    if (game) {
      if (["-", "Canceled", "FT", "HT"].includes(game.liveStatus)) {
        return "";
      }

      return game.liveStatus;
    }
  }, [game]);

  return (
    <ViewerModalContainer>
      <ModalInnerContainer>
        <GameModalHeader>
          <div />
          <CloseButton aria-label="Close" onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </GameModalHeader>
        <ModalContent>
          <CountryText>{game.country}</CountryText>
          <LeagueText>{game.competition}</LeagueText>
          <DateText status={game.liveStatus}>{gameTime}</DateText>
          <TeamScoresContainer>
            <TeamScores>
              <span>{game.homeTeam.name}</span>
              <span>{game.homeScore.current ?? "-"}</span>
            </TeamScores>
            <Margin top={10}>
              <TeamScores>
                <span>{game.awayTeam.name}</span>
                <span>{game.awayScore.current ?? "-"}</span>
              </TeamScores>
            </Margin>
            <GameStatus top={20} left={10} status={game.liveStatus}>
              {statusText} {/\d/.test(game.liveStatus) ? "mins" : null}
            </GameStatus>
          </TeamScoresContainer>
        </ModalContent>
      </ModalInnerContainer>
    </ViewerModalContainer>
  );
};
