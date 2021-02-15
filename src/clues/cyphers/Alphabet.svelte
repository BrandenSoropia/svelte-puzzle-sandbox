<script>
  const letters = new Array(26)
    .fill(null)
    .map((_, idx) => String.fromCharCode(65 + idx));

  let isOpen = false;
</script>

<details
  on:click={() => {
    isOpen = !isOpen;
  }}
>
  <summary>{`${isOpen ? "Hide" : "View"} Alphabet`}</summary>
  <div class="alphabet-grid">
    {#each letters as letter}
      <div class="letter"><p>{letter}</p></div>
    {/each}
  </div>
</details>

<style>
  /* https://css-tricks.com/snippets/css/complete-guide-grid/ */
  .alphabet-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25px, 1fr));
    grid-gap: 0.8rem;
  }

  .letter {
    text-align: center;
  }
</style>
