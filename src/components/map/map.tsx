import React, { FC } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '200px'
};


interface MapProps {
  lat: number;
  lng: number;
}

const Map: FC<MapProps> = ({ lat, lng}) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyD6pDR59P2PDVD5p02BH40VBvPHZaCK80c"
  })

  const [, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds({ lat, lng});
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback() {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={2}
      center={{ lat, lng}}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={{lat, lng}} />
    </GoogleMap>
  ) : null
}

export default React.memo(Map)
