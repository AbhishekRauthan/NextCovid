import { CovidMapProps, CasesType } from "@interface/PropType";
import { ChangeEvent, FC, useState } from "react";
import InfoBox from "./InfoBox";
import Loading from "./Loading";
import dynamic from "next/dynamic";
import { CountryData, WorldWideData } from "@interface/MapData";
import { prettyPrintStat, total } from "@utils/index";
import axios, { AxiosResponse } from "axios";

const LeafletMap = dynamic(() => import("@components/LeafletMap"), {
  loading: () => <Loading />,
  ssr: false,
});

const CovidMap: FC<CovidMapProps> = ({
  allCountriesDetails,
  worldWideData,
  allCountries,
  casesType,
  setCasesType,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [center, setCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [countryInfo, setCountryInfo] = useState<CountryData | WorldWideData>(
    worldWideData
  );

  const onCountryChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    let selected = e.target.value;
    let url =
      selected === "all"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${selected}`;

    await axios.get(url).then((response: AxiosResponse<any>) => {
      setSelectedCountry(selected);
      setCountryInfo(response.data);
      setCenter({
        lat: response.data?.countryInfo?.lat
          ? response.data.countryInfo.lat
          : 34.80746,
        lng: response.data?.countryInfo?.long
          ? response.data.countryInfo.long
          : -40.4796,
      });
    });
  };

  return (
    <div className="col-span-4 bg-gray-200 pt-5">
      <div className="flex justify-between items-center px-10">
        <h1 className="text-4xl block text-gray-800">World Map</h1>
        <div className="flex flex-grow items-baseline justify-end">
          <p className="mr-5">Select to see worldwide data or country wise:</p>
          <select
            className="bg-white text-xl p-2 max-w-[15rem] rounded border border-transparent focus:border-blue-400"
            onChange={onCountryChange}
          >
            <option value="all">World Wide</option>
            {allCountriesDetails.map((country) => (
              <option value={country.value} key={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex justify-evenly items-center mt-10">
        <InfoBox
          active={casesType === "cases"}
          title="Cases"
          onClick={() => {
            setCasesType("cases");
          }}
          total={total(countryInfo.cases)}
          cases={prettyPrintStat(countryInfo.todayCases)}
        />
        <InfoBox
          active={casesType === "recovered"}
          title="Recovered"
          onClick={() => {
            setCasesType("recovered");
          }}
          total={total(countryInfo.recovered)}
          cases={prettyPrintStat(countryInfo.todayRecovered)}
        />
        <InfoBox
          active={casesType === "deaths"}
          title="Deaths"
          onClick={() => {
            setCasesType("deaths");
          }}
          cases={prettyPrintStat(countryInfo.todayDeaths)}
          total={total(countryInfo.deaths)}
        />
      </div>
      <div className="flex justify-center">
        <LeafletMap
          casesType={casesType}
          countries={allCountries}
          center={center}
        />
      </div>
    </div>
  );
};

export default CovidMap;
