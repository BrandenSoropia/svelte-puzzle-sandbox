<script>
  import MultiDialLock from "./combination-locks/MultiDialLock.svelte";
  import Dial from "./combination-locks/components/Dial.svelte";
</script>

<main>
  <h1>Puzzle Sandbox</h1>
  <section>
    <h2>Multi-Dial Locks</h2>
    <h3>Standard Web Input Lock</h3>
    <MultiDialLock name="web-input-dials" combination={[1, 2, 3]} />
    <h3>Emulate Real Lock</h3>
    <MultiDialLock
      name="real-lock-dials"
      combination={[1, 2, 3]}
      enableRealLockInteraction
    />
  </section>
</main>
