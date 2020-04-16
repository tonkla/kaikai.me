<script>
  import Fa from 'svelte-fa'
  import { faUser } from '@fortawesome/free-solid-svg-icons'

  import { user } from '../store'
</script>

<style>
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    text-align: center;
  }
  .avatar {
    @apply h-20 w-20 rounded-full border-2 flex items-center justify-center;
  }
</style>

{#if $user}
  {#if $user.pictureUrl}
    <div class="center">
      <div class="avatar">
        <img src={$user.pictureUrl} alt="avatar" />
      </div>
    </div>
  {:else}
    <div class="center">
      <div class="avatar">
        <Fa icon={faUser} class="text-5xl text-gray-500" />
      </div>
    </div>
  {/if}
{/if}
