<script lang="ts">
  import Dropdown from "./lib/Dropdown.svelte";
  import Select from "./lib/Select.svelte";

  let isDrop = false;

  function handleToggleDropdown(e: CustomEvent) {
    isDrop = isDrop === true ? false : true;
  }
</script>

<main>
  <Select on:playDropdown={handleToggleDropdown} {isDrop} />

  {#if isDrop}
    <Dropdown on:onClose={({ detail }) => handleToggleDropdown(detail)} />
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
