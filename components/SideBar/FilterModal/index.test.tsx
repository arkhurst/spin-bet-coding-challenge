import userEvent from '@testing-library/user-event';
import { customRender, screen, waitFor, waitForElementToBeRemoved } from "@/lib/test-utils"
import { FilterGames } from "."
import { filterCounts } from '@/lib/game-filters';

const setFilter = jest.fn()

describe('Filter Modal', () => {
    it('renders successfully', async () => {
        customRender(<FilterGames setFilter={setFilter} filter={{
            value: 'all',
            label: 'All'
        }} />)

        expect(screen.getByText(/filter/i)).toBeVisible()
        expect(screen.getByLabelText(/filter icon/i)).toBeVisible()
        const button = screen.getByRole('button', { name: /filter/i })
        expect(button).toBeVisible()
    })

    it('toggles the modal', async () => {
        customRender(<FilterGames setFilter={setFilter} filter={{
            value: 'all',
            label: 'All'
        }} />)

        expect(screen.getByText(/filter/i)).toBeVisible()
        expect(screen.getByLabelText(/filter icon/i)).toBeVisible()
        const openModalButton = screen.getByRole('button', { name: /filter/i })

        userEvent.click(openModalButton)

        await waitFor(() => expect(screen.getByRole('heading', { name: /filters/i })).toBeVisible())
        const closeModalButton = screen.getByRole('button', { name: /close/i })
        userEvent.click(closeModalButton)

        await waitForElementToBeRemoved(() => screen.queryByRole('heading', { name: /filters/i }))
    })

    it('selects `live` filter', async () => {
        customRender(<FilterGames setFilter={setFilter} filter={{
            value: 'all',
            label: 'All'
        }} />)

        expect(screen.getByText(/filter/i)).toBeVisible()
        expect(screen.getByLabelText(/filter icon/i)).toBeVisible()
        const openModalButton = screen.getByRole('button', { name: /filter/i })

        userEvent.click(openModalButton)

        await waitFor(() => expect(screen.getByRole('heading', { name: /filters/i })).toBeVisible())

        const counts = filterCounts()

        expect(screen.getByText(/live/i)).toBeVisible()
        expect(screen.getByText(counts.live)).toBeVisible()

        userEvent.click(screen.getByText(/live/i))


        await waitForElementToBeRemoved(() => screen.queryByRole('heading', { name: /filters/i }))


        expect(setFilter).toHaveBeenCalledTimes(1)
        expect(setFilter).toHaveBeenCalledWith({
            value: 'live',
            label: 'Live'
        })
    })
})