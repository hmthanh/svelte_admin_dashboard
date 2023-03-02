<script lang="ts">
  import { onMount } from "svelte";
  // import Line from "svelte-chartjs/Line.svelte";

  import { formatBytes } from "../../helper/utils";
  import { getGradient } from "../Chart/ChartUtils";
  import LineChart from "../Chart/LineChart.svelte";
  // import LineChart from "../Chart/Line.svelte";
  import type { IBandwidthType, Series } from "./IDataType";

  let labels: number[] = [];
  let values: number[] = [];
  let width, height, gradient;

  onMount(async () => {
    const response = await fetch(
      "http://10.90.85.9:19040/stats?a=ZDNDataUsage&domain=zadn&day=30"
    );
    const res: IBandwidthType = await response.json();

    if (res) {
      let timestamp: number[] = [];
      let stats: number[] = [];
      res.data.forEach((item: Series) => {
        timestamp.push(item.date);
        stats.push(item.value);
      });
      labels = timestamp;
      values = stats;
    }
  });
  //   const queryResult = useQuery(
  //     "todos",
  //     async () =>
  //       await fetch(
  //         "http://10.90.85.9:19040/stats?a=ZDNBandwidth&domain=zadn&minute=600"
  //       ).then((res) => res.json()),
  //   );

  // ***************** OPTION **********************
  const options = {
    scaleFontColor: "red",
    // elements: {
    //   point: {
    //     radius: 2,
    //   },
    // },
    // data: {
    //   borderColor: '#d346b1',
    //   backgroundColor:"#d346b1",
    //   pointBackgroundColor: "#d346b1",
    //   pointBorderColor: "rgba(255,255,255,0)",
    //   pointHoverBackgroundColor: "#d346b1",
    // },
    chartArea: {
      backgroundColor: "#d346b1",
    },
    animation: {},
    plugins: {
      customCanvasBackgroundColor: {
        color: "#111c44",
      },
      datalabels: {
        anchor: "end",
        align: "top",
        formatter: Math.round,
        font: {
          weight: "bold",
        },
      },
      colors: {
        enabled: true,
      },
      legend: {
        display: false,
        // position: "bottom",
        // align: "center",
        // labels: {
        //   font: {
        //     size: 14,
        //     family: "Segoe UI",
        //     weight: "600",
        //   },
        //   color: "black",
        // },
        // title: {},
      },
      title: {
        display: true,
        text: "Thống kê dữ liệu sử dụng trong tháng",
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
      tooltip: {},
      // ******************** START ZOOM ********************
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "x",
        },
      },
    },
    transitions: {
      zoom: {
        animation: {
          duration: 1000,
          easing: "easeOutCubic",
        },
      },
    },
    // ******************** END ZOOM ********************
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: "index",
    },
    showLine: true,
    scales: {
      x: {
        type: "time",
        time: {
          parser: "DD/MM/YYYY",
          // round: "second",
          unit: "day",
          tooltipFormat: "HH:mm:ss (DD/MM/YYYY)",
          displayFormats: {
            hour: "DD/MM",
          },
          // min: minDate,
          // max: maxDate,
        },
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: true,
          borderDash: [5, 5],
          color: "rgb(255 255 255 / 0.2)",
        },
        ticks: {
          color: "white",
          count: 30,
          maxTicksLimit: 30,
          maxRotation: 0,
          font: {
            size: 14,
            family: "Segoe UI",
            lineHeight: 2,
          },
        },
      },
      y: {
        grid: {
          color: "rgb(255 255 255 / 0.2)",
        },
        beginAtZero: false,
        suggestedMin: 0,
        ticks: {
          color: "white",
          font: {
            size: 14,
            family: "Segoe UI",
          },
          count: 6,
          callback: function (label) {
            const download = Number(label);
            const newLabel = formatBytes(download);
            return newLabel;
          },
        },
      },
    },
  };
  // ***************** OPTION **********************

  // const gradientBg = (ctx: any) => {
  //   const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  //   gradient.addColorStop(0, "rgba(0, 0, 0, 0.1)");
  //   gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
  //   return gradient;
  // };
</script>

<!-- <LineChart
  data={{
    labels,
    datasets: [
      {
        label: "Bandwidth",
        data: values,
        borderWidth: 5,
        // backgroundColor: new Array(values.length).fill(gradientBg),
      },
    ],
  }}
  {options}
/> -->
<div
  class="p-6 box-left-containter bg-[#111c44]
border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid  bg-clip-border"
>
  <LineChart
    data={{
      labels,
      datasets: [
        {
          label: "Bandwidth",
          data: values,
          borderWidth: 5,
          borderColor: "#16BDE4",
          fill: {
            target: "origin",
            above: function (context) {
              const { ctx, chartArea } = context.chart;
              return getGradient(ctx, chartArea, gradient, width, height);
            },
          },
          // fill:"#3366CC",
          // backgroundColor: "#d048b6",
          // borderColor: "#d048b6",
          // pointBackgroundColor: "#d048b6",
          // pointBorderColor: "rgba(255,255,255,0)",
          // pointHoverBackgroundColor: "#d048b6",
        },
      ],
    }}
    {options}
  />
</div>
