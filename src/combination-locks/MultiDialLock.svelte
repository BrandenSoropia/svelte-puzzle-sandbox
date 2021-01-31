<script>
  import Dial from "./components/Dial.svelte";
  import { isCorrectCombination } from "./utils";

  export let combination;
  export let initialGivenValues = Array(combination.length).fill(0);

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
  <h2>Multi-dial Lock</h2>
  <p>{isValid ? "\u{1F513} Unlocked!" : "\u{1F512} Locked."}</p>
  <form>
    {#each combination as _, index}
      <Dial
        name={`dial-${index}`}
        initialValue={initialGivenValues[index]}
        onBlur={(value) => {
          setDial(index, value);
        }}
      />
    {/each}
  </form>
</section>
