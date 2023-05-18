import { ArrowRightIcon, TimeIcon } from "@/components/Icons";
import { Margin } from "@/components/atoms";
import { Game } from "@/data/type";
import Link from "next/link";
import { useMemo } from "react";
import styled from "styled-components";
import { GameViewModal } from "../GameViewModal";
import { useDisclosure } from "@/hooks/useDisclosure";

const Container = styled.div<{ isActive: boolean }>`
  padding: 20px 10px;
  margin-bottom: 13px;
  background: #2e2e2e;
  margin-right: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  transition: background 0.35s ease-in;
  border: ${({ isActive, theme }) =>
    isActive ? `1px solid ${theme.colors.white}` : "unset"};

  &:hover {
    background: black;
  }
`;

const TeamScoresContainer = styled.div`
  flex: 1;
  margin-left: 10px;
  margin-right: 5px;
`;

const TeamScores = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
`;

interface StatusTextProps {
  status: string;
}

const StatusText = styled.div<StatusTextProps>`
  font-size: 0.8rem;
  color: ${({ theme, status }) => {
    switch (status) {
      case "ENDED":
        return theme.colors.green.primary;
      case "CANCELED":
        return theme.colors.red.primary;
      case "UPCOMING":
        return theme.colors.primary;
      default:
        return theme.colors.yellow.deep;
    }
  }};
`;

const StatusContainer = styled(Margin)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
