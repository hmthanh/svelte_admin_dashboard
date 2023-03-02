<script lang="ts">
  import { onMount } from "svelte";
  import { formatBytesPerSeconds, getCurrentTime } from "../../helper/utils";
  import { getGradient } from "../Chart/ChartUtils";
  import LineChart from "../Chart/LineChart.svelte";
  import type { IBandwidthType, Series } from "./IDataType";

  let labels: number[] = [];
  let values: number[] = [];
  let gradient, width, height;
  const timeNow = new Date();

  onMount(async () => {
    const response = await fetch(
      "http://10.90.85.9:19040/stats?a=ZDNBandwidth&domain=zadn&minute=1440"
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
    elements: {
      point: {
        radius: 0,
      },
    },
    plugins: {
      colors: {
        enabled: true,
      },
      legend: {
        display: false,
        position: "bottom",
        align: "center",
        labels: {
          font: {
            size: 14,
            family: "Segoe UI",
            weight: "600",
          },
          color: "white",
        },
        title: {},
      },
      title: {
        display: true,
        text: "Thống kê traffic trong ngày (" + getCurrentTime() + ")",
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
          round: "second",
          unit: "hour",
          tooltipFormat: "HH:mm:ss (DD/MM/YYYY)",
          displayFormats: {
            hour: "HH:mm",
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
          maxTicksLimit: 12,
          maxRotation: 0,
          font: {
            size: 14,
            family: "Segoe UI",
            lineHeight: 2,
          },
        },
      },
      y: {
        grid: { color: "rgb(255 255 255 / 0.2)" },
        beginAtZero: false,
        suggestedMin: 0,
        ticks: {
          color: "white",
          font: {
            size: 14,
            family: "Segoe UI",
          },
          callback: function (label) {
            const download = Number(label);
            const newLabel = formatBytesPerSeconds(download);
            return newLabel;
          },
        },
      },
    },
  };
  // ***************** OPTION **********************
</script>

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
          borderWidth: 2.5,
          borderColor: "#5E72E4",
          fill: {
            target: "origin",
            above: function (context) {
              const { ctx, chartArea } = context.chart;
              return getGradient(ctx, chartArea, gradient, width, height);
            },
          },
        },
      ],
    }}
    {options}
  />
</div>
