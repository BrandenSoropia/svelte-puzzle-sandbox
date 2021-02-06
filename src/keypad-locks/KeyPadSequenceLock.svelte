<script>
  /**
   * The idea is to following the sequence from start to finish.
   * If a correct input is made, report it's right!
   * If a mistake is made, report that it's wrong and restart.
   */
  export let name;
  export let options;
  export let sequence;
  export let onUnlock;

  let currentIndex = 0;
  let isUnlocked = false;

  function handleInput(newInputValue) {
    if (sequence[currentIndex] === newInputValue) {
      currentIndex += 1;
      // TODO: Flash correct

      if (currentIndex > sequence.length - 1) {
        // done!
        isUnlocked = true;
      }
    } else {
      currentIndex = 0;
      // TODO: Flash incorrect
    }
  }

  $: {
    if (isUnlocked) {
      onUnlock();
    }
  }
</script>

{#each options as option, idx}
  <button
    id={`${name}-input-${idx}`}
    on:click={() => {
      handleInput(option.value);
    }}>{option.label}</button
  >
{/each}
