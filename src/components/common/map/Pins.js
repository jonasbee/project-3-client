import * as React from 'react'
import { Marker } from 'react-map-gl'

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`

const SIZE = 20

// ! parameters(/props) need to have same name 
// ! as props in return JSX
function Pins({ sharedItemsProp, onClick }) {
  
  return (
    sharedItemsProp.map(items => {
      console.log('coordinates:',items[0].user.coordinates[1])
      console.log('array of items per user:', items)
      return (
        <Marker
          key={`${items[0].user.username}`}
          longitude={Number(`${items[0].user.coordinates[1]}`)}
          latitude={Number(`${items[0].user.coordinates[0]}`)}
        >
          <svg
            height={SIZE}
            viewBox="0 0 24 24"
            style={{
              cursor: 'pointer',
              fill: '#d00',
              stroke: 'none',
              transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
            }}
            onClick={() => onClick(items)}
          >
            <path d={ICON} />
          </svg>
        </Marker>
      )
    })
  )
}

export default React.memo(Pins)