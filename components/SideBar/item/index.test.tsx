import sportsData from "@/data/sports.json";
import { customRender, screen } from "@/lib/test-utils";
import { SidebarItem } from ".";

const GAME = sportsData[0];
const ONGOING_GAME = sportsData.find((game) => /\d/.test(game.liveStatus));
const HALFTIME_GAME = sportsData.find((game) => game.liveStatus === "HT");
const CANCELED_GAME = sportsData.find((game) => game.liveStatus === "Canceled");
const UPCOMING_GAME = sportsData.find((game) => game.liveStatus === "-");

describe("Sidebar Item", () => {
  it("renders `FT` game successfully", () => {
    customRender(<SidebarItem game={GAME} isActive={false} />);

    expect(screen.getByLabelText(/game icon/i)).toBeVisible();
    expect(screen.getByText(GAME.homeTeam.name)).toBeVisible();
    expect(screen.getByText(GAME.awayTeam.name)).toBeVisible();
    expect(screen.getAllByText("0")).toHaveLength(2);
    expect(screen.getByText("ENDED")).toBeVisible();
  });

  it("renders `ONGOING` game successfully", () => {
    customRender(<SidebarItem game={ONGOING_GAME} isActive={false} />);

    expect(screen.getByLabelText(/game icon/i)).toBeVisible();
    expect(screen.getByText(ONGOING_GAME.homeTeam.name)).toBeVisible();
    expect(screen.getByText(ONGOING_GAME.homeScore.current)).toBeVisible();
    expect(screen.getByText(ONGOING_GAME.awayTeam.name)).toBeVisible();
    expect(screen.getByText(ONGOING_GAME.awayScore.current)).toBeVisible();
    expect(screen.getByText(`${ONGOING_GAME.liveStatus} mins`)).toBeVisible();
  });

  it("renders `HALFTIME` game successfully", () => {
    customRender(<SidebarItem game={HALFTIME_GAME} isActive={false} />);

    expect(screen.getByLabelText(/game icon/i)).toBeVisible();
    expect(screen.getByText(HALFTIME_GAME.homeTeam.name)).toBeVisible();
    expect(screen.getByText(HALFTIME_GAME.awayTeam.name)).toBeVisible();
    expect(screen.getAllByText("0")).toHaveLength(2);
    expect(screen.getByText("HALFTIME")).toBeVisible();
  });

  it("renders `CANCELED` game successfully", () => {
    customRender(<SidebarItem game={CANCELED_GAME} isActive={false} />);

    expect(screen.getByLabelText(/game icon/i)).toBeVisible();
    expect(screen.getByText(CANCELED_GAME.homeTeam.name)).toBeVisible();
    expect(screen.getByText(CANCELED_GAME.awayTeam.name)).toBeVisible();
    expect(screen.getAllByText("-")).toHaveLength(2);
    expect(screen.getByText("CANCELED")).toBeVisible();
  });

  it("renders `UPCOMING` game successfully", () => {
    customRender(<SidebarItem game={UPCOMING_GAME} isActive={false} />);

    expect(screen.getByLabelText(/game icon/i)).toBeVisible();
    expect(screen.getByText(UPCOMING_GAME.homeTeam.name)).toBeVisible();
    expect(screen.getByText(UPCOMING_GAME.awayTeam.name)).toBeVisible();
    expect(screen.getAllByText("-")).toHaveLength(2);
    expect(screen.getByText("UPCOMING")).toBeVisible();
  });
});
