'use client'
import { Direction } from '@/utils/metroTransitApi'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface DirectionsProps {
  directions: Direction[] | undefined
  selectedRoute: string
  selectedDirection?: string
}
const Directions: React.FC<DirectionsProps> = ({ directions, selectedRoute, selectedDirection }) => {
  const [direction, setDirection] = useState(selectedDirection ?? '');
  const router = useRouter()

  function handleDirectionChange(event: SelectChangeEvent) {
    setDirection(event.target.value)
    router.push(`/${selectedRoute}/${event.target.value}`)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <FormControl fullWidth>
        <InputLabel id="directions-label">Direction</InputLabel>
        <Select
          labelId="directions-label"
          id="directions-select"
          label="Direction"
          value={direction}
          onChange={handleDirectionChange}
        >
          {directions?.map((direction) => <MenuItem key={direction.direction_id} value={direction.direction_id}>{direction.direction_name}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  )
}

export default Directions