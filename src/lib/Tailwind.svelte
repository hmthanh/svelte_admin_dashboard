<script lang="ts">
  import DNSPanel from "./DNSPanel/DNSPanel.svelte";
  import DdosPanel from "./DdosPanel/DdosPanel.svelte";
  import TrafficPanel from "./TrafficPanel/TrafficPanel.svelte";
</script>

<div class="dark dark:bg-slate-900">
  <!-- m-0 font-sans text-base antialiased font-normal text-left leading-default dark:bg-slate-950 bg-gray-50 text-slate-500 dark:bg-slate-900 dark:text-white" -->

  <!-- antialiased dark:text-white dark:bg-slate-950 bg-gray-50 text-slate-500" -->
  <div
    id="carouselExampleIndicators"
    class="carousel slide relative
    text-base antialiased font-normal text-left leading-default dark:bg-slate-950 dark:bg-slate-900 dark:text-white"
    data-bs-ride="carousel"
  >
    <div
      class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
    >
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      />
    </div>
    <div class="carousel-inner relative w-full overflow-hidden">
      <div class="carousel-item active relative float-left w-full">
        <div class="block w-full h-screen">
          <TrafficPanel />
        </div>
      </div>
      <div class="carousel-item active relative float-left w-full h-screen">
        <div class="block w-full h-screen">
          <div class="panel-full">
            <DdosPanel />
          </div>
        </div>
      </div>
      <!-- <div class="carousel-item float-left w-full h-screen">
        <div class="block w-full h-screen">
          <div class="panel-full">
            <DNSPanel />
          </div>
        </div>
      </div> -->

    
    </div>

    <button
      class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon inline-block bg-no-repeat"
        aria-hidden="true"
      />
      <span class="visually-hidden">Previous</span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon inline-block bg-no-repeat"
        aria-hidden="true"
      />
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>

<style>
</style>
