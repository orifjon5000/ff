import React from "react";
import { Container } from "./style";
import { Autocomplete, GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const key = process.env.REACT_APP_API_KEY;
console.log(key);
const libraries = ["places"];
function Index() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: key,
    id: "main",
    libraries,
  });
  return (
    <Container className="container">
      {/* <Autocomplete>
        <input type="text" />
      </Autocomplete> */}
      {isLoaded && (
        <GoogleMap
          id="main"
          mapContainerStyle={{ width: "1000px", height: "600px" }}
          zoom={15}
          center={{ lat: 40.11583, lng: 67.84222 }}
        >
          <Marker position={{ lat: 40.11583, lng: 67.84222 }} />
        </GoogleMap>
      )}
    </Container>
  );
}

export default Index;
