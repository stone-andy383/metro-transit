import { getDirections, getRoutes } from '@/utils/metroTransitApi'
import Routes from '@/components/selectRoute'
import Directions from '@/components/selectDirection'

export default async function RoutesPage({params}: {params: {route_id: string}}) {
  const routes = await getRoutes()
  const directions = await getDirections(params.route_id)

  return (
    <>
      <Routes routes={routes} selectedRoute={params.route_id} />
      <Directions selectedRoute={params.route_id} directions={directions} />
    </>
  )
}
