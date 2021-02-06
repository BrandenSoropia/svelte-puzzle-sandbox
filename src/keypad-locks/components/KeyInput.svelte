<script>
  import { BUTTON_STATES } from "../constants";

  export let onClick;
  export let state = BUTTON_STATES.NEUTRAL;
</script>

<button
  class:correct={state === BUTTON_STATES.CORRECT}
  class:incorrect={state === BUTTON_STATES.INCORRECT}
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
