import { useGetActiveGameId } from "@/hooks/index";
import styled from "styled-components";
import { useMemo } from "react";
import sportsData from "@/data/sports.json";
import { formatDate } from "@/lib/date-utils";
import { NotFoundWell } from "./NotFound";
import { useRouter } from "next/router";
import { LoadingWell } from "./Loading";
import { DateText, MediumSizeText } from "../atoms";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;

const CountryText = styled.span`
  font-size: 1.2rem;
  letter-spacing: 3px;
`;

const GameStatus = styled(MediumSizeText)<{ status: string }>`
  color: ${({ theme, status }) => {
    switch (status) {
      case "FT":
        return theme.colors.green.primary;
      default:
        return theme.colors.primary;
    }
  }};
`;

const LeagueText = styled(MediumSizeText)`
  margin-top: 15px;
`;

const ScoresText = styled.span`
  font-size: 5rem;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 50px;
`;

const TeamsContainer = styled.span`
  margin-top: 30px;
  display: grid;
  grid-template-columns: 40% auto 40%;
  width: 50vw;
`;

const HomeTeamNameText = styled.span`
  font-size: 1.6rem;
  margin-right: 50px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const AwayTeamNameText = styled.span`
  font-size: 1.6rem;
  margin-left: 70px;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ProgressContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Progress = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  border: 2px solid #5c5b5b;
`;

export function GameView() {
  const { isReady } = useRouter();
  const activeGameId = useGetActiveGameId();

  const game = useMemo(
    () => sportsData.find((game) => game.id === activeGameId),
    [activeGameId, sportsData]
  );

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

  if (!isReady) {
    return (
      <Container>
        <LoadingWell />
      </Container>
    );
  }

  if (!game)
    return (
      <Container>
        <NotFoundWell />
      </Container>
    );

  return (
    <Container>
      <CountryText>{game.country}</CountryText>
      <LeagueText>{game.competition}</LeagueText>
      <DateText status={game.liveStatus}>{gameTime}</DateText>
      <ScoresText>
        {game.homeScore.current ?? 0} - {game.awayScore.current ?? 0}
      </ScoresText>
      <TeamsContainer>
        <HomeTeamNameText>{game.homeTeam.name}</HomeTeamNameText>
        <ProgressContainer>
          <Progress>
            <GameStatus status={game.liveStatus}>
              {statusText}
              {/\d/.test(game.liveStatus) ? "'" : null}
            </GameStatus>
          </Progress>
        </ProgressContainer>
        <AwayTeamNameText>{game.awayTeam.name}</AwayTeamNameText>
      </TeamsContainer>
    </Container>
  );
}
