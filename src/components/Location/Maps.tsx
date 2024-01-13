import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Fragment, useMemo } from "react";

export function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: import.meta.env.VITE_GOOGLE_ID,
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  const lat = Number(import.meta.env.VITE_MAPS_LAT);
  const lng = Number(import.meta.env.VITE_MAPS_LNG);

  const position = { lat, lng };

  const center = useMemo(() => position, []);

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

/** TODO
 * import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useMemo } from "react";

export function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: import.meta.env.VITE_GOOGLE_ID,
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
  });

  const lat = Number(import.meta.env.VITE_MAPS_LAT);
  const lng = Number(import.meta.env.VITE_MAPS_LNG);

  const position = { lat, lng };

  const center = useMemo(() => ({ lat: -22.873111, lng: -43.7737689 }), []);

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
          }}
          center={position}
          zoom={19}
        >
          <Marker position={{ lat: -22.873111, lng: -43.7737689 }} />
          <div className="min-h-80" />
        </GoogleMap>
      ) : (
        <p>Carregando mapa...</p>
      )}
    </div>
  );
}

 */
