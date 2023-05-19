import { MockRouter } from "@/mocks/MockRouter";
import { customRender, screen } from "@/lib/test-utils";
import sportsData from "@/data/sports.json";
import { GameView } from ".";

const GAME = sportsData[0];
const ONGOING_GAME = sportsData.find((game) => /\d/.test(game.liveStatus));
const CANCELED_GAME = sportsData.find((game) => game.liveStatus === "Canceled");

describe("Game View Component", () => {
  it("renders `FT` game successfully", () => {
    customRender(
      <MockRouter>
        <GameView />
      </MockRouter>
    );

    expect(screen.getByText(GAME.country)).toBeVisible();
    expect(screen.getByText(GAME.competition)).toBeVisible();
    expect(screen.getByText("ENDED")).toBeVisible();
    expect(screen.getByText("0 - 0")).toBeVisible();
    expect(screen.getByText(GAME.homeTeam.name)).toBeVisible();
    expect(screen.getByText("FT")).toBeVisible();
    expect(screen.getByText(GAME.awayTeam.name)).toBeVisible();
  });

  it("renders `CANCELED` game successfully", () => {
    customRender(
      <MockRouter query={{ game: CANCELED_GAME.id }}>
        <GameView />
      </MockRouter>
    );

    expect(screen.getByText(CANCELED_GAME.country)).toBeVisible();
    expect(screen.getByText(CANCELED_GAME.competition)).toBeVisible();
    expect(screen.getByText("CANCELED")).toBeVisible();
    expect(screen.getByText("0 - 0")).toBeVisible();
    expect(screen.getByText(CANCELED_GAME.homeTeam.name)).toBeVisible();
    expect(screen.getByText(CANCELED_GAME.awayTeam.name)).toBeVisible();
  });

  it("renders `ONGOING` game successfully", () => {
    customRender(
      <MockRouter query={{ game: ONGOING_GAME.id }}>
        <GameView />
      </MockRouter>
    );

    expect(screen.getByText(ONGOING_GAME.country)).toBeVisible();
    expect(screen.getByText(ONGOING_GAME.competition)).toBeVisible();
    expect(screen.getByText("LIVE")).toBeVisible();
    expect(
      screen.getByText(
        `${ONGOING_GAME.homeScore.current} - ${ONGOING_GAME.awayScore.current}`
      )
    ).toBeVisible();
    expect(screen.getByText(ONGOING_GAME.homeTeam.name)).toBeVisible();
    expect(screen.getByText(`${ONGOING_GAME.liveStatus}'`)).toBeVisible();
    expect(screen.getByText(ONGOING_GAME.awayTeam.name)).toBeVisible();
  });

  it("renders not found state", () => {
    customRender(
      <MockRouter query={{ game: "not-found" }}>
        <GameView />
      </MockRouter>
    );

    expect(screen.getByLabelText(/Caution Icon/i)).toBeVisible();
    expect(screen.getByRole("heading", { name: /not found/i })).toBeVisible();
    expect(
      screen.getByText(/Sorry, we couldn’t find the game you’re looking for./i)
    ).toBeVisible();
  });
});
