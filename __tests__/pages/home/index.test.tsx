import userEvent from '@testing-library/user-event';
import { customRender, screen, waitFor, waitForElementToBeRemoved } from "@/lib/test-utils"
import sportsData from '@/data/sports.json'
import { MockRouter } from '@/mocks/MockRouter'
import Home from '@/pages/index'

const GAME = sportsData[0]
const GAME_2 = sportsData[1]
Element.prototype.scrollIntoView = jest.fn()

describe('Home', () => {
  it('renders game 1 as default successfully', async () => {
    customRender(<MockRouter><Home /></MockRouter>)

    expect(screen.getByRole('heading', { name: /all games/i })).toBeVisible()
    expect(screen.getByText('List of all games pending, ongoing, canceled or ended.')).toBeVisible()
    expect(screen.getByRole('button', { name: /filter/i })).toBeVisible()

    await screen.findAllByText(GAME.homeTeam.name)
    await screen.findAllByText(GAME.awayTeam.name)
    expect(screen.getByText(GAME.country)).toBeVisible()
    expect(screen.getByText(GAME.competition)).toBeVisible()
    expect(screen.getByText(`${GAME.homeScore.current} - ${GAME.awayScore.current}`)).toBeVisible()
    expect(screen.getByText("FT")).toBeVisible()
  })

  it('renders game 2 as default successfully', async () => {
    customRender(<MockRouter query={{ game: GAME_2.id }}><Home /></MockRouter>)

    expect(screen.getByRole('heading', { name: /all games/i })).toBeVisible()
    expect(screen.getByText('List of all games pending, ongoing, canceled or ended.')).toBeVisible()
    expect(screen.getByRole('button', { name: /filter/i })).toBeVisible()

    await screen.findAllByText(GAME_2.homeTeam.name)
    await screen.findAllByText(GAME_2.awayTeam.name)
    expect(screen.getByText(GAME_2.country)).toBeVisible()
    expect(screen.getByText(GAME_2.competition)).toBeVisible()
    expect(screen.getByText(`${GAME_2.homeScore.current} - ${GAME_2.awayScore.current}`)).toBeVisible()
    expect(screen.getByText("FT")).toBeVisible()
  })

  it('toggles filter modal', async () => {
    customRender(<MockRouter><Home /></MockRouter>)

    expect(screen.getByRole('heading', { name: /all games/i })).toBeVisible()

    const openModalButton = screen.getByRole('button', { name: /filter/i })

    userEvent.click(openModalButton)

    await waitFor(() => expect(screen.getByRole('heading', { name: /filters/i })).toBeVisible())
    const closeModalButton = screen.getByRole('button', { name: /close/i })
    userEvent.click(closeModalButton)

    await waitForElementToBeRemoved(() => screen.queryByRole('heading', { name: /filters/i }))
  })
})