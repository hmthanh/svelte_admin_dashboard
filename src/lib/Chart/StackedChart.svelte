<script>
  import { Bar } from "svelte-chartjs";

  import {
    Chart,
    Colors,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    Filler,
  } from "chart.js";
  // import { getGradient } from "./ChartUtils";

  Chart.register(
    Colors,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    Filler
  );

  const labels = [
    "QTSC",
    "FPT-HCM",
    "ZALO VNPT-HCM",
    "VIETTEL-HCM",
    "VNPT-HN",
    "ZALO VNPT-HN",
    "FPT-HN",
  ];

  let gradient, width, height;

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Usage",
        data: [90, 240, 300, 100, 100, 160, 80],
        backgroundColor: "red",
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 4,
        shadowColor: "rgba(31,49,80,0.48)",
        // color:"red",
        // borderColor: "rgb(75, 192, 192)",
        // tension: 0.1,
      },
      {
        label: "Remain Capacity",
        data: [2.53, 107.4, 157.68, 16.32, 49.33, 112.01, 56.04],
        // backgroundColor: function (context) {
        //   const { ctx, chartArea } = context.chart;
        //   return getGradient(ctx, chartArea, gradient, width, height);
        // },
        backgroundColor: "#3366CC",
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 4,
        shadowColor: "rgba(31,49,80,0.48)",
        // borderColor: "rgb(75, 192, 192)",
        // tension: 0.1,
      },
    ],
  };
</script>

<div
  class="p-6 box-right-containter bg-[#111c44]
border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid  bg-clip-border"
>
  <Bar
    {data}
    options={{
      width: "100%",
      maintainAspectRatio: false,
      responsive: true,
      // x:{
      //   stacked: true,
      // },
      scales: {
        x: {
          // stacked: true,
          grid: {
            color: "rgb(255 255 255 / 0.2)",
          },
          ticks: {
            color: "white",
            font: {
              size: 14,
              family: "Segoe UI",
            },
          },
        },
        y: {
          grid: {
            color: "rgb(255 255 255 / 0.2)",
          },
          ticks: {
            color: "white",
            font: {
              size: 14,
              family: "Segoe UI",
            },
          },
        },
      },

      plugins: {
        colors: {
          enabled: true,
        },
        legend: {
          position: "bottom",
          labels: {
            font: {
              size: 14,
              family: "Segoe UI",
              weight: "600",
            },
            color: "white",
          },
        },
        title: {
          display: true,
          text: "Data usage theo Data Center",
          font: {
            size: 20,
            family: "Segoe UI",
            weight: "600",
          },
          padding: {
            bottom: 20,
          },
          color: "white",
        },
      },
    }}
  />
</div>

<style>
</style>
