<script>
  import Card from "../Card/Card.svelte";
</script>

<div
  class="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4 h-full"
>
  <!-- <div class="relative flex flex-col min-w-0 break-words bg-white shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border"> -->
  <Card>
    <div
      class="relative bg-slate-850 flex flex-col min-w-0 break-words shadow-xl shadow-dark-xl rounded-2xl bg-clip-border"
    >
      <div class="flex-auto p-4">
        <div class="flex flex-row -mx-3">
          <div class="flex-none w-2/3 max-w-full px-3">
            <div>
              <p
                class="mb-0 font-sans text-sm font-semibold leading-normal uppercase dark:text-white dark:opacity-60"
              >
                New Clients
              </p>
              <h5 class="mb-2 font-bold dark:text-white">3462</h5>
            </div>
          </div>
          <div class="px-3 text-right basis-1/3">
            <div
              class="inline-block w-12 h-12 text-center rounded-circle bg-gradient-to-tl from-emerald-500 to-teal-400"
            >
              <i
                class="ni leading-none ni-paper-diploma text-lg relative top-3.5 text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
</div>
