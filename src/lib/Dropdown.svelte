<script lang="ts">
  import { allCountries } from "./store";
  import { clickOutside } from "./clickOutside";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<div
  id="dropdown"
  use:clickOutside={() => {
    dispatch("close-dropdown", false);
  }}
>
  {#each $allCountries as country (country.countryName)}
    <div class="container">
      <input
        type="checkbox"
        id={country.countryName}
        bind:checked={country.checked}
      />
      <label for={country.countryName}>{country.countryName}</label>
    </div>
  {/each}
</div>

<style>
  #dropdown {
    background-color: rgb(255, 255, 255);
    color: black;
    display: flex;
    flex-direction: column;
    height: 120px;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid red;
  }
</style>
