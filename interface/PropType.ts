import {
  WorldWideData,
  CountryDetails,
  CountryData,
  HistoricData,
} from "./MapData";

export type MapDataProp = {
  worldWideData: WorldWideData;
  allCountriesDetails: CountryDetails[];
  allCountries: CountryData[];
  sortedCountries?: CountryData[];
  historicData?: HistoricData;
};

export type CasesType = "cases" | "recovered" | "deaths";
