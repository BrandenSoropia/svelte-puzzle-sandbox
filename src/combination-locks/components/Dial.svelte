<script>
  import { onMount } from "svelte";
  import createIntersectionObserver from "../../utils/intersection-observer";

  export let name;
  export let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  export let initialValue = 0;
  export let onBlur = null;
  export let simulated = false;

  let value = initialValue;

  // Below is for simulated swiping lock only
  let scrollContainerElement;
  let observer;

  const symbolElements = {};

  onMount(() => {
    observer = createIntersectionObserver(
      scrollContainerElement,
      null,
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Idea: Maybe wait for user to stop drag before settings this.
            value = parseInt(entry.target.dataset.value);
          }
        });
      }
    );

    Object.values(symbolElements).forEach((symbolElement) => {
      observer.observe(symbolElement);
    });
  });
</script>

{#if simulated}
  <!-- TODO: Snap to item -->
  <!-- TODO: Better styling -->
  <div class="scrollable-container" bind:this={scrollContainerElement}>
    {#each values as value, index}
      <!-- Dynamically generates an element reference -->
      <span
        id={`${name}-symbol-${index}`}
        bind:this={symbolElements[index]}
        data-value={value}>{value}</span
      >
    {/each}
  </div>
{:else}
  <!-- select's values are strings, so convert back into number -->
  <select
    autocomplete="off"
    {name}
    bind:value={initialValue}
    on:blur={(e) => {
      const targetValue = e.target.value;

      if (onBlur) {
        onBlur(parseInt(targetValue));
      }

      value = targetValue;
    }}
  >
    {#each values as value}
      <option {value}>{value}</option>
    {/each}
  </select>
{/if}

<style>
  .scrollable-container {
    display: flex;
    flex-direction: column;
    height: 32px;
    overflow-y: scroll;
    border: 1px solid black;
  }

  .scrollable-container > span {
    font-size: 24px;
    line-height: 32px;
  }
</style>
