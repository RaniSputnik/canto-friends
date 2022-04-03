<script lang="ts">
  import { textToTones, Tone, toneToImageSrc } from "./tones";

  export let tones: Tone[] = [];

  export function updateText(e) {
    tones = textToTones(e.target.value);
  }
</script>

<main>
  <h1>Learn some Canto!</h1>
  <div id="tones">
    <div>
      <img src="img/do-re-mi-fa-so.png" alt="Do-Re-Mi-Fa-So tone reference" />
    </div>
    {#each tones as tone}
      <div><img src={toneToImageSrc(tone)} alt={`Tone ${tone}`} /></div>
    {/each}
  </div>
  <input type="text" placeholder="Eg. nei5 hou2" on:input={updateText} />
</main>

<style>
  #tones {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 100%;
  }

  main {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 100;
  }
</style>
