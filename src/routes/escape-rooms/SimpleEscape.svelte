<script>
  // Locks
  import MultiDialLock from "../../locks/combination-locks/MultiDialLock.svelte";
  import KeyPadSequenceLock from "../../locks/keypad-locks/KeyPadSequenceLock.svelte";
  import LockStatusIndicator from "../../components/LockStatusIndicator.svelte";
  import PassPhraseLock from "../../locks/text-input-lock/PassPhraseLock.svelte";

  // Clues
  import CountOccurenceClue from "../../clues/CountOccurencesClue.svelte";
  import TextCypherClue from "../../clues/cyphers/TextCypherClue.svelte";
  import CYPHER_MODE from "../../clues/cyphers/cypher-modes";
  import { createGameState } from "../../store";

  const SIMPLE_ROOM_CONFIG = [
    { name: "COUNT_PUZZLE" },
    { name: "CYPHER_PUZZLE" },
    { name: "SEQUENCE_PUZZLE" },
  ];
  const gameState = createGameState(SIMPLE_ROOM_CONFIG);

  let firstTwoPuzzlesSolved = false;

  $: {
    if (
      $gameState["COUNT_PUZZLE"].solved &&
      $gameState["CYPHER_PUZZLE"].solved
    ) {
      firstTwoPuzzlesSolved = true;
    }
  }
</script>

<section class="container">
  {#if $gameState.isComplete}
    <h2>Congratulations, you've escaped!</h2>
    `
  {:else if !firstTwoPuzzlesSolved}
    <h2>Oh no, you're trapped! Solve all these to escape!</h2>

    <section>
      <p>Red -> Blue -> Yellow</p>
      <CountOccurenceClue
        rows={[
          ["red", "blue", "red", "red", "yellow"],
          ["blue", "blue", "red", "yellow", "red"],
          ["blue", "yellow", "yellow", "red", "blue"],
        ]}
      />
      <MultiDialLock
        enableRealLockInteraction
        name="real-lock-dials"
        combination={[6, 5, 4]}
        onUnlock={() => {
          gameState.unlock("COUNT_PUZZLE");
        }}
      />
    </section>
    <hr />
    <section>
      <TextCypherClue
        passPhrase="password"
        hint="MEOW"
        config={{ mode: CYPHER_MODE.CAESAR, key: 3 }}
      />
      <PassPhraseLock
        passPhrase="password"
        onUnlock={() => {
          gameState.unlock("CYPHER_PUZZLE");
        }}
      />
    </section>
  {:else}
    <h2>Wait there's one more!</h2>
    <p>Friday feels</p>
    <KeyPadSequenceLock
      name="simple-keypad"
      options={[
        { label: "\u{1F628}", value: 0 },
        { label: "\u{1F610}", value: 2 },
        { label: "\u{1F642}", value: 3 },
        { label: "\u{1F61F}", value: 1 },
        { label: "\u{1F600}", value: 4 },
      ]}
      highlightInput
      sequence={[0, 1, 2, 3, 4]}
      onUnlock={() => {
        gameState.unlock("SEQUENCE_PUZZLE");
      }}
    />
  {/if}
</section>
