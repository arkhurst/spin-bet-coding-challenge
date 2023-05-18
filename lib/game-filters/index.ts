import sportsData from "@/data/sports.json";

export const gameFilters = () => {
  const games = {
    all: sportsData,
    result: [],
    live: [],
    upcoming: [],
  };

  sportsData.forEach((game) => {
    if (game.liveStatus === "FT") {
      games.result.push(game);
    } else if (game.liveStatus === "-") {
      games.upcoming.push(game);
    } else if (game.liveStatus === "Canceled") {
    } else games.live.push(game);
  });

  return games;
};

export const filterCounts = () => {
  const games = gameFilters();

  return {
    all: games.all.length,
    result: games.result.length,
    live: games.live.length,
    upcoming: games.upcoming.length,
  };
};
