import { ArrowRightIcon, TimeIcon } from "@/components/Icons";
import { Margin } from "@/components/atoms";
import { Game } from "@/data/type";
import Link from "next/link";
import { useMemo } from "react";
import {
  Container,
  StatusContainer,
  StatusText,
  TeamScores,
  TeamScoresContainer,
} from "./index.styles";
import { GameViewModal } from "../GameViewModal";
import { useDisclosure } from "@/hooks/useDisclosure";

interface Props {
  game: Game;
  isActive: boolean;
}

export function SidebarItem({ game, isActive }: Props) {
  const { isOpen, toggle } = useDisclosure();

  const statusText = useMemo(() => {
    if (game.liveStatus === "FT") {
      return "ENDED";
    }

    if (game.liveStatus === "HT") {
      return "HALFTIME";
    }

    if (game.liveStatus === "-") {
      return "UPCOMING";
    }

    if (game.liveStatus === "Canceled") {
      return "CANCELED";
    }
    return game.liveStatus;
  }, [game]);

  return (
    <>
      <Link id={game.id} href={`?game=${game.id}`} onClick={toggle}>
        <Container isActive={isActive}>
          <TimeIcon status={statusText} />
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
            <StatusContainer top={15} left={10}>
              <StatusText status={statusText}>
                {statusText} {/\d/.test(statusText) ? "mins" : null}
              </StatusText>
              <ArrowRightIcon />
            </StatusContainer>
          </TeamScoresContainer>
        </Container>
      </Link>
      {isOpen ? <GameViewModal game={game} onClose={toggle} /> : null}
    </>
  );
}
