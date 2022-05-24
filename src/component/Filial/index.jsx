import React from "react";
import { Container } from "./style";
import { useLocation } from "react-router-dom";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const key = process.env.REACT_APP_API_KEY;
console.log(key)
function Index() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: key,
    id: "main",
  });
  return (
    <Container className="container">
      {isLoaded && (
        <GoogleMap
          id="main"
          mapContainerStyle={{ width: "1000px", height: "600px" }}
          zoom={15}
          center={{ lat: 40.11583, lng:  67.84222 }}
        ></GoogleMap>
      )}
    </Container>
  );
}

export default Index;
