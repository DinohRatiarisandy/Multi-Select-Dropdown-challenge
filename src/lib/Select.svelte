<script lang="ts">
  import { countSelectedCountries } from "./store";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let isDrop: boolean;

  function playDropdown() {
    dispatch("playDropdown", "");
  }
</script>

<div id="select">
  <button on:click={playDropdown}>
    {$countSelectedCountries} pays sélectionné{$countSelectedCountries > 1
      ? "s"
      : ""}
    {#if isDrop}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    {/if}
  </button>
</div>

<style>
  button {
    width: 250px;
    height: 50px;
    outline: none;
    background-color: rgb(184, 220, 255);
    border: none;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    font-size: 18px;
  }
  svg {
    width: 24px;
  }
</style>
