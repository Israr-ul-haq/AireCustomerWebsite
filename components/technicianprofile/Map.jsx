import globalStyles from "../shared/Shared.module.scss";

import { initializeApp } from "firebase/app";
import { db, firebaseConfig } from "../../constants/Firebase";

import {
  collection as fireStoreCollectione,
  query as fireStoreQuery,
  where as fireStoreWhere,
  getDocs as fireStoreDocs,
  onSnapshot,
  doc as fireStoreDoc,
  getFirestore,
  documentId,
} from "firebase/firestore";

import React, { useEffect, useRef, useState } from "react";
import {
  DirectionsRenderer,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

function Map({ data }) {
  const [loader, setLoader] = useState(false);

  const appNew = initializeApp(firebaseConfig);
  const dbNew = getFirestore(appNew);
  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  const [state, setState] = useState({
    directions: null,
    bounds: null,
  });

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDYRy_ggdercsN2hHQ-gmNTu8AhV_mmsq0",
  });
  let directionsService;
  const [destination, setDestination] = useState();

  const [origin, setOrigin] = useState({
    lat: Number(data?.ToLatitude || data?.toLatitude),
    lng: Number(data?.ToLongitude || data?.toLongitude),
  });

  const changeDirection = (origin, destination) => {
    debugger;
    directionsService = new google.maps.DirectionsService();
    if (directionsService) {
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            //changing the state of directions to the result of direction service
            const c = { ...state };
            c.directions = result;
            setState(c);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
    console.log(directionsService);
  };

  useEffect(() => {
    debugger;
    const q = fireStoreQuery(
      fireStoreCollectione(dbNew, "locations"),
      fireStoreWhere(
        documentId(),
        "==",
        JSON.parse(localStorage.getItem("AireTechnicianId"))
      )
    );

    const querySnapshot = fireStoreDocs(q);
    console.log(querySnapshot);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      debugger;
      setLoader(true);
      let locations = {};

      querySnapshot.forEach((doc) => {
        debugger;
        locations = {
          lat: Number(doc.data().latitude),
          lng: Number(doc.data().longitude),
        };
      });
      console.log(locations);
      changeDirection(origin, locations);
      setDestination(locations);
      setLoader(false);
    });
  }, [dbNew]);

  const onLoad = (polyline) => {
    console.log("polyline: ", polyline);
  };
  const pathOptions = {
    visible: false,
  };

  return isLoaded ? (
    <div
      style={{ width: "100%" }}
      className={`${globalStyles.mb_30} ${globalStyles.mt_50}`}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        // center={center}
        zoom={20}
        onProjectionChanged={changeDirection}

        // onUnmount={onUnmount}
      >
        <Marker
          position={origin}
          icon={"http://maps.google.com/mapfiles/kml/paddle/blu-blank.png"}
        />

        <Marker position={destination} />

        {state.directions !== null && (
          <DirectionsRenderer
            directions={state.directions}
            options={{ suppressMarkers: true }}
          />
        )}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default Map;
