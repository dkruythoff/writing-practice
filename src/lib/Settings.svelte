<script>
  export let value = []
  let newValue = ''

  function remove(index) {
    if (typeof value[index] !== 'undefined'){
      value = [...value.slice(0, index), ...value.slice(index + 1)]
    }
  }

  function add() {
    value = [...value, newValue]
    newValue = ''
  }

  function newValueKeydown(evt) {
    if (evt.keyCode === 13) {
      add()
    }
  }
</script>

<section>
  {#if value.length > 0}
  <dl>
    {#each value as line, index}
      <dd>
        {line}
        <button class="remove" on:click={() => remove(index)}>✘</button>
      </dd>
    {/each}
  </dl>
  {/if}
  <input class="add-input" on:keydown={newValueKeydown} bind:value={newValue} />
  <button class="add" on:click={add}>&raquo;</button>
</section>

<style>
  section {
    background-color: #fff;
    border-radius: 0.5rem;
    padding: 1.5rem 0.5rem 0.5rem 0.5rem;
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 2;
  }
  dl {
    margin: 0 0 0.5rem 0;
  }
  dd {
    margin: 0;
    padding: 0 2em 0 0;
    position: relative;
  }
  .remove {
    position: absolute;
    right: 0;
  }
  @media print {
    section {
      display: none;
    }
  }
</style>