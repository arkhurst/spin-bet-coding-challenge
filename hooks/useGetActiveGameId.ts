import { useRouter } from "next/router";
import { useMemo } from "react";
import sportsData from "@/data/sports.json";

export const useGetActiveGameId = () => {
  const { query } = useRouter();
  const { game } = query;

  const activeGame = useMemo(() => {
    if (!game) {
      // When no game is selected, make the first game active.
      return sportsData[0].id;
    }
    if (Array.isArray(game)) {
      // When multiple games are passed, use the first one.
      // Example: ?game=game1&game=sdgsg&game=sdgsd
      return game[0];
    }

    return game;
  }, [game]);

  return activeGame;
};
