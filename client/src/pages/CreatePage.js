import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as posData from "./data/position.json";
import { Footer } from "../components/Footer";

export function CreatePage() {
const [viewport, setViewport] = useState({
    latitude: 64.00028,
    longitude: -150.00028,
    width: "100vw",
    height: "100vh",
    zoom: 4
  });
  const [selectedPos, setSelectedPos] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPos(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={"pk.eyJ1IjoidmluY2xvdSIsImEiOiJja2FodmNubzcwcDR3MzRuazF3c2c5dTVxIn0.xbappwXp12q4qx14AIezWA"}
        mapStyle="mapbox://styles/minlu360/ckaj6ywri1juw1im8dtspsf51"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {posData.features.map(pos => (
          <Marker
            key={pos.properties.Pos_ID}
            latitude={pos.geometry.coordinates[0]}
            longitude={pos.geometry.coordinates[1]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPos(pos);
              }}
            >
              <img style={{width: "50px"}}  src="https://is2-ssl.mzstatic.com/image/thumb/Purple20/v4/96/b5/14/96b5147f-1b36-9b01-6c77-ec6e91a98b83/source/256x256bb.jpg" alt="Picture" />
            </button>
          </Marker>
        ))}

        {selectedPos ? (
          <Popup
            latitude={selectedPos.geometry.coordinates[0]}
            longitude={selectedPos.geometry.coordinates[1]}
            onClose={() => {
              setSelectedPos(null);
            }}
          >
            <div>
              <h2>{selectedPos.properties.NAME}</h2>
             {/* <p>{selectedPos.properties.DESCRIPTIO}</p> */}
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
      <Footer/>
    </div>
  );
}

export default CreatePage;