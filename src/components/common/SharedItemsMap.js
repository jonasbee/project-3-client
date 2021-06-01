import React, { useEffect, useState } from 'react'
import ReactMapGl, { Marker, Popup } from 'react-map-gl'

import { getSharedInventoryItems } from '../../lib/api'
import ItemInfo from './map/ItemInfo'
import Pins from './map/Pins'
const mapBoxAccessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

const bounds = [
  // southwest
  [51.271051,-0.515036],
  // northeast
  [51.662160,0.250806]
]

function SharedItemsMap() {
  const [viewport, setViewport] = useState({
    latitude: 50.3647,
    longitude: -355.5811,
    altitude: 0,
    zoom: 6,
    bearing: 0,
    pitch: 0,
  })
  const [sharedItems, setSharedItems] = useState()
  const [popupInfo, setPopupInfo] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSharedInventoryItems()
        console.log(data)
        setSharedItems(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  console.log(sharedItems)

  return (
    <div className="map-container">
      <ReactMapGl
        mapboxApiAccessToken={mapBoxAccessToken}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        width="100%"
        height="100%"
        onViewportChange={(viewport => setViewport(viewport))}
        {...viewport}
        className="is-fullheight-with-navbar"
      >

        {sharedItems && <Pins sharedItemsProp={sharedItems} onClick={setPopupInfo} />}

        {popupInfo && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={Number(popupInfo[0].user.coordinates[1])}
            latitude={Number(popupInfo[0].user.coordinates[0])}
            closeOnClick={false}
            onClose={setPopupInfo}
            key={popupInfo[0].user._id}
            captureScroll={true}
          >
            <div 
              className="content"
              id="items-info"
            >
              <h6>Items {popupInfo[0].user.username.charAt(0).toUpperCase() + popupInfo[0].user.username.slice(1)} is sharing:</h6>
              <ItemInfo key={`${popupInfo[0].user.username}`} items={popupInfo}/>
            </div>
          </Popup>
        )}
      </ReactMapGl>
    </div>
  )
}

export default SharedItemsMap