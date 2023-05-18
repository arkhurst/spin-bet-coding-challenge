import sportsData from "@/data/sports.json";
import { filterCounts, gameFilters } from ".";

describe("Game Filters utility Functions", () => {
  it("`gameFilters` returns games sectioned by the status type", () => {
    const gameSections = gameFilters();

    expect(gameSections).toHaveProperty("all");
    expect(gameSections).toHaveProperty("result");
    expect(gameSections).toHaveProperty("live");
    expect(gameSections).toHaveProperty("upcoming");

    expect(gameSections.all.length).toEqual(sportsData.length);
    expect(gameSections.result.length).toEqual(
      sportsData.filter((game) => game.liveStatus === "FT").length
    );
    expect(gameSections.live.length).toEqual(
      sportsData.filter(
        (game) => !["Canceled", "FT", "-"].includes(game.liveStatus)
      ).length
    );
    expect(gameSections.upcoming.length).toEqual(
      sportsData.filter((game) => game.liveStatus === "-").length
    );
  });

  it("`filterCounts` returns the counts sectioned by the status type", () => {
    const counts = filterCounts();

    expect(counts).toHaveProperty("all");
    expect(counts).toHaveProperty("result");
    expect(counts).toHaveProperty("live");
    expect(counts).toHaveProperty("upcoming");

    expect(counts.all).toEqual(sportsData.length);
    expect(counts.result).toEqual(
      sportsData.filter((game) => game.liveStatus === "FT").length
    );
    expect(counts.live).toEqual(
      sportsData.filter(
        (game) => !["Canceled", "FT", "-"].includes(game.liveStatus)
      ).length
    );
    expect(counts.upcoming).toEqual(
      sportsData.filter((game) => game.liveStatus === "-").length
    );
  });
});
