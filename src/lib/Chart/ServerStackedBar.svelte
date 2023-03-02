<script lang="ts">
  import "@google-web-components/google-chart";
  // export let cols: {
  //   label: string;
  //   type: string;
  // }[] = [];
  // export let rows: [string, number][] = [];
  export let title: String = "";
  export let sliceVisibilityThreshold: number = 0;
  // const options = GoogleChart.options;
  // options.vAxis.logScale = true;
  // googleChart.options = options;
  const cols: {
    label: string;
    type: string;
  }[] = [
    { label: "Cluster", type: "string" },
    { label: "Usage", type: "number" },
    { label: "Remain Capacity", type: "number" },
  ];
  const rows: [string, number, number][] = [
    ["QTSC", 2.53, 90],
    ["FPT-HCM", 107.4, 240],
    ["ZALO VNPT-HCM", 157.68, 300],
    ["VIETTEL-HCM", 16.32, 100],
    ["VNPT-HN", 49.33, 100],
    ["ZALO VNPT-HN", 112.01, 160],
    ["FPT-HN", 56.04, 80],
  ];
</script>

<!-- <div class="p-6 chart-containter"> -->
<div
  class="p-6 chart-containter bg-[#111c44]
border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid  bg-clip-border"
>
  <google-chart
    type="column"
    {cols}
    {rows}
    options={{
      // backgroundColor: '#E4E4E4',
      // backgroundColor: "green",
      annotations: {
        alwaysOutside: true,
        textStyle: {
          fontSize: 14,
          color: "#000",
          auraColor: "none",
        },
      },
      chartArea: {
        left: 0,
        top: 0,
        width: "99%",
        height: "80%",
      },
      title,
      isStacked: true,
      is3D: true,
      legend: {
        position: "bottom",
        alignment: "center",
      },
      // backgroundColor: "transparent",
    }}
  />
</div>

<style>
  google-chart {
    width: 100%;
    height: 100%;
  }
  .chart-containter {
    width: 30vw;
    height: 45vh;
  }
</style>
