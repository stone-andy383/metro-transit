import { getRoutes } from '@/utils/metroTransitApi'
import Routes from '@/components/selectRoute'

export default async function Home() {
  const routes = await getRoutes()

  return (
    <Routes routes={routes} />
  )
}
