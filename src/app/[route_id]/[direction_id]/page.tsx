import { getDirections, getRoutes, getStops } from '@/utils/metroTransitApi'
import Routes from '@/components/selectRoute'
import Directions from '@/components/selectDirection'
import RouteStops from '@/components/routeStops'

export default async function Stops({params}: {params: {route_id: string, direction_id: number}}) {
  const routes = await getRoutes()
  const directions = await getDirections(params.route_id)
  const stops = await getStops(params.route_id, params.direction_id)

  return (
    <>
      <Routes routes={routes} selectedRoute={params.route_id} />
      <Directions directions={directions} selectedRoute={params.route_id} selectedDirection={params.direction_id.toString()} />
      <RouteStops stops={stops} route_id={params.route_id} direction_id={params.direction_id}/>
    </>
  )
}
