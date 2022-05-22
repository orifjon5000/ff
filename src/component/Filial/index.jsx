import React from "react";
import { Container } from "./style";
import { useLocation } from "react-router-dom";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const key = "AIzaSyAgPyjTkq0DrZk0eLdlVtxlyxQjb56-glw";

function Index() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: key,
    id: "main",
  });
  return (
    <Container>
      {isLoaded && (
        <GoogleMap
          id="main"
          mapContainerStyle={{ width: "1000px", height: "600px" }}
          zoom={4}
          center={{ lat: 41.311081, lang: 69.240562 }}
        ></GoogleMap>
      )}
    </Container>
  );
}

export default Index;
