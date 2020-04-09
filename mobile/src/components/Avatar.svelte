<script>
  import Fa from 'svelte-fa'
  import { faUser } from '@fortawesome/free-solid-svg-icons'

  import { drawerStore, userStore } from '../store'

  let user = null

  userStore.subscribe(value => (user = value))
</script>

<style>
  img {
    position: static;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  .btn:focus {
    @apply border-none bg-gray-200;
  }
</style>

<button
  id="btnAvatar"
  class="btn ml-2"
  on:click={() => drawerStore.set({ init: true, show: true })}>
  {#if user}
    {#if user.pictureUrl}
      <div class="h-8 w-8">
        <img src={user.pictureUrl} alt="avatar" />
      </div>
    {:else}
      <div
        class="h-8 w-8 border border-gray-400 rounded-full text-md text-gray-600 flex items-center
        justify-center">
        <Fa icon={faUser} />
      </div>
    {/if}
  {:else}
    <div
      class="h-8 w-8 border border-gray-400 rounded-full text-md text-gray-600 flex items-center
      justify-center">
      <Fa icon={faUser} />
    </div>
  {/if}
</button>
