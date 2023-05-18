import userEvent from "@testing-library/user-event";
import sportsData from "@/data/sports.json";
import {
  customRender,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@/lib/test-utils";
import { MockRouter } from "@/mocks/MockRouter";
import { Sidebar } from ".";

/**
 *
 * I intentionally increased the timeout here because I'm literally finding all teams in the array(line 24 through 26) which could take a while.
 * This shouldn't happen if we were dealing with API. We'd be able to mock the data with a tool like MSW
 * and not run an assertion over all the data in the database.
 * */
jest.setTimeout(20000);

Element.prototype.scrollIntoView = jest.fn();

describe("Sidebar Component", () => {
  it("renders successfully", () => {
    customRender(
      <MockRouter>
        <Sidebar />
      </MockRouter>
    );

    expect(screen.getByRole("heading", { name: /all games/i })).toBeVisible();
    expect(
      screen.getByText("List of all games pending, ongoing, canceled or ended.")
    ).toBeVisible();
    expect(screen.getByRole("button", { name: /filter/i })).toBeVisible();

    sportsData.forEach(async (game) => {
      await screen.findAllByText(game.homeTeam.name);
      await screen.findAllByText(game.awayTeam.name);
    });
  });

  it("toggles filter modal", async () => {
    customRender(
      <MockRouter>
        <Sidebar />
      </MockRouter>
    );

    expect(screen.getByRole("heading", { name: /all games/i })).toBeVisible();

    const openModalButton = screen.getByRole("button", { name: /filter/i });

    userEvent.click(openModalButton);

    await waitFor(() =>
      expect(screen.getByRole("heading", { name: /filters/i })).toBeVisible()
    );
    const closeModalButton = screen.getByRole("button", { name: /close/i });
    userEvent.click(closeModalButton);

    await waitForElementToBeRemoved(() =>
      screen.queryByRole("heading", { name: /filters/i })
    );
  });
});
