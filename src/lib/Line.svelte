<script>
  import convert from './schoolschrift-converter'

  export let text;
  $: convertedText = convert(text)
</script>

<style>
  .line {
    font-size: 36pt;
    position: relative;
  }
  .sentence {
    font-family: Schoolschrift;
    margin: 0 0.5em;
    position: relative;
    top: 0;
    z-index: 2;
  }
  .writing-space, .sentence {
    display: block;
    min-height: 1.1em;
    position: relative;
    top: 0;
  }
  .line-base,
  .line-xtop {
    border-style: solid;
    border-width: 0.5pt 0 0 0;
    margin: 0;
    position: relative;
    width: 100%;
  }
  .line-base {
    border-color: rgba(0,0,0,0.6);
    top: -0.41em;
  }
  .line-xtop {
    border-color: rgba(0,0,0,0.3);
    top: -0.74em;
  }
</style>

<div class="line">
  <span class="sentence">{convertedText}</span>
  <hr class="line-xtop">
  <hr class="line-base">
  <span class="writing-space"></span>
  <hr class="line-xtop">
  <hr class="line-base">
</div>