<script>
  import { BUTTON_STATES } from "../constants";

  export let onClick;
  export let state = BUTTON_STATES.NEUTRAL;
  export let highlightInput;
  export let disabled = false;
</script>

<button
  {disabled}
  class:correct={highlightInput && state === BUTTON_STATES.CORRECT}
  class:incorrect={highlightInput && state === BUTTON_STATES.INCORRECT}
  on:click={onClick}><slot /></button
>

<style>
  button {
    padding: 16px;
  }

  .correct {
    background-color: chartreuse;
  }

  .incorrect {
    animation: pulse 1s infinite;
    animation-iteration-count: 3;
  }

  @keyframes pulse {
    0%,
    100% {
      background-color: inherit;
    }
    50% {
      background-color: #ff4136;
    }
  }
</style>
