import { customRender, screen } from "@/lib/test-utils"
import { LoadingWell } from '.'


describe('Loading Component', () => {
    it('renders successfully', () => {
        customRender(<LoadingWell />)

        expect(screen.getByText(/loading.../i)).toBeVisible()
    })
})