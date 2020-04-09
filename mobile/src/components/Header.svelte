<script>
  import Fa from 'svelte-fa'
  import { faChevronLeft, faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons'

  import Avatar from './Avatar.svelte'
  import lang from '../locales/th.json'

  export let segment

  function back() {
    window.history.back()
  }
</script>

<style>
  .btn:focus {
    @apply border-transparent bg-gray-200;
  }
</style>

<header class="fixed inset-x-0 top-0 h-10 bg-gray-300 inline-flex items-center">
  {#if segment}
    <button class="btn h-8 w-8 pl-2 ml-1 justify-start text-xl text-gray-600" on:click={back}>
      <Fa icon={faChevronLeft} />
    </button>
  {:else}
    <Avatar />
    <div class="relative ml-2 mr-1 flex-1 flex items-center">
      <input
        class="w-full pl-5 pr-8 py-1 border rounded-full text-sm bg-gray-100 focus:bg-white"
        placeholder={lang.search} />
      <button class="absolute right-0 mr-2 p-2 text-sm text-gray-600 focus:border-transparent">
        <Fa icon={faSearch} />
      </button>
    </div>
    <button class="btn h-8 w-8 mr-2 rounded-full text-gray-600">
      <Fa icon={faSlidersH} />
    </button>
  {/if}
</header>
