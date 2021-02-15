<script>
  import CYPHER_MODE from "./cypher-modes";
  import Alphabet from "./Alphabet.svelte";

  export let passPhrase;
  export let hint = "";
  export let config = { mode: CYPHER_MODE.CAESAR, key: 1 };

  // Ignore casing for simplicity. Stolen from https://learnersbucket.com/examples/algorithms/caesar-cipher-in-javascript/
  function ceaserEncrypt(passPhrase, { key }) {
    return passPhrase
      .toUpperCase()
      .replace(/[A-Z]/g, (c) =>
        String.fromCharCode(((c.charCodeAt(0) - 65 + key) % 26) + 65)
      );
  }
</script>

{#if config.mode === CYPHER_MODE.CAESAR}
  <div>
    {#if hint}
      <p>{`Hint: ${hint.toUpperCase()} -> ${ceaserEncrypt(hint, config)}`}</p>
    {/if}
    <Alphabet />
    <p>{ceaserEncrypt(passPhrase, config)}</p>
  </div>
{/if}
