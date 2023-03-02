<script lang="ts">
  import "@google-web-components/google-chart";
  // export let data: (String[] | (string | number)[])[] = [];
  export let cols: {
    label: string;
    type: string;
  }[] = [];
  export let rows: [string, number][] = [];
  export let title: String = "";
</script>

<google-chart
  type="geo"
  {cols}
  {rows}
  options={{
    chartArea: {
      left: 0,
      top: 0,
      width: "99%",
      height: "99%",
    },
    title,
  }}
/>

<style>
  google-chart {
    width: 100%;
    height: 100%;
  }
</style>
