<script>
  import { onMount } from 'svelte'
  import { fade, fly } from 'svelte/transition'
  import { goto } from '@sapper/app'
  import Fa from 'svelte-fa'
  import { faSignInAlt, faSignOutAlt, faTimes } from '@fortawesome/free-solid-svg-icons'

  import Avatar from './Avatar.svelte'
  import { showDrawer, user } from '../store'
  import lang from '../locales/th.json'

  let height = 0

  onMount(() => {
    height = document.getElementsByTagName('html')[0].offsetHeight || 1000
  })

  function clickOutside(node, onEventFunction) {
    const isNestedChild = (parent, child) => {
      let currentNode = child
      while (currentNode !== null) {
        if (currentNode.parentNode === parent) {
          return true
        } else {
          currentNode = currentNode.parentNode
        }
      }
      return false
    }

    const isParent = target => {
      let parent = target.parentNode
      while (parent !== null) {
        if (parent.id === 'btnDrawer') {
          return true
        } else {
          parent = parent.parentNode
        }
      }
      return false
    }

    const handleClick = event => {
      const { target } = event
      if (
        target.id !== 'btnDrawer' &&
        node &&
        !node.isSameNode(target) &&
        !isNestedChild(node, target) &&
        !isParent(target)
      ) {
        onEventFunction()
      }
    }

    document.addEventListener('click', handleClick)
    return {
      destroy() {
        document.removeEventListener('click', handleClick)
      }
    }
  }

  function signIn() {
    $showDrawer = false
    goto('/login')
  }

  function signOut() {
    $user = null
  }
</script>

<style>
  .drawer-overlay {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .drawer {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 4rem;
    padding: 1rem 1.5rem;
    background-color: white;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
  .menu-item {
    @apply px-3 py-2 rounded-lg bg-gray-200 flex items-center;
  }
</style>

{#if $showDrawer}
  <div class="drawer-overlay" transition:fade />
  <div
    class="drawer"
    in:fly={{ y: height }}
    out:fly={{ y: height }}
    use:clickOutside={() => ($showDrawer = false)}>
    <div class="flex justify-end">
      <button
        on:click={() => ($showDrawer = false)}
        class="h-8 w-8 p-2 pr-0 rounded-full focus:border-transparent">
        <Fa icon={faTimes} class="text-lg text-gray-600" />
      </button>
    </div>
    <Avatar />
    {#if $user}
      <div class="mt-1 text-center">{$user.name}</div>
      <div class="mt-2">
        <div on:click={signOut} class="menu-item">
          <Fa icon={faSignOutAlt} class="text-gray-600" />
          <span class="ml-2">{lang.login.signOut}</span>
        </div>
      </div>
    {:else}
      <div on:click={signIn} class="menu-item">
        <Fa icon={faSignInAlt} class="text-gray-600" />
        <span class="ml-2">{lang.login.signIn}</span>
      </div>
    {/if}
  </div>
{/if}
