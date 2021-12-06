import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { HistoricData } from "@interface/MapData";
import { CasesType } from "@interface/PropType";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const buildChartData = (data: HistoricData, casesType: CasesType) => {
  let chartData = [];
  let lastDataPoint: number;
  for (let date in data[casesType]) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

type Props = {
  historicData: HistoricData;
  casesType: CasesType;
};

function lineColor(caseType: CasesType) {
  switch (caseType) {
    case "cases":
      return "#DC2626";
    case "recovered":
      return "#16A34A";
    case "deaths":
      return "#475569";
  }
}

function LineGraph({ casesType, historicData }: Props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    let newData = buildChartData(historicData, casesType);
    setData(newData);
  }, [casesType]);

  return (
    <div>
      {data?.length > 0 ? (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: lineColor(casesType),
                borderColor: lineColor(casesType),
                data: data,
                fill: true,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: `Past 120 days ${casesType}`,
              },
            },
          }}
        />
      ) : (
        <div className="w-full text-center">
          <h1 className="text-2xl text-gray-800 font-source capitalize">
            Data unavailable
          </h1>
        </div>
      )}
    </div>
  );
}

export default LineGraph;
