import { CountryData } from "@interface/MapData";
import { CasesType } from "@interface/PropType";
import numeral from "numeral";
import { Circle, MapContainer, Popup, TileLayer, useMap } from "react-leaflet";

type Props = {
  countries: CountryData[];
  casesType: CasesType;
  center: {
    lat: number;
    lng: number;
  };
};

const casesTypeColors = {
  cases: {
    hex: "#DC2626",
    multiplier: 200,
  },
  recovered: {
    hex: "#16A34A",
    multiplier: 300,
  },
  deaths: {
    hex: "#475569",
    multiplier: 800,
  },
};

function SetViewOnClick({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}

const LeafletMap = ({ casesType, countries, center }: Props) => {
  return (
    <div className="h-[300px] w-full md:h-[200px] md:w-[800px] mx-auto lg:h-[500px] lg:w-full bg-white shadow-lg p-4 mt-4">
      <MapContainer zoom={3} center={center} className="h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SetViewOnClick coords={center} />
        {countries.map((country) => (
          <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            pathOptions={{
              color: casesTypeColors[casesType].hex,
              fillColor: casesTypeColors[casesType].hex,
            }}
            fillOpacity={0.4}
            radius={
              Math.sqrt(country[casesType]) *
              casesTypeColors[casesType].multiplier
            }
            key={country.country}
          >
            <Popup>
              <div className="w-36">
                <div
                  className="w-24 rounded"
                  style={{
                    backgroundImage: `url(${country.countryInfo.flag})`,
                    width: "100px",
                    borderRadius: "5px",
                  }}
                ></div>
                <div className="text-base font-bold text-gray-800">
                  {country.country}
                </div>
                <div className="">
                  Cases: {numeral(country.cases).format("0,0")}
                </div>
                <div className="">
                  Recovered: {numeral(country.recovered).format("0,0")}
                </div>
                <div className="">
                  Deaths: {numeral(country.deaths).format("0,0")}
                </div>
              </div>
            </Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
