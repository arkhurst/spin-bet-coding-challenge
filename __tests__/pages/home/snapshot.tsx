import { customRender } from '@/lib/test-utils'
import { MockRouter } from '@/mocks/MockRouter'
import Home from '@/pages/index'

Element.prototype.scrollIntoView = jest.fn()


it('renders homepage unchanged', () => {
  const { container } = customRender(<MockRouter><Home /></MockRouter>)
  expect(container).toMatchSnapshot()
})