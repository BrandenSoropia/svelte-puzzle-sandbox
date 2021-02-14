<script>
  export let name;
  export let label;
  export let onUnlock = () => {};
  export let password = "";

  let value = "";
  let isCorrect = false;
  let isIncorrect = false;

  function isValidPasswordGiven(_value) {
    if (_value === password) {
      isCorrect = true;
      onUnlock();
    } else {
      isIncorrect = true;
      setTimeout(() => {
        isIncorrect = false;
      }, 3000);
    }
  }
</script>

<form
  id={`pass-phrase-lock-${name}`}
  autocomplete="off"
  on:submit|preventDefault={() => {
    isValidPasswordGiven(value);
    return false;
  }}
>
  {#if label}
    <label for={`pass-phrase-lock-${name}-input`}>{label}</label>
  {/if}
  <input
    class:correct={isCorrect}
    class:incorrect={isIncorrect}
    disabled={isIncorrect}
    id={`pass-phrase-lock-${name}-input`}
    type="text"
    bind:value
  />
  <button type="submit">Submit</button>
</form>

<style>
  input.correct {
    background-color: chartreuse;
  }

  input.incorrect {
    animation: pulse 1s infinite;
    animation-iteration-count: 3;
  }

  @keyframes pulse {
    0%,
    100% {
      background-color: inherit;
    }
    50% {
      color: white;
      background-color: #ff4136;
    }
  }
</style>
