import numeral from "numeral";

export const prettyPrintStat = (stat: number) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";
