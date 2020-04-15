<script>
  import { goto } from '@sapper/app'
  import Fa from 'svelte-fa'
  import {
    faBullhorn,
    faGift,
    faHandHoldingHeart,
    faHome,
    faShoppingCart,
    faStore
  } from '@fortawesome/free-solid-svg-icons'

  import lang from '../locales/th.json'

  export let segment
</script>

<style>
  .btn {
    @apply p-2 pt-3 leading-snug text-gray-600 flex-1 flex flex-col items-center select-none;
  }
  .btn:focus {
    @apply outline-none border-transparent;
  }
  .active {
    @apply text-red-500;
  }
</style>

<footer
  class="fixed bottom-0 inset-x-0 h-14 px-3 bg-gray-300 border-t border-gray-400 flex items-stretch">
  <button class="btn" class:active={segment === undefined} on:click={() => goto('/')}>
    <Fa icon={faHome} class="text-xl" />
    <span class="text-sm">{lang.nav.home}</span>
  </button>
  <button class="btn" class:active={segment === 'charity'} on:click={() => goto('/charity')}>
    <Fa icon={faHandHoldingHeart} class="text-xl" />
    <span class="text-sm">{lang.nav.gain}/{lang.nav.give}</span>
  </button>
  <button class="btn" class:active={segment === 'commerce'} on:click={() => goto('/commerce')}>
    <Fa icon={faShoppingCart} class="text-xl" />
    <span class="text-sm">{lang.nav.buy}/{lang.nav.sell}</span>
  </button>
  <button class="btn" class:active={segment === 'post'} on:click={() => goto('/post')}>
    <Fa icon={faBullhorn} class="text-xl" />
    <span class="text-sm">{lang.nav.post}</span>
  </button>
</footer>
