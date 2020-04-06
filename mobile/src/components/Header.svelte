<script>
  import { goto } from '@sapper/app'
  import Fa from 'svelte-fa'
  import { faChevronLeft, faSearch, faSlidersH, faUser } from '@fortawesome/free-solid-svg-icons'

  function back() {
    goto('/')
  }

  export let segment
</script>

<header class="fixed inset-x-0 top-0 h-10 bg-gray-300 inline-flex items-center">
  {#if segment}
    <button class="h-8 w-8 pl-2 ml-2 flex items-center focus:outline-none" on:click={back}>
      <Fa icon={faChevronLeft} class="text-xl text-gray-600" />
    </button>
  {:else}
    <button
      class="h-8 w-8 ml-2 border border-gray-400 rounded-full flex justify-center focus:outline-none">
      <Fa icon={faUser} class="text-md text-gray-600" />
    </button>
    <div class="relative ml-2 mr-1 flex-1 flex items-center">
      <input class="border outline-none rounded-full pl-5 pr-8 py-1 w-full text-sm" />
      <button class="absolute right-0 mr-3 focus:outline-none">
        <Fa icon={faSearch} class="text-sm text-gray-600" />
      </button>
    </div>
    <button class="h-8 w-8 mr-2 flex justify-center focus:outline-none">
      <Fa icon={faSlidersH} class="text-gray-600" />
    </button>
  {/if}
</header>
