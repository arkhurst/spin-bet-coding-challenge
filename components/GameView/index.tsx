import { useGetActiveGameId } from "@/hooks/index";
import { useMemo } from "react";
import sportsData from "@/data/sports.json";
import { formatDate } from "@/lib/date-utils";
import { NotFoundWell } from "./NotFound";
import { useRouter } from "next/router";
import { LoadingWell } from "./Loading";
import { DateText } from "../atoms";
import { CircularProgressBar } from "./Progress";
import {
  Container,
  AwayTeamNameText,
  CountryText,
  HomeTeamNameText,
  LeagueText,
  ProgressContainer,
  ScoresText,
  TeamsContainer,
} from "./index.styles";

export function GameView() {
  const { isReady } = useRouter();
  const activeGameId = useGetActiveGameId();

  const game = useMemo(
    () => sportsData.find((game) => game.id === activeGameId),
    [activeGameId, sportsData]
  );

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
          <CircularProgressBar game={game} />
        </ProgressContainer>
        <AwayTeamNameText>{game.awayTeam.name}</AwayTeamNameText>
      </TeamsContainer>
    </Container>
  );
}
