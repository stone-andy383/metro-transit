import { Stop } from '@/utils/metroTransitApi'
import { Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import styles from '../app/page.module.css'
import React from 'react';

interface RoutesProps {
  stops: Stop[] | undefined
  direction_id: number
  route_id: string
}
const RouteStops: React.FC<RoutesProps> = ({ stops, direction_id, route_id }) => {

  return (
    <List className={styles.stopList} component="nav" aria-label="Bus stop list">
    {stops?.map((stop, index) => {
      const lastStop = stops.length - 1 !== index
      return(
        <React.Fragment key={stop.place_code}>
          <ListItem>
            <span className={styles.listBullet}>•</span>
            <ListItemButton href={`https://www.metrotransit.org/nextrip/${route_id}/${direction_id}/${stop.place_code}`}>
              <ListItemText primary={stop.description} />
            </ListItemButton>
          </ListItem>
          {lastStop && <Divider />}
        </React.Fragment>
      )
    })}
    </List>
  )
}

export default RouteStops
