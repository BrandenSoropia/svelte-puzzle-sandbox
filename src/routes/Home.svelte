<script>
  import { link } from "svelte-spa-router";
</script>

<section class="container">
  <p>
    I miss escape rooms, so this is attempt to make one virtually. It's mobile
    only, thinking it would be more intereactive swiping/using touch controls.
  </p>
  <strong>Try it out:</strong>
  <nav>
    <a class="nav-link" href="/locks" use:link
      >{"\u{1F512} See and test locks here"}</a
    >
    <p>
      {"\u{1F3D7} (In-Dev) Simple Start to Finish Escape Room"}
    </p>
    <p>
      {"\u{2728} (End Goal) Escape Room w/ Audio and Visuals!"}
    </p>
  </nav>
  <p>When you're done, please let me know what you think here:</p>
  <ul>
    <li>
      <a
        href="https://github.com/BrandenSoropia/svelte-puzzle-sandbox"
        rel="noopener noreferrer">Leaving an issue on Github</a
      >
    </li>
    <li>
      <a href="https://twitter.com/brandensoropia" rel="noopener noreferrer"
        >Twitter</a
      >
    </li>
  </ul>
</section>

<style>
</style>
