<script>
  import { Bar } from "svelte-chartjs";
  import { data } from "./data";

  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from "chart.js";

  Chart.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "July",
    "July",
    "July",
    "July",
    "July",
  ];

  // const data = {
  //   labels: labels,
  //   datasets: [
  //     {
  //       label: "My First Dataset",
  //       data: [65, 59, 80, 81, 56, 55, 40],
  //       fill: false,
  //       borderColor: "rgb(75, 192, 192)",
  //       tension: 0.1,
  //     },
  //   ],
  // };
</script>

<div class="p-6 chart-containter">
  <Bar
    {data}
    options={{
      indexAxis: "y",
      width: "100%",
      maintainAspectRatio: false,
      responsive: true,
    }}
    plugins={{
      legend: {
        legend: {
          position: "right",
        },
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
    }}
  />
</div>

<style>
  .chart-containter {
    width: 30vw;
    height: 45vh;
  }
</style>
