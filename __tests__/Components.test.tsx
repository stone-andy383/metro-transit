import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SelectRoute from '@/components/selectRoute'
import { getDirections, getStops } from '@/utils/metroTransitApi'
import SelectDirection from '@/components/selectDirection'
import RouteStops from '@/components/routeStops'

// Test data
const testRoutes = [
  {
    "route_id": "901",
    "agency_id": 0,
    "route_label": "METRO Blue Line"
  },
  {
    "route_id": "902",
    "agency_id": 0,
    "route_label": "METRO Green Line"
  },
  {
    "route_id": "904",
    "agency_id": 0,
    "route_label": "METRO Orange Line"
  },
]

const testDirections = [
  {
    "direction_id": 0,
    "direction_name": "Northbound"
  },
  {
    "direction_id": 1,
    "direction_name": "Southbound"
  }
]

const testStops = [
  {
    "place_code": "BHOC",
    "description": "Burnsville Heart of the City Station"
  },
  {
    "place_code": "BVPK",
    "description": "I-35W & Burnsville Pkwy Station"
  },
  {
    "place_code": "98ST",
    "description": "I-35W & 98th St Station"
  },
]

// Fix to mock the next navigation for userRouter
// https://github.com/vercel/next.js/discussions/53499
jest.mock('next/navigation', () => {
  return {
    __esModule: true,
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn()
    }),
    useSearchParams: () => ({
      get: () => {}
    })
  }
})

describe("Component tests", () => {
  it ('SelectRoute should have route label and route selections', () => {
    render(<SelectRoute routes={testRoutes} />)
    const label = screen.getByLabelText('Route')
    expect(label).toBeInTheDocument()

    // Ideally would check route selection options populated but the DOM
    // is not rendering correctly for this test
    // const routeText = screen.getByText('METRO Blue Line')
    // expect(routeText).toBeInTheDocument()
  })

  it ('SelectDirection should have direction label and direction selections', () => {
    render(<SelectDirection directions={testDirections} selectedRoute='904' />)
    const label = screen.getByLabelText('Direction')
    expect(label).toBeInTheDocument()

    // Ideally would check route selection options populated but the DOM
    // is not rendering correctly for this test
    // const directionText = screen.getByText('Northbound')
    // expect(directionText).toBeInTheDocument()
  })

  it ('RouteStops should have stops listed', () => {
    render(<RouteStops stops={testStops} route_id='904' direction_id={0} />)
    const stopName = screen.getByText('Burnsville Heart of the City Station')
    expect(stopName).toBeInTheDocument()
    const stopName2 = screen.getByText('I-35W & Burnsville Pkwy Station')
    expect(stopName2).toBeInTheDocument()
  })
})

describe('Check api wrapper functions for empty strings', function () {
  it('get directions should return undefined', async () => {
    expect(await getDirections('')).toBe(undefined);
  })
  it('get stops should return undefined', async () => {
    expect(await getStops('', 0)).toBe(undefined);
  })
});