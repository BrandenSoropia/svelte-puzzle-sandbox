<script>
  import { link } from "svelte-spa-router";
  import { location } from "svelte-spa-router";
</script>

<header>
  {#if $location === "/"}
    <h1>Svelte Puzzle Sandbox</h1>
  {:else}
    <nav id="header-nav">
      <a href="/" use:link>Go Back</a>
    </nav>
  {/if}
</header>

<style>
  header {
    margin: 0.8rem;
  }

  header h1 {
    font-size: 2.4rem;
    margin: 0;
  }
</style>
