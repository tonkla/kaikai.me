<script>
  import { goto } from '@sapper/app'
  import Fa from 'svelte-fa'
  import { faChevronLeft, faSearch, faSlidersH, faUser } from '@fortawesome/free-solid-svg-icons'

  import lang from '../locales/th.json'

  function back() {
    window.history.back()
  }

  export let segment
</script>

<header class="fixed inset-x-0 top-0 h-10 bg-gray-300 inline-flex items-center">
  {#if segment}
    <button class="h-8 w-8 pl-2 ml-1 justify-start text-xl text-gray-600" on:click={back}>
      <Fa icon={faChevronLeft} />
    </button>
  {:else}
    <button
      class="h-8 w-8 ml-2 border border-gray-400 rounded-full text-md text-gray-600"
      on:click={() => goto('/login')}>
      <Fa icon={faUser} />
    </button>
    <div class="relative ml-2 mr-1 flex-1 flex items-center">
      <input
        class="w-full pl-5 pr-8 py-1 border rounded-full text-sm bg-gray-100 focus:bg-white"
        placeholder={lang.search} />
      <button class="absolute right-0 mr-2 p-2 text-sm text-gray-600 ">
        <Fa icon={faSearch} />
      </button>
    </div>
    <button class="h-8 w-8 mr-2 rounded-full text-gray-600">
      <Fa icon={faSlidersH} />
    </button>
  {/if}
</header>
