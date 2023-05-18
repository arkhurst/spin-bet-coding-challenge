import { customRender, screen } from "@/lib/test-utils";
import { NotFoundWell } from ".";

describe("Not Found Component", () => {
  it("renders successfully", () => {
    customRender(<NotFoundWell />);

    expect(screen.getByLabelText(/Caution Icon/i)).toBeVisible();
    expect(screen.getByRole("heading", { name: /not found/i })).toBeVisible();
    expect(
      screen.getByText(/Sorry, we couldn’t find the game you’re looking for./i)
    ).toBeVisible();
  });
});
