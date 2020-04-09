<script>
  import { onMount } from 'svelte'

  import { userStore } from '../store'

  let user = null

  userStore.subscribe(value => (user = value))

  onMount(() => {
    if (!user) {
      userStore.set({ name: 'Admin', pictureUrl: 'https://i.pravatar.cc/100' })
    }
  })

  function signOut() {
    userStore.set(null)
  }
</script>

<div class="p-2" />
