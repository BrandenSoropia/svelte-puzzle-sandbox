<script>
  import MultiDialLock from "./combination-locks/MultiDialLock.svelte";
  import Dial from "./combination-locks/components/Dial.svelte";
</script>

<main>
  <h1>Puzzle Sandbox</h1>
  <h2>Test</h2>
  <Dial name="test" onBlur={() => {}} simulated />

  <MultiDialLock combination={[1, 2, 3]} />
</main>
