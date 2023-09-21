'use client'
import { Route } from '@/utils/metroTransitApi'
import { useRouter } from 'next/navigation'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

interface RoutesProps {
  routes: Route[] | undefined
  selectedRoute?: string
}
const Routes: React.FC<RoutesProps> = ({ routes, selectedRoute }) => {
  const [route, setRoute] = useState(selectedRoute ?? '');
  const router = useRouter()
  function handleRouteChange(event: SelectChangeEvent) {
    setRoute(event.target.value)
    router.push(`/${event.target.value}`)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <FormControl fullWidth>
        <InputLabel id="routes-label">Route</InputLabel>
        <Select
          labelId="routes-label"
          id="routes-select"
          label="Route"
          value={route}
          // defaultValue={selectedRoute || ''}
          onChange={handleRouteChange}
        >
          {routes?.map((route) => <MenuItem key={route.route_id} value={route.route_id}>{route.route_label}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  )
}

export default Routes