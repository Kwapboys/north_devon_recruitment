import React, { useState } from "react";
import clsx from "clsx";
import { toast } from "react-toastify";
import Input from "@/components/forms/Input";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { setKey, fromLatLng } from "react-geocode";
import { GOOGLE_MAPS_API_KEY } from "@/resources/config";
  

const DEFAULT_LATITUDE  = 5.614818;
const DEFAULT_LONGITUDE = -0.205874;

setKey(GOOGLE_MAPS_API_KEY);

export interface IMapInfo {
  lat: number;
  lng: number;
  locationAddress: string;
};

interface IMapSearchProps {
  setMapInfo: React.Dispatch<React.SetStateAction<IMapInfo>>;
  onChange?: (input: Partial<IMapInfo>) => void;
  value?: IMapInfo
};

function MapSearch() {
  const [markerPosition, setMarkerPosition] = useState<{lat: number, lng: number} | undefined>(undefined);
  const [placeName, setPlaceName] = useState("");
  const [mapInfo,setMapInfo] = useState<{lat: number; lng: number , locationAddress: string}>({} as { lat: number; lng: number; locationAddress: string })

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });
  const {
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: {
      location: new window.google.maps.LatLng(DEFAULT_LATITUDE, DEFAULT_LONGITUDE),
      radius: 100 * 1000
    }
  });

  const onMapClick = React.useCallback((e: { latLng: { lat: () => any; lng: () => any; }; }) => {
        
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setMarkerPosition({lat: lat, lng: lng});

    if (setMapInfo) {
      setMapInfo({lat: lat, lng: lng , locationAddress: ""});
    }
        
    fromLatLng(lat, lng).then((resp: any) => {
      setPlaceName(resp.results[0].formatted_address)
      setMapInfo((prev) => ({
        ...prev,
        locationAddress: resp.results[0].formatted_address
      }))
    }).catch((error: any) => {
      toast.error(error);
    });
    
       
  }, []);

   

  return(
    <>
      <div className="col-span-2 space-y-2">
        {/* <Input 
          type="search"
          placeholder="Search for locations on map"
          // append={<SearchIcon className="w-5 h-5 text-gray" />}
          value={placeName}
          onValueChange={(value) =>  {
            setPlaceName(value);
            setValue(value);
          }}
        />    */}
{/*                 
        {(status == "OK" && data?.length)?
          <div
            className={clsx("shadow-xl sticky bg-white z-50 w-[99%]  h-32 text-sm mt-1 mx-auto flex flex-col ",
              "rounded-b-xl overflow-y-scroll  border-x-2 border-b-2 border-solid border-gray-500")}
          >
            {data.map((entry) => {
              return(
                <div 
                  key={entry?.place_id} 
                  className="px-2  w-full py-2 border-b border-solid border-gray-200  hover:bg-slate-100 cursor-pointer"
                  onClick={async() => {
                    setPlaceName(entry?.description);
                    setValue(entry?.description, false);
                    clearSuggestions();
                                                
                    try {
                                                    
                      const results = await getGeocode({address: entry?.description});
                      const { lat, lng } = getLatLng(results[0]);
                      if (setMapInfo) {
                        setMapInfo({lat: lat, lng: lng , locationAddress: results[0].formatted_address});
                      }
                      setMarkerPosition({lat: lat, lng: lng});
                                                                         
                    } catch (error: any) {
                      toast.error(error);
                    }
                                        
                  }}
                >
                  {entry?.description}
                </div>
              );
            })}          
          </div> : <></>
        } */}
                        
                      
        <div className="border-2 w-1/2 rounded-xl h-60 bg-gray-200 flex  justify-center items-center">
          {isLoaded ? (
            <GoogleMap 
            
              id="map"
              mapContainerStyle={{
                width: "100%",
                height: "100%"
              }}
              center={ {
                lat: markerPosition? markerPosition.lat : DEFAULT_LATITUDE,
                lng: markerPosition? markerPosition.lng : DEFAULT_LONGITUDE,
              }}
              options = {{
                disableDefaultUI: true,
                zoomControl: true
              }}
              zoom={10}
              onClick={onMapClick}

            >
                              
                                
              {markerPosition?
                <Marker
                  key={`${markerPosition.lat}-${markerPosition.lng}`}
                  position={{ lat: markerPosition.lat, lng: markerPosition.lng }}           
                >
                  {placeName?.length?
                    <InfoWindow
                      position={{ lat: markerPosition?.lat, lng: markerPosition?.lng }}
                    >
                      <div>{placeName}</div>
                    </InfoWindow> : <></>
                  }
                </Marker> : <></>
              }
            </GoogleMap>
          ) : (
            <h2 className="text-gray-400">
              Not Available
            </h2>
          )}
        </div>
      </div>
    </>
  );
}

export default MapSearch;