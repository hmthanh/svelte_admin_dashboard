<script lang="ts">
  import "@google-web-components/google-chart";
  import { GoogleChart } from "@google-web-components/google-chart";
  import { Legend } from "chart.js";
  export let cols: {
    label: string;
    type: string;
  }[] = [];
  export let rows: [string, number][] = [];
  export let title: String = "";
  export let sliceVisibilityThreshold: number = 0;
  // const options = GoogleChart.options;
  // options.vAxis.logScale = true;
  // googleChart.options = options;
</script>

<google-chart
  type="pie"
  {cols}
  {rows}
  options={{
    backgroundColor: "#111c44",
    
    // colors: ['#36A2EB', '#FF3862','#25B4B4', '#FF9F40', '#9966FF', '#FFCD56', "#29BB1C",'#C9CBCF'],
    // colors: ['#36A2EB', '#FF3862','#4BC0C0', '#FF9F40', '#9966FF', '#FFCD56', '#C9CBCF', '#FFCD56'],
    pieSliceText: "value",
    pieSliceTextStyle: {
      fontSize: 20,
      fontWeight: 900,
    },
    chartArea: {
      left: 0,
      top: 0,
      width: "99%",
      height: "99%",
    },
    fontSize: 16,
    title,
    is3D: true,
    // legend: {
    //   position: "top",
    //   textStyle: { color: "blue", fontSize: 16 },
    //   alignment: "center",
    // },
    // backgroundColor: "transparent",
    titleTextStyle: { fontSize: 14, color: "#737373" },
    sliceVisibilityThreshold,
  }}
/>

<style>
  google-chart {
    width: 100%;
    height: 100%;
  }
</style>
