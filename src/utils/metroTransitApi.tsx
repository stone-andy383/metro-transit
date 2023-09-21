// Define the metro transit api data strucuture based on the schemas
// provided on their site https://svc.metrotransit.org/swagger/index.html
export interface Route {
  route_id?: string
  agency_id: number
  route_label?: string
}
export interface Direction {
  direction_id: number
  direction_name?: string
}
export interface Stop {
  place_code?: string
  description?: string
}

// MN Metro Transit URL
const metroBaseUrl = 'https://svc.metrotransit.org/nextrip'

// Retrieve data from the api.  Cache requests, revalidating after 1 day
async function apiRequest<T>(url: string) {
  return await fetch(url, {next: {revalidate: 86400}})
  .then((res) => res.json() as T)
  .catch((error) => {
    console.log(error)
    return undefined
  })
} 

// Retrieve metro transit routes
export const getRoutes = async () => {
  return apiRequest<Route[]>(`${metroBaseUrl}/routes`)
}

// Retrieve metro transit directions for given route
export const getDirections = async (route_id: string) => {
  if (route_id) {
    return apiRequest<Direction[]>(`${metroBaseUrl}/directions/${route_id}`)
  } else {
    return undefined
  }
}

// Retrieve metro transit stops for given route and direction
export const getStops = async (route_id: string, direction_id: number) => {
  if (route_id && !isNaN(direction_id)) {
  return apiRequest<Stop[]>(`${metroBaseUrl}/stops/${route_id}/${direction_id}`)
  } else {
    return undefined
  }
}