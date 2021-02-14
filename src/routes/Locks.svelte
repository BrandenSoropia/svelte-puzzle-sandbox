<script>
  import MultiDialLock from "../locks/combination-locks/MultiDialLock.svelte";
  import KeyPadSequenceLock from "../locks/keypad-locks/KeyPadSequenceLock.svelte";
  import LockStatusIndicator from "../components/LockStatusIndicator.svelte";
  import PassPhraseLock from "../locks/text-input-lock/PassPhraseLock.svelte";

  let multiDialIsUnlocked = false;
  let emulateRealLockUnlocked = false;
  let uniqueKeypadSequenceIsUnlocked = false;
  let repetitiveKeypadSequenceIsUnlocked = false;
  let passPhraseLockIsUnlocked = false;
</script>

<section class="container">
  <h1>Puzzle Sandbox</h1>
  <p>Give each a try and let me know what you think!</p>
  <p>Correct answers are in the title. To reset, refresh the page.</p>

  <section id="pass-phrase-locks">
    <h2>Pass Phrase Lock</h2>
    <h3>Just a plain ol' passphrase lock: "password" is password</h3>
    <LockStatusIndicator isUnlocked={passPhraseLockIsUnlocked} />
    <PassPhraseLock
      password="password"
      onUnlock={() => {
        passPhraseLockIsUnlocked = true;
      }}
    />
  </section>
  <section id="keypad-locks">
    <h2>Keypad Locks</h2>
    <h3>Repeatitive Sequence Input: 1 1 3 4</h3>
    <LockStatusIndicator isUnlocked={repetitiveKeypadSequenceIsUnlocked} />
    <KeyPadSequenceLock
      name="simple-keypad"
      options={[
        { label: "1", value: 0 },
        { label: "2", value: 1 },
        { label: "3", value: 2 },
        { label: "4", value: 3 },
      ]}
      sequence={[0, 0, 2, 3]}
      onUnlock={() => {
        repetitiveKeypadSequenceIsUnlocked = true;
      }}
    />
    <h3>Unique Sequence Input: A B C D</h3>
    <LockStatusIndicator isUnlocked={uniqueKeypadSequenceIsUnlocked} />
    <KeyPadSequenceLock
      name="simple-keypad"
      options={[
        { label: "A", value: 0 },
        { label: "B", value: 1 },
        { label: "C", value: 2 },
        { label: "D", value: 3 },
      ]}
      highlightInput
      sequence={[0, 1, 2, 3]}
      onUnlock={() => {
        uniqueKeypadSequenceIsUnlocked = true;
      }}
    />
  </section>
  <section id="mutli-dial-locks">
    <h2>Multi-Dial Locks</h2>
    <h3>Standard Web Input Lock: 1 2 3</h3>
    <LockStatusIndicator isUnlocked={multiDialIsUnlocked} />
    <MultiDialLock
      name="web-input-dials"
      combination={[1, 2, 3]}
      onUnlock={() => {
        multiDialIsUnlocked = true;
      }}
    />
    <h3>Emulate Real Lock: 1 2 3</h3>
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
</section>
