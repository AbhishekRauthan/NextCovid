import { MapDataProp } from "@interface/PropType";
import { ChangeEvent, FC, useState } from "react";
import InfoBox from "./InfoBox";
import { CountryData, AllCountriesData } from "@interface/MapData";
import { prettyPrintStat } from "@utils/index";
import axios, { AxiosResponse } from "axios";

type CasesType = "cases" | "recovered" | "deaths";

const CovidMap: FC<MapDataProp> = ({ allCountries, allCountriesData }) => {
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [countryInfo, setCountryInfo] = useState<
    CountryData | AllCountriesData
  >(allCountriesData);
  const [casesType, setCasesType] = useState<CasesType>("cases");

  const onCountryChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    let selected = e.target.value;
    let url =
      selected === "all"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${selected}`;

    await axios
      .get(url)
      .then((response: AxiosResponse<CountryData | AllCountriesData>) => {
        setSelectedCountry(selected);
        setCountryInfo(response.data);
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
            {allCountries.map((country) => (
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
          title="Coronavirus Cases"
          onClick={() => {
            setCasesType("cases");
          }}
          cases={prettyPrintStat(countryInfo.todayCases)}
        />
        <InfoBox
          active={casesType === "recovered"}
          title="Recovered"
          onClick={() => {
            setCasesType("recovered");
          }}
          cases={prettyPrintStat(countryInfo.todayRecovered)}
        />
        <InfoBox
          active={casesType === "deaths"}
          title="Deaths"
          onClick={() => {
            setCasesType("deaths");
          }}
          cases={prettyPrintStat(countryInfo.todayDeaths)}
        />
      </div>
    </div>
  );
};

export default CovidMap;
