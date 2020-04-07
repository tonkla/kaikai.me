<script>
  import { onMount, onDestroy } from 'svelte'
  import { goto } from '@sapper/app'

  import { userStore } from '../store'
  import lang from '../locales/th.json'

  let user

  const unsubscribe = userStore.subscribe(value => (user = value))

  onMount(() => {
    if (user) goto('/')
  })

  onDestroy(() => {
    unsubscribe()
  })

  async function signIn() {
    userStore.update(() => ({
      name: 'admin',
    }))
    await goto('/')
  }
</script>

<div class="p-3 flex justify-center text-gray-800">
  <input placeholder={lang.email} class="px-3 py-2 border rounded flex-1" />
  <button class="px-4 py-2 border rounded ml-2" on:click={signIn}>{lang.signIn}</button>
</div>
