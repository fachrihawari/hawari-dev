<script lang="ts">
  import { onMount } from "svelte";

  interface Props {
    path: string
  }

	let { path } = $props();
  let views = $state(0);
  let loading = $state(false);

  onMount(async () => {
    const res = await fetch(`/api/pageviews?path=${path}`);
    const data: number = await res.json();
    loading = false;

    for (let i = 0; i < data; i++) {
      views = i + 1;
      await new Promise((resolve) => setTimeout(resolve, 5));
      console.log(views);
    }
  });
</script>

{#if !loading}
  <span class="flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 512 512"
      class="mr-1"
      ><path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112"
      /><circle
        cx="256"
        cy="256"
        r="80"
        fill="none"
        stroke="currentColor"
        stroke-miterlimit="10"
        stroke-width="32"
      /></svg
    >

    {new Intl.NumberFormat("en-US").format(views)}
  </span>
{/if}
