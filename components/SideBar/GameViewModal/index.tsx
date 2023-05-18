import {
  CloseButton,
  DateText,
  Header,
  Margin,
  ModalContainer,
} from "@/components/atoms";
import { Game } from "@/data/type";
import styled from "styled-components";
import { formatDate } from "@/lib/date-utils";
import { useMemo } from "react";
import { CloseIcon } from "@/components/Icons";

const ViewerModalContainer = styled(ModalContainer)`
  display: none;

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
  }
`;

const ModalInnerContainer = styled.div`
  background: white;
  border-radius: 5px;
  position: relative;
  width: 25vw;
  height: 42vh;
  color: #000;
  display: none;

  @media (min-width: 768px) and (max-width: 1024px) {
    display: block;
    width: 45vw;
    height: 32vh;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    display: block;
    width: 90vw;
    height: 45vh;
  }
`;

const CountryText = styled.span`
  letter-spacing: 3px;
`;

const LeagueText = styled.span`
  font-size: 1.5rem;
  margin-top: 15px;
`;

const GameModalHeader = styled(Header)`
  margin-top: 20px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamScoresContainer = styled.div`
  margin-top: 40px;
  width: 80vw;
`;

const TeamScores = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;

  & > span {
    font-size: 1.5rem;
  }
`;

const GameStatus = styled(Margin)<{ status: string }>`
  font-size: 1.5rem;

  color: ${({ theme, status }) => {
    switch (status) {
      case "FT":
        return theme.colors.green.primary;
      default:
        return theme.colors.yellow.deep;
    }
  }};
`;

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
