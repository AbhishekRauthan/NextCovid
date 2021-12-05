import { Dispatch, SetStateAction } from "react";
import {
  WorldWideData,
  CountryDetails,
  CountryData,
  HistoricData,
} from "./MapData";

export type MapPageProp = {
  worldWideData: WorldWideData;
  allCountriesDetails: CountryDetails[];
  allCountries: CountryData[];
  sortedCountries?: CountryData[];
  historicData?: HistoricData;
};

export type CovidMapProps = {
  worldWideData: WorldWideData;
  allCountriesDetails: CountryDetails[];
  allCountries: CountryData[];
  casesType: CasesType;
  setCasesType: Dispatch<SetStateAction<CasesType>>;
};
export type CasesType = "cases" | "recovered" | "deaths";
