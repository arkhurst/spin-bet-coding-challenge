import { useRouter } from "next/router";
import { useMemo } from "react";
import sportsData from "@/data/sports.json";

export const useGetActiveGameId = () => {
  const { query, isReady } = useRouter();
  const { game } = query;

  const activeGame = useMemo(() => {
    if (isReady) {
      if (!game) {
        // When no game is selected, make the first game active.
        return sportsData[0].id;
      }

      if (Array.isArray(game)) {
        // When multiple games are passed, use the first one.
        return game[0];
      }

      return game;
    }
  }, [game, isReady]);

  return activeGame;
};
