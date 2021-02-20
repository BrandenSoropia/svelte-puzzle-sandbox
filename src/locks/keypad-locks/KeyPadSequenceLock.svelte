<script>
  /**
   * The idea is to following the sequence from start to finish.
   * If a correct input is made, report it's right!
   * If a mistake is made, report that it's wrong and restart.
   */
  import KeyInput from "./components/KeyInput.svelte";
  import { BUTTON_STATES } from "./constants";

  export let name;
  export let options;
  export let sequence;
  export let onUnlock;
  export let highlightInput = false;
  export let disabled = false;

  let formattedOptions = formatOptions(options);
  let currentIndex = 0;
  let isUnlocked = false;
  let resetTimeoutId = null;

  function formatOptions(_options) {
    return _options.map((option) => ({
      ...option,
      state: BUTTON_STATES.NEUTRAL,
    }));
  }

  function handleInput(optionIndex) {
    if (resetTimeoutId) {
      reset();

      clearTimeout(resetTimeoutId);
      resetTimeoutId = null;
    }

    const selectedOption = formattedOptions[optionIndex];

    if (sequence[currentIndex] === selectedOption.value) {
      currentIndex += 1;

      selectedOption.state = BUTTON_STATES.CORRECT;

      if (currentIndex > sequence.length - 1) {
        isUnlocked = true;
      }
    } else {
      currentIndex = 0;
      selectedOption.state = BUTTON_STATES.INCORRECT;

      // Decide if time is needed for incorrect input animation to play
      // Look at KeyInput's incorrect CSS class for animation
      if (highlightInput) {
        resetTimeoutId = setTimeout(() => {
          reset();
        }, 3000);
      } else {
        reset();
      }
    }

    // Update options and trigger a re-render
    formattedOptions = [...formattedOptions];
  }

  function reset() {
    formattedOptions = formatOptions(options);
  }

  $: {
    if (isUnlocked) {
      onUnlock();
    }
  }
</script>

<div class="keypad-sequence-container">
  {#each formattedOptions as option, idx (name + option.value)}
    <KeyInput
      {disabled}
      onClick={() => {
        handleInput(idx);
      }}
      state={option.state}
      {highlightInput}>{option.label}</KeyInput
    >
  {/each}
</div>

<style>
  .keypad-sequence-container {
    display: flex;
    justify-content: space-evenly;
  }
</style>
