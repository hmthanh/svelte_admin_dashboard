<script lang="ts">
  import { Line } from "svelte-chartjs";
  import {
    CategoryScale,
    Chart as ChartJS,
    Colors,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    TimeSeriesScale,
    Title,
    Tooltip,
    Filler,
  } from "chart.js";
  import "chartjs-adapter-moment";
  import zoomPlugin from "chartjs-plugin-zoom";
  // import gradient from "chartjs-plugin-gradient";
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
  // const customLineGradient = {
  //   id: "customLineGradient",
  //   beforeDraw: (chart, args, options) => {
  //     const { ctx } = chart;
  //     ctx.save();

  //     const gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

  //     gradientStroke.addColorStop(1, "rgba(72,72,176,0.2)");
  //     gradientStroke.addColorStop(0.2, "rgba(72,72,176,0.0)");
  //     gradientStroke.addColorStop(0, "rgba(119,52,169,0)");

  //     // ctx.globalCompositeOperation = "destination-over";
  //     // ctx.fillStyle = options.color || "#111c44";
  //     // ctx.fillRect(0, 0, chart.width, chart.height);
  //     ctx.restore();
  //   },
  // };
  ChartJS.register(
    Colors,
    Title,
    Tooltip,
    Legend,
    TimeSeriesScale,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    Filler,
    zoomPlugin,
    customCanvasBackgroundColor
  );

  export let data;
  export let options;
</script>

<!-- {#if $queryResult.isLoading}
  <span>Loading...</span>s
{:else if $queryResult.error}
  <span>An error has occurred: {$queryResult.dataset.error}</span>
{:else}
  <h1>{$queryResult.dataset.dataset}</h1>
{/if} -->

<Line {data} {options} />

<style>
</style>
