import React, { useState, useEffect } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import { useTransition, animated } from "react-spring";
import icon from "./red_pin.png";
import "./styles.css";
import mapboxgl from "mapbox-gl";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
mapboxgl.workerClass = MapboxWorker;

// Mapbox-gl access-token
const access_token =
  "pk.eyJ1Ijoic2F1bGlrIiwiYSI6ImNrcWM4NXJoYzAwdzkybm56djVka2VzZW0ifQ.QmYDZh6DNEwu5ITY9lQ6Ag";

// Kartta default-arvoilla
function Map(props) {
  const [viewport, setViewport] = useState({
    latitude: 62.952544,
    longitude: 26.040375,
    zoom: 5,
    transitionDuration: 500,
  });

  const [paikat, setPaikat] = useState(props.rajatutPaikat);
  const [valittuMarker, setValittuMarker] = useState();
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  // Markereiden fade-in
  const transition = useTransition(paikat[0], {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 500,
  });

  // Päivitetään paikat
  useEffect(() => {
    setPaikat(props.rajatutPaikat);
    setValittuMarker(null);
  }, [props.rajatutPaikat]);

  // Kun koordinaatit muuttuvat, kohdistetaan kartta uuteen sijaintiin
  useEffect(() => {
    if (props.newLat || props.newLong) {
      setValittuMarker(null);
      setViewport({
        latitude: parseFloat(props.newLat),
        longitude: parseFloat(props.newLong),
        zoom: 5,
        transitionDuration: 500,
      });
    }
  }, [props.newLat, props.newLong]);

  // Avaa popup ikkunan
  const naytaPopUp = (paikka) => {
    return (
      <div className="popup">
        <h3>{paikka.nimi}</h3>
        <p>Tyyppi: {paikka.tyyppi}</p>
        <p>Maakunta: {paikka.maakunta}</p>
        <p>Koordinaatit: {paikka.koordinaatti}</p>
      </div>
    );
  };

  // Palauttaa kartan
  return (
    <ReactMapGl
      className="map"
      {...viewport}
      mapboxApiAccessToken={access_token}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      height={715}
      width={800}
      onViewportChange={(viewport) => {
        setViewport(viewport);
      }}
    >
      {/* 
      Jos paikkoja on valittu, lisää markerit
       */}
      {paikat.length > 0 &&
        transition.length > 0 &&
        transition((styles, paikka) => {
          let koord = paikka.koordinaatti.split(",");
          return (
            <animated.div key={paikka.nimi} style={styles}>
              <Marker
                className="markers"
                latitude={parseFloat(koord[0])}
                longitude={parseFloat(koord[1])}
                offsetLeft={-25 / 2}
                offsetTop={-25 / 2}
                onClick={() => {
                  setValittuMarker(paikka);
                  let koordinaatit = paikka.koordinaatti.split(",");
                  setLat(parseFloat(koordinaatit[0]));
                  setLong(parseFloat(koordinaatit[1]));
                }}
              >
                <img className="marker-images" src={icon} alt="no image"></img>
              </Marker>
            </animated.div>
          );
        })}

      {/* 
        Jos markeria on klikattu, avataan popup
        */}
      {valittuMarker && lat && long && (
        <Popup
          latitude={lat}
          longitude={long}
          anchor="bottom"
          offsetTop={-25 / 2}
          onClose={() => setValittuMarker(null)}
        >
          {naytaPopUp(valittuMarker)}
        </Popup>
      )}
    </ReactMapGl>
  );
}

export default Map;
