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

  let formattedOptions = formatOptions(options);
  let currentIndex = 0;
  let isUnlocked = false;

  function formatOptions(_options) {
    return _options.map((option) => ({
      ...option,
      state: BUTTON_STATES.NEUTRAL,
    }));
  }

  function handleInput(optionIndex) {
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

      setTimeout(() => {
        reset();
      }, 3000);
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

<div>
  {#each formattedOptions as option, idx (name + option.value)}
    <KeyInput
      onClick={() => {
        handleInput(idx);
      }}
      state={option.state}>{option.label}</KeyInput
    >
  {/each}
</div>
