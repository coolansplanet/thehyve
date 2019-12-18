export const chartConfig = {
  borderColor: "#f6511d",
  backgroundColor: "rgba(246,81,29,0.3)",
  label: "Free bikes"
};
export const chartOptions = {
  responsive: false,
  scales: {
    xAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: ""
        },
        gridLines: {
          drawOnChartArea: false
        }
      }
    ],
    yAxes: [
      {
        display: true,
        scaleLabel: {
          display: true,
          labelString: ""
        }
      }
    ]
  }
};
