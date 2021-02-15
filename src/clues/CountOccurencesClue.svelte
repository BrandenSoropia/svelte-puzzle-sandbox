<script>
  export let rows = [];
</script>

<div class="occurence-container">
  {#each rows as row}
    <div class="row">
      {#each row as item}
        <span class="item" style={`background-color: ${item}`} />
      {/each}
    </div>
  {/each}
  <span class="icon" />
</div>

<style>
  .occurence-container {
    padding: 1.6rem;
  }

  .row {
    display: flex;
  }

  .item {
    display: block;
    border: 1px solid black;
    width: 5rem;
    height: 5rem;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 5rem;
  }
</style>
