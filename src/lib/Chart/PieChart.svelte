<script>
  import { Pie } from "svelte-chartjs";
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
  } from "chart.js";
  import { getArcGradient, getGradient, transparentize } from "./ChartUtils";
  const customCanvasBackgroundColor = {
    id: "customCanvasBackgroundColor",
    beforeDraw: (chart, args, options) => {
      const { ctx } = chart;
      ctx.save();
      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = options.color || "#111c44";
      ctx.fillRect(0, 0, chart.width, chart.height);
      ctx.restore();
    },
  };

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    customCanvasBackgroundColor
  );

  // function getGradient(ctx, chartArea) {
  //   const chartWidth = chartArea.right - chartArea.left;
  //   const chartHeight = chartArea.bottom - chartArea.top;
  //   if (!gradient || width !== chartWidth || height !== chartHeight) {
  //     // Create the gradient because this is either the first render
  //     // or the size of the chart has changed
  //     width = chartWidth;
  //     height = chartHeight;
  //     gradient = ctx.createLinearGradient(
  //       0,
  //       chartArea.bottom,
  //       0,
  //       chartArea.top
  //     );
  //     gradient.addColorStop(0, "#3366CC");
  //     gradient.addColorStop(0.5, "#DC3912");
  //     gradient.addColorStop(1, "#FF9900");
  //   }

  //   return gradient;
  // }
  // const cache = new Map();
  let gradient, width, height;


  // function createRadialGradient3(context, c1, c2, c3) {
  //   const chartArea = context.chart.chartArea;
  //   if (!chartArea) {
  //     // This case happens on initial chart load
  //     return;
  //   }

  //   const chartWidth = chartArea.right - chartArea.left;
  //   const chartHeight = chartArea.bottom - chartArea.top;
  //   if (width !== chartWidth || height !== chartHeight) {
  //     cache.clear();
  //   }
  //   let gradient = cache.get(c1 + c2 + c3);
  //   if (!gradient) {
  //     // Create the gradient because this is either the first render
  //     // or the size of the chart has changed
  //     width = chartWidth;
  //     height = chartHeight;
  //     const centerX = (chartArea.left + chartArea.right) / 2;
  //     const centerY = (chartArea.top + chartArea.bottom) / 2;
  //     const r = Math.min(
  //       (chartArea.right - chartArea.left) / 2,
  //       (chartArea.bottom - chartArea.top) / 2
  //     );
  //     const ctx = context.chart.ctx;
  //     gradient = ctx.createRadialGradient(
  //       centerX,
  //       centerY,
  //       0,
  //       centerX,
  //       centerY,
  //       r
  //     );
  //     gradient.addColorStop(0, c1);
  //     gradient.addColorStop(0.5, c2);
  //     gradient.addColorStop(1, c3);
  //     cache.set(c1 + c2 + c3, gradient);
  //   }

  //   return gradient;
  // }

  // QTSC	11
  // ZALO-VNPT HCM	30
  // ZALO-VNPT HN	16
  // VNPT-HN	8
  // FPT-HCM	25
  // FPT-HN	9
  // VIETTEL-HCM	10
  // Sing - OVH	2

  // const data = {
  //   labels: [
  //     "QTSC",
  //     "ZALO-VNPT HCM",
  //     "ZALO-VNPT HN",
  //     "VNPT-HN",
  //     "FPT-HCM",
  //     "FPT-HN",
  //     "VIETTEL-HCM",
  //     "Sing - OVH",
  //   ],
  //   datasets: [
  //     {
  //       label: "# of Votes",
  //       data: [11, 30, 16, 8, 25, 9, 10, 2],
  //       backgroundColor: [
  //         "rgba(255, 0, 55)",
  //         "rgba(0, 153, 255)",
  //         "rgba(255, 183, 0)",
  //         "rgba(0, 255, 255)",
  //         "rgba(85, 0, 255)",
  //         "rgba(255, 128, 0)",
  //       ],
  //       borderColor: ["#ffffff"],
  //       borderWidth: 2,
  //     },
  //   ],
  // };
  // ["QTSC", 11],
  // ["ZALO-VNPT HCM", 30],
  // ["ZALO-VNPT HN", 16],
  // ["VNPT-HN", 8],
  // ["FPT-HCM", 25],
  // ["FPT-HN", 9],
  // ["VIETTEL-HCM", 10],
  // ["Sing - OVH", 2],
  const data = {
    labels: [
      "QTSC",
      "ZALO-VNPT HCM",
      "ZALO-VNPT HN",
      "VNPT-HN",
      "FPT-HCM",
      "FPT-HN",
      "VIETTEL-HCM",
      "Sing - OVH",
    ],
    datasets: [
      {
        label: "Servers",
        data: [11, 30, 16, 8, 25, 9, 10, 2],
        // borderColor:"white",
        borderColor: "#212D63",
        // backgroundColor: [function (context) {
        //   const chart = context.chart;
        //   const { ctx, chartArea } = chart;

        //   if (!chartArea) {
        //     // This case happens on initial chart load
        //     return;
        //   }
        //   return getGradient(ctx, chartArea);
        // }],
        backgroundColor: [
          "#3366CC",
          "#DC3912",
          "#FF9900",
          "#109618",
          "#990099",
          "#0099C6",
          "#DD4477",
          "#676767",
        ],
      },
    ],
  };
</script>

<!-- <div class="p-6 w-full h-full"> -->
<!-- <div class="p-6 chart-containter"> -->
<div
  class="p-6 box-right-containter bg-[#111c44]
border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid  bg-clip-border"
>
  <Pie
    options={{
      // elements: {
      //   arc: {
      //     backgroundColor: function (context) {
      //       let c = colors[context.dataIndex];
      //       if (!c) {
      //         return;
      //       }
      //       if (context.active) {
      //         c = helpers.getHoverColor(c);
      //       }
      //       const mid = helpers
      //         .color(c)
      //         .desaturate(0.2)
      //         .darken(0.2)
      //         .rgbString();
      //       const start = helpers.color(c).lighten(0.2).rotate(270).rgbString();
      //       const end = helpers.color(c).lighten(0.1).rgbString();
      //       return createRadialGradient3(context, start, mid, end);
      //     },
      //   },
      // },
      elements: {
        arc: {
          backgroundColor: function (context) {
            const { ctx, chartArea } = context.chart;
            return getArcGradient(ctx, chartArea, gradient, width, height);
          },
          // colorize.bind(null, false, false),
          // hoverBackgroundColor: hoverColorize,
        },
      },
      borderWidth: 1,
      colors: {
        enabled: true,
      },
      maintainAspectRatio: false,
      animation: {},
      responsive: true,
      scales: {},
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            color: "white",
            font: {
              family: "Segoe UI",
              size: 12,
              weight: "600",
            },
          },
        },
        title: {
          display: true,
          text: "Số lượng Server theo Data Center",
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
        tooltip: {
          enabled: true,
          family: "Segoe UI",
          weight: "600",
        },

        // datalabels: {
        //   formatter: (value: any, context: any) => {
        //     return "hello"; //context.chart.data.labels[context.dataIndex];
        //   }
        // }
      },
    }}
    {data}
  />
</div>

<style>
</style>
