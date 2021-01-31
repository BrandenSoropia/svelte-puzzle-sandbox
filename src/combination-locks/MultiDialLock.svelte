<script>
  import Dial from "./components/Dial.svelte";
  import { isCorrectCombination } from "./utils";

  export let name;
  export let combination;
  export let initialGivenValues = Array(combination.length).fill(0);
  export let enableRealLockInteraction = false;

  let givenValues = [...initialGivenValues];
  let isValid = isCorrectCombination(givenValues, combination);

  function setDial(dialIndex, value) {
    // Update value in correct place and return new array to cause component update!
    givenValues = givenValues.map((dialValue, index) =>
      dialIndex === index ? value : dialValue
    );
  }

  $: {
    isValid = isCorrectCombination(givenValues, combination);
  }
</script>

<section>
  <p>{isValid ? "\u{1F513} Unlocked!" : "\u{1F512} Locked."}</p>
  <form {name}>
    {#each combination as _, index}
      <Dial
        {name}
        initialValue={initialGivenValues[index]}
        onBlur={(value) => {
          setDial(index, value);
        }}
        {enableRealLockInteraction}
      />
    {/each}
  </form>
</section>
