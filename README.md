# Metro-Transit
Code challenge to develop a site that pulls in bus routes and stop locations from MN metro transit bus line API

Metro transit API docs: https://svc.metrotransit.org/swagger/index.html

## Setup

1. Clone the code repository: `git clone https://github.com/stone-andy383/metro-transit.git`
1. Move into the project root directory: `cd metro-transit`
1. Install dependencies: `yarn`
1. Run app in development mode: `yarn dev`
1. View site http://localhost:3000

## Testing

- Run tests: `yarn test`
- Run tests in watch mode `yarn test:watch`

## Project Assumptions

- Bus routes, directions, and stops will not change often.  Caching of API data is setup with revalidation daily
- Metro transit will not change their API endpoints