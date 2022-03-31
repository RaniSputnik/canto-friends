<script lang="ts">
  import { textToTones, Tone, toneToImageSrc } from "./tones";

  export let tones: Tone[] = [];

  export function updateText(e) {
    tones = textToTones(e.target.value);
  }
</script>

<main>
  <h1>Learn some Canto!</h1>
  <div>
    <img src="img/do-re-mi-fa-so.png" alt="Do-Re-Mi-Fa-So tone reference" />
    {#each tones as tone}
      <img src={toneToImageSrc(tone)} alt={`Tone ${tone}`} />
    {/each}
  </div>
  <input type="text" placeholder="Eg. nei5 hou2" on:input={updateText} />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
