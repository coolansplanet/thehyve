import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { chartConfig, chartOptions } from "../constants";

const Chart = props => {
  const [data, setData] = useState({
    datasets: [{ ...chartConfig, data: [] }],
    labels: ["Free bikes"]
  });

  const { network } = props;
  useEffect(() => {
    if (network && network.stations) {
      const dataset = [];
      const labels = [];
      network.stations.forEach(oneStation => {
        const { name, free_bikes: freeBikes } = oneStation;
        dataset.push(freeBikes);
        labels.push(name);
        setData({
          datasets: [
            {
              ...chartConfig,
              data: dataset
            }
          ],
          labels: labels
        });
      });
    }
  }, [props.network]);

  return (
    <React.Fragment>
      {network && (
        <Line data={data} width={700} height={450} options={chartOptions} />
      )}
    </React.Fragment>
  );
};

export default Chart;
