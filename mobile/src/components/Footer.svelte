<script>
  import { goto } from '@sapper/app'
  import Fa from 'svelte-fa'
  import {
    faBullhorn,
    faGift,
    faHandHoldingHeart,
    faHome,
    faShoppingCart,
    faStore,
  } from '@fortawesome/free-solid-svg-icons'

  export let segment
</script>

<style>
  .btn {
    @apply p-2 leading-snug text-gray-600 flex-1 flex flex-col items-center select-none;
  }
  .btn:focus {
    @apply outline-none;
  }
  .active {
    @apply text-red-500;
  }
</style>

<footer
  class="fixed inset-x-0 bottom-0 h-12 px-3 bg-gray-300 border-t border-gray-400 flex items-stretch">
  <button class="btn" class:active={segment === undefined} on:click={() => goto('/')}>
    <Fa icon={faHome} class="text-lg" />
    <span class="text-xs ">HOME</span>
  </button>
  <button class="btn" class:active={segment === 'give'} on:click={() => goto('/give')}>
    <Fa icon={faGift} class="text-lg" />
    <span class="text-xs">GIVE</span>
  </button>
  <button class="btn" class:active={segment === 'gain'} on:click={() => goto('/gain')}>
    <Fa icon={faHandHoldingHeart} class="text-lg" />
    <span class="text-xs">GAIN</span>
  </button>
  <button class="btn" class:active={segment === 'sell'} on:click={() => goto('/sell')}>
    <Fa icon={faStore} class="text-lg" />
    <span class="text-xs">SELL</span>
  </button>
  <button class="btn" class:active={segment === 'buy'} on:click={() => goto('/buy')}>
    <Fa icon={faShoppingCart} class="text-lg" />
    <span class="text-xs">BUY</span>
  </button>
  <button class="btn" class:active={segment === 'post'} on:click={() => goto('/post')}>
    <Fa icon={faBullhorn} class="text-lg" />
    <span class="text-xs">POST</span>
  </button>
</footer>
