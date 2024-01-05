<script lang="ts">
  import { allCountries } from "../store";
</script>

<div id="dropdown">
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
  }
</style>
