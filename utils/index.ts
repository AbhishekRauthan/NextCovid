import numeral from "numeral";

export const prettyPrintStat = (stat: number) =>
  stat > 1000 ? `+${numeral(stat).format("0.0a")}` : `${stat}`;

export const total = (total: number) => numeral(total).format("0.0a");
