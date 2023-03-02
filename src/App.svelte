<script lang="ts">
  import "tw-elements";
  import Main from "./lib/Sidenav/Main.svelte";
  import Sidenav from "./lib/Sidenav/Sidenav.svelte";
  import Tailwind from "./lib/Tailwind.svelte";

  const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  document.documentElement.classList.add('dark');
</script>

<Tailwind />

<!-- <div class="">
  <div
    class="m-0 font-sans text-base antialiased font-normal text-left leading-default dark:bg-slate-950 bg-gray-50 text-slate-500 dark:bg-slate-900 dark:text-white"
  >
    <div class="absolute w-full bg-blue-500 dark:hidden min-h-75" />
    <Sidenav />
    <Main />
  </div>
</div> -->



<style>
  /* .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  } */
</style>
