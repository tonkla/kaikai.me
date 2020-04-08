<script>
  import { onDestroy } from 'svelte'

  import { userStore } from '../store'

  let user = null

  const unsubscribe = userStore.subscribe(value => (user = value))

  onDestroy(() => {
    unsubscribe()
  })

  function signOut() {
    userStore.set(null)
  }
</script>

{#if user}
  <div>
    <div>{user.name}</div>
    <button on:click={signOut}>Sign out</button>
  </div>
{/if}
