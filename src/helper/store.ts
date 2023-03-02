import { writable } from "svelte/store";
import { fetchPosts } from "../features/getTrafficAPI";

function createPosts() {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    fetchAll: () => {
      const fetchedPosts = fetchPosts();
      set(fetchedPosts);
    },
  };
}

export const posts = createPosts();
