<script>
  import Fa from 'svelte-fa'
  import { faBars, faChevronLeft, faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons'

  import { showDrawer } from '../store'
  import lang from '../locales/th.json'

  export let segment

  function back() {
    window.history.back()
  }
</script>

<header class="fixed top-0 inset-x-0 h-12 bg-gray-300 inline-flex items-center">
  {#if segment === 'subpage'}
    <button class="btn h-8 w-8 pl-2 ml-1 justify-start text-gray-600" on:click={back}>
      <Fa icon={faChevronLeft} />
    </button>
  {:else}
    <button
      id="btnDrawer"
      class="h-9 w-9 ml-1 p-2 rounded-full text-gray-600"
      on:click={() => ($showDrawer = true)}>
      <Fa icon={faBars} />
    </button>
    <div class="relative flex-1 flex items-center">
      <input
        class="w-full pl-5 pr-8 py-2 border border-transparent rounded-full text-sm bg-gray-100
        focus:border-gray-400 focus:bg-white"
        placeholder={lang.search} />
      <button class="absolute right-0 mr-2 p-2 text-sm text-gray-600 focus:border-transparent">
        <Fa icon={faSearch} />
      </button>
    </div>
    <button class="h-9 w-9 mr-1 p-2 rounded-full text-gray-600">
      <Fa icon={faSlidersH} />
    </button>
  {/if}
</header>
