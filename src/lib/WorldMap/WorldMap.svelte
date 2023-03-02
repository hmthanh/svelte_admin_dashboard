<script lang="ts">
  import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
  import "@google-web-components/google-chart";
  import GoogleChartPie from "./GoogleChartPie.svelte";
  const cols: {
    label: string;
    type: string;
  }[] = [
    { label: "Country", type: "string" },
    { label: "Popularity", type: "number" },
  ];
  const rows: [string, number][] = [
    ["Vietnam", 900],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
    ["China", 100],
  ];
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

<div class="p-6 chart-containter">
  <GoogleChartPie
    {cols}
    {rows}
    title="Thống kê ZDN Server"
  />
</div>

<style>
  .chart-containter {
    width: 65vw;
    height: 45vh;
  }
</style>
