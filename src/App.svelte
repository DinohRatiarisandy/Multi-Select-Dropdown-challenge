<script lang="ts">
  import Dropdown from "./lib/Dropdown.svelte";
  import Select from "./lib/Select.svelte";

  let isDrop = false;
</script>

<main>
  <Select on:playDropdown={() => (isDrop = !isDrop)} {isDrop} />

  {#if isDrop}
    <Dropdown />
  {/if}
</main>

<style>
  main {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>
