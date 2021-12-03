import { CountryData } from "@interface/MapData";
import numeral from "numeral";

export const prettyPrintStat = (stat: number) =>
  stat > 1000 ? `+${numeral(stat).format("0.0a")}` : `${stat}`;

export const total = (total: number) => numeral(total).format("0.0a");

export const sortData = (data: CountryData[]) => {
  let sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};
