<script>
  // import SimplePieChart from "./../AmChart/SimplePieChart.svelte";
  import PieChart from "./../Chart/PieChart.svelte";
  import Card from "../Card/Card.svelte";
  import LineChart from "../Chart/LineChart.svelte";
  import ServerBar from "../Chart/ServerStackedBar.svelte";
  import ServerStats from "../Chart/ServerStats.svelte";
  import StackedChart from "../Chart/StackedChart.svelte";
  import BandwidthChart from "./BandwidthChart.svelte";
  import DataUsageChart from "./DataUsageChart.svelte";
  import TotalSummary from "../TopNav/TotalSummary.svelte";
  import PaddingBox from "../PaddingBox.svelte";
  // import SimplePieChart from "../AmChart/SimplePieChart.svelte";
  import { onMount } from "svelte";

  // const queryResult = useQuery("repodataset", () =>
  //   fetch(
  //     "http://10.90.85.9:19040/stats?a=ZDNBandwidth&domain=zadn&minute=60"
  //   ).then((res) => {
  //     console.log("res", res);
  //   //   const data:IBandwidthType = res.json().then((response) =>response);
  //     return res.json();
  //   })
  // );
  let SimplePieChart;

  onMount(async () => {
    SimplePieChart = (await import("../AmChart/SimplePieChart.svelte")).default;
  });
</script>

<div class="block w-full h-screen dark">
  <!-- h-screen -->
  <div class="w-full bg-slate-600 h-[15vh] flex">
    <div class="flex-none">
      <div
        class="zdn-logo bg-green-400 w-[250px] h-full justify-center text-center"
      >
        <div class="logo">ZDN Logo</div>
      </div>
    </div>
    <div class="flex-auto">
      <TotalSummary />
    </div>
  </div>
  <!-- row -->
  <div class="grid grid-cols-4 w-full h-full">
    <div class="col-span-1">
      <div class="grid grid-rows gap-4 py-3 w-full">
        <div class=" w-full">
          <PaddingBox>
            <Card>
              <PieChart />
              <!-- <SimplePieChart /> -->
              <svelte:component this={SimplePieChart} />
            </Card>
          </PaddingBox>
        </div>
        <div class="w-full">
          <PaddingBox>
            <Card>
              <PieChart />
            </Card>
          </PaddingBox>
        </div>
      </div>
    </div>
    <div class="col-span-2">
      <div class="grid grid-rows gap-4 py-3 w-full">
        <div class="w-full ">
          <PaddingBox>
            <Card>
              <DataUsageChart />
            </Card>
          </PaddingBox>
        </div>
        <!--  -->
        <div class="w-full ">
          <PaddingBox>
            <Card>
              <BandwidthChart />
            </Card>
          </PaddingBox>
        </div>
      </div>
    </div>
    <div class="col-span-1">
      <div class="grid grid-rows gap-4 py-3 w-full">
        <div class=" w-full">
          <PaddingBox>
            <Card>
              <StackedChart />
            </Card>
          </PaddingBox>
        </div>
        <div class="w-full">
          <PaddingBox>
            <Card>
              <PieChart />
            </Card>
          </PaddingBox>
        </div>
      </div>
    </div>
    <!-- <div class="col-span-2  h-[50vh]">
        <div class="max-w-fit max-h-screen mx-auto justify-center items-center w-full h-full">
          <Card>
            <DataUsageChart />
          </Card>
        </div>
      </div>
      <div class=" h-[50vh]">
        <div
          class=" max-w-fit mx-auto my-auto flex justify-center items-center"
        >
          <Card>
            <PieChart />
            <ServerStats />
          </Card>
        </div>
      </div> -->
    <!-- row -->
    <!-- <div class="col-span-2  h-[50vh]">
        <div class="max-w-fit max-h-screen mx-auto justify-center items-center w-full h-full">
          <Card>
            <BandwidthChart />
          </Card>
        </div>
      </div>
      <div class=" h-[50vh]">
        <div class="max-w-fit max-h-screen mx-auto justify-center items-center w-full h-full">
          <Card>
            <StackedChart />
          </Card>
        </div>
      </div> -->
  </div>

  <!-- <Card>
    <PieChart/>
  </Card> -->
  <!-- <Card>
    <PieChart />
  </Card/> -->
</div>

<style>
</style>
