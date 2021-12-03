import { WorldWideData, CountryDetails, CountryData } from "./MapData";

export type MapDataProp = {
  worldWideData: WorldWideData;
  allCountriesDetails: CountryDetails[];
  allCountries: CountryData[];
  sortedCountries?: CountryData[];
};

export type CasesType = "cases" | "recovered" | "deaths";
