<script>
  export let name;
  export let initialValue = 0;
  export let onBlur;

  const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
</script>

<!-- select's values are strings, so convert back into number -->
<select
  autocomplete="off"
  {name}
  bind:value={initialValue}
  on:blur={(e) => onBlur(parseInt(e.target.value))}
>
  {#each values as value}
    <option {value}>{value}</option>
  {/each}
</select>
