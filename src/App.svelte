<script>
  import Line from './lib/Line.svelte'
  import Settings from './lib/Settings.svelte'
  
  let lines = []
  // const lines = [
  //   'm’n schoolschrift',
  //   // 'Aan',
  //   // 'Banaan',
  //   // 'Geschreven',
  //   // 'IJsje',
  //   // 'geschreven'
  //   // 'եgΉeΣsΎcΡhΑrΖeΟvΝeΟnХ',
  //   // 'OυmХ ΐeΥeΟnХ ώbнeΥeԶtΜjΉeѓ ώlλeΥeΣsαbыaΒaΑrХ ԾtΝeѓ ΏzΑÿΧnХ ΏzΒaΓlё dΖeѓ ϊpΑuΑnԲtΙgΧrΒoыoԿtԴtΝeѓ ϊvыaΑnХ ϊuΑwь ԾtΝeΡkΔsԱtБ dΑuΔs ώfгlκiЦnΓkХ ϊmΒoнeԶtΝeΟnХ ϊwыoфrΒdΖeΟnХ oфpΒgΉeΟvыoнeΟrΒdХ. IΗnХ dΖeΟzΖeѓ aΓlκiЦnΖeΠaХ ϊiќs dΕiэeѓ aΑnΒdΖeΟrΓhΒaΓlθfЭ ώkΖeΥeΟrХ ΏzΒoь gΧrΒoыoԿtБ aΓlιs dΕiэeѓ ϊvыaΑnХ dΖeѓ ԾtΝeΡkΔsԱtБ ϊiЦnХ dΑrΑuΓkΓlλeԶtԴtΝeΟrΔs ώhΕiэeΟrΓbыoфvнeΟnХ, ΐeΟnХ dΖeѓ ΏrΖeΠgΉeΡlηaΓfдsԱtΙaΑnΒdХ ΐeΟvнeΟnΖeΥeΟnΔs; oфnΒdΖeΟrХ- ΐeΟnХ ώbыoфvнeΟnΓlζuΔsβsδeΟnХ ΏrΒaΓkΖeΟnХ ΐeΡlθkΒaΒaΑrХ ΏzΒoь ϊnΖéԶtБ ϊnΕiэeԶtБ.'
  // ]
</script>

<main>
  {#each lines as line}
    <Line text={line} />
  {/each}
  <Settings bind:value={lines} />
</main>

<style>
  @font-face {
    font-family: "Schoolschrift";
    src: url("/Schoolschrift02.woff2");
  }

  :root {
    font-size: 150%;
  }
</style>
