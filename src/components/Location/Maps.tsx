import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Fragment, useMemo } from "react";

export function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: import.meta.env.VITE_GOOGLE_ID,
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  const lat = Number(import.meta.env.VITE_MAPS_LAT);
  const lng = Number(import.meta.env.VITE_MAPS_LNG);

  const center = useMemo(() => ({ lat, lng }), []);

  return (
    <Fragment>
      {isLoaded ? (
        <GoogleMap center={center} zoom={20}>
          <Marker position={center} />
          <div className=" min-h-72 md:min-h-96" />
        </GoogleMap>
      ) : (
        <p>Carregando mapa...</p>
      )}
    </Fragment>
  );
}
