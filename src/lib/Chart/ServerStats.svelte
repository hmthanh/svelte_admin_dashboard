<script lang="ts">
  import "@google-web-components/google-chart";
  import GoogleChartPie from "./GoogleChartPie.svelte";
  const cols: {
    label: string;
    type: string;
  }[] = [
    { label: "Title", type: "string" },
    { label: "$", type: "number" },
  ];
  const rows: [string, number][] = [
    ["QTSC", 11],
    ["ZALO-VNPT HCM", 30],
    ["ZALO-VNPT HN", 16],
    ["VNPT-HN", 8],
    ["FPT-HCM", 25],
    ["FPT-HN", 9],
    ["VIETTEL-HCM", 10],
    ["Sing - OVH", 2],
  ];
  // export let title: String = "";
  // export let sliceVisibilityThreshold: number = 0;
</script>

<!-- 
  <google-chart
    type="pie"
    {cols}
    {rows}
    options={{
      title,
      backgroundColor: "transparent",
      titleTextStyle: { fontSize: 14, color: "#737373" },
      sliceVisibilityThreshold,
    }}
  /> -->

<!-- <div class="p-6 chart-containter"> -->
<div
  class="p-6 chart-containter bg-[#111c44]
border-black/12.5 dark:bg-slate-850 dark:shadow-dark-xl shadow-xl relative z-20 flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid  bg-clip-border"
>
  <GoogleChartPie
    {cols}
    {rows}
    title="Thống kê ZDN Server"
    sliceVisibilityThreshold={0}
  />
</div>

<style>
  .chart-containter {
    width: 30vw;
    height: 45vh;
  }
</style>
