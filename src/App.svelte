<script>
  import MultiDialLock from "./combination-locks/MultiDialLock.svelte";
  import KeyPadSequenceLock from "./keypad-locks/KeyPadSequenceLock.svelte";
  import LockStatusIndicator from "./components/LockStatusIndicator.svelte";

  let multiDialIsUnlocked = false;
  let emulateRealLockUnlocked = false;
  let keypadSequenceIsUnlocked = false;
</script>

<main>
  <h1>Puzzle Sandbox</h1>
  <section id="keypad-locks">
    <h2>Keypad Locks</h2>
    <LockStatusIndicator isUnlocked={keypadSequenceIsUnlocked} />
    <KeyPadSequenceLock
      name="simple-keypad"
      options={[
        { label: "A", value: 0 },
        { label: "B", value: 1 },
        { label: "C", value: 2 },
        { label: "D", value: 3 },
      ]}
      sequence={[0, 1, 2, 3]}
      onUnlock={() => {
        keypadSequenceIsUnlocked = true;
      }}
    />
  </section>
  <section id="mutli-dial-locks">
    <h2>Multi-Dial Locks</h2>
    <h3>Standard Web Input Lock</h3>
    <LockStatusIndicator isUnlocked={multiDialIsUnlocked} />
    <MultiDialLock
      name="web-input-dials"
      combination={[1, 2, 3]}
      onUnlock={() => {
        multiDialIsUnlocked = true;
      }}
    />
    <h3>Emulate Real Lock</h3>
    <LockStatusIndicator isUnlocked={emulateRealLockUnlocked} />
    <MultiDialLock
      enableRealLockInteraction
      name="real-lock-dials"
      combination={[1, 2, 3]}
      onUnlock={() => {
        emulateRealLockUnlocked = true;
      }}
    />
  </section>
</main>
