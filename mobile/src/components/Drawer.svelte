<script>
  import { goto } from '@sapper/app'

  import { drawerStore, userStore } from '../store'

  let drawer = { init: false, show: false }
  let user = null

  drawerStore.subscribe(value => (drawer = value))
  userStore.subscribe(value => (user = value))

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
        if (parent.id === 'btnAvatar') {
          return true
        } else {
          parent = parent.parentNode
        }
      }
      return false
    }

    const handleClick = event => {
      const { target } = event
      if (node && !node.isSameNode(target) && !isNestedChild(node, target) && !isParent(target)) {
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

  function signOut() {
    userStore.set(null)
  }
</script>

<style>
  .drawer-overlay {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .drawer-overlay.fade-in {
    background-color: rgba(0, 0, 0, 0.6);
  }
  .drawer-overlay.fade-out {
    display: none;
  }

  .drawer {
    height: 100vh;
    width: 70%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
  }
  .drawer.slide-in {
    animation: slide-in 0.4s forwards;
    -webkit-animation: slide-in 0.4s forwards;
  }
  .drawer.slide-out {
    animation: slide-out 0.4s forwards;
    -webkit-animation: slide-out 0.4s forwards;
  }
  @keyframes slide-in {
    100% {
      transform: translateX(0%);
    }
  }
  @-webkit-keyframes slide-in {
    100% {
      -webkit-transform: translateX(0%);
    }
  }
  @keyframes slide-out {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @-webkit-keyframes slide-out {
    0% {
      -webkit-transform: translateX(0%);
    }
    100% {
      -webkit-transform: translateX(-100%);
    }
  }
</style>

{#if drawer.init}
  <div class="drawer-overlay" class:fade-in={drawer.show} class:fade-out={!drawer.show} />
  <div
    class="drawer bg-gray-500 p-2"
    class:slide-in={drawer.show}
    class:slide-out={!drawer.show}
    use:clickOutside={() => drawerStore.set({ init: true, show: false })}>
    {#if user}
      <div>{user.name}</div>
      <div on:click={signOut}>Sign out</div>
    {:else}
      <div on:click={() => goto('/login')}>Sign in</div>
    {/if}
  </div>
{/if}
