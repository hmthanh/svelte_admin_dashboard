<script>
  import AmChart from "../AmChart/AmChart.svelte";
  import Card from "../Card/Card.svelte";
  import BarChart from "../Chart/BarChart.svelte";
  import LineChart from "../Chart/LineChart.svelte";
  import WorldMap from "../WorldMap/WorldMap.svelte";
</script>

<div class="block w-full h-screen">
  <!-- h-screen -->
  <div class="">
    <div class="grid grid-cols-3 w-full">
      <!-- row -->
      <div class="col-span-2  h-[50vh]">
        <div class="grid grid-cols-2 w-full">
          <div>
            <BarChart />
          </div>
          <div>
            <BarChart />
          </div>
        </div>
        <!-- <div class="max-w-fit max-h-screen mx-auto justify-center items-center">
          <Card>
            <LineChart />
          </Card>
        </div> -->
      </div>
      <div class=" h-[50vh]">
        <div
          class=" max-w-fit mx-auto my-auto flex justify-center items-center"
        >
          <Card>
            <BarChart />
          </Card>
        </div>
      </div>
      <!-- row -->
      <div class="col-span-2  h-[50vh]">
        <div class="max-w-fit max-h-screen mx-auto justify-center items-center">
          <Card>
            <AmChart />
          </Card>
        </div>
      </div>
      <div class=" h-[50vh]">
        <div class="max-w-fit max-h-screen mx-auto justify-center items-center">
          <Card>
            <BarChart />
          </Card>
        </div>
      </div>
    </div>
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
