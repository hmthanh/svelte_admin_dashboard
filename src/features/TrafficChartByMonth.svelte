<script lang="ts">
  import {
    useQuery,
    useMutation,
    useQueryClient,
  } from "@sveltestack/svelte-query";

  import { posts } from "../helper/store.js";

  let postsList;
  const unsubscribe = posts.subscribe((value) => {
    postsList = value;
  });
</script>

<button on:click={posts.fetchAll}> Fetch Posts </button>
{#await postsList}
  <p>loading...</p>
{:then payload}
  <div class="posts">
    {#each payload.data as item (item.id)}
      <div class="post">
        <div class="color" style={`background-color: ${item.color}`} />
        <div class="label">
          {item.name}
        </div>
      </div>
    {/each}
  </div>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
<!-- <Debug /> -->
