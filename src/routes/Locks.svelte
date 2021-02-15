<script>
  import MultiDialLock from "../locks/combination-locks/MultiDialLock.svelte";
  import KeyPadSequenceLock from "../locks/keypad-locks/KeyPadSequenceLock.svelte";
  import LockStatusIndicator from "../components/LockStatusIndicator.svelte";
  import PassPhraseLock from "../locks/text-input-lock/PassPhraseLock.svelte";
  import CountOccurenceClue from "../clues/CountOccurencesClue.svelte";

  // Clue and Locks Section
  let countColorsIsUnlocked = false;

  // Locks Only Section
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

  <section id="clues-and-locks">
    <h2>Clues and Locks</h2>
    <LockStatusIndicator isUnlocked={countColorsIsUnlocked} />
    <p>Red -> Blue -> Yellow</p>
    <CountOccurenceClue
      rows={[
        ["red", "blue", "red", "red", "yellow"],
        ["blue", "blue", "red", "yellow", "red"],
        ["blue", "yellow", "yellow", "red", "blue"],
      ]}
    />
    <KeyPadSequenceLock
      name="simple-keypad"
      options={[
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
        { label: "5", value: 5 },
        { label: "6", value: 6 },
        { label: "7", value: 7 },
        { label: "8", value: 8 },
        { label: "9", value: 9 },
      ]}
      sequence={[6, 5, 4]}
      onUnlock={() => {
        countColorsIsUnlocked = true;
      }}
    />
  </section>
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
        { label: "1", value: 1 },
        { label: "2", value: 2 },
        { label: "3", value: 3 },
        { label: "4", value: 4 },
      ]}
      sequence={[1, 1, 3, 4]}
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
