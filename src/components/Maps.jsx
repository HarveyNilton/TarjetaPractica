import React, { useEffect } from 'react';

import {
    MapContainer,
    Marker,
    TileLayer,
    Popup,
    CircleMarker
  } from "react-leaflet";
  import "leaflet/dist/leaflet.css";



const Maps = () => {
useEffect(()=>{
  initMap()
},[])

  return (
    <div id='map'></div>
    
  )

   /* const svgMarker = {
        path:"M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
        fillColor: "blue",
        fillOpacity: 0.6,
        strokeWeight: 0,
        rotation: 0,
        scale: 2
        // anchor: new google.maps.Point(15, 30),
      };

    return (
       <div  >
        <MapContainer className='map'
        style={{ width: "90%", height: "40vh" }}
        zoom={16}
        center={[-3.761259, -73.268645]}
        scrollWheelZoom={false}
        fadeAnimation={true}
        markerZoomAnimation={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       {  <CircleMarker
          center={[-3.761259, -73.268645]}
          color={"#000000"}
          fillColor={"#FDD876"}
          stroke={true}
          fillOpacity={true}
          weight={1}
          icon={svgMarker}
    />}
        
       {<Marker position={[-3.761259, -73.268645]}/> }

      </MapContainer>
      
       </div>
       
    );
    */
};

function initMap() {
  // The location of Uluru
  const uluru = { lat: -3.752885, lng: -73.2673747 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: uluru,
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "",
    disableAutoPan: true,
  });

   
    const label = "Bienvenido! a mi Casa";
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
      optimized: false,
    })
    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.setContent(label);
      infoWindow.open(map, marker);
    });
    
}

  /*// The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    icon: '/com.png',
    map: map,

    optimized: false,
  });

  marker.addListener("click", () => {
      alert(marker.getTitle())
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
}
*/

export default Maps;