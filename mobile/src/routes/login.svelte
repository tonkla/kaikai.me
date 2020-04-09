<script>
  import { onMount } from 'svelte'
  import { goto } from '@sapper/app'
  import Fa from 'svelte-fa'
  import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

  import { userStore } from '../store'
  import lang from '../locales/th.json'

  let user = null
  let txtEmail = null
  let btnSignIn = null
  let email = ''
  let showMessage = false

  userStore.subscribe(value => (user = value))

  onMount(() => {
    if (user) goto('/')
  })

  function signIn() {
    if (email.trim() === '' || !/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
      email = ''
      txtEmail.focus()
      return
    }
    txtEmail.disabled = true
    btnSignIn.disabled = true
    showMessage = true
    setTimeout(async () => {
      userStore.update(() => ({ name: 'Admin', pictureUrl: 'https://i.pravatar.cc/100' }))
      await goto('/')
    }, 1500)
  }
</script>

<div>
  <div class="flex justify-center text-gray-800">
    <input
      bind:this={txtEmail}
      bind:value={email}
      placeholder={lang.login.email}
      class="px-3 py-2 border rounded flex-1" />
    <button bind:this={btnSignIn} on:click={signIn} class="px-4 py-2 border rounded ml-2">
      {lang.login.signIn}
    </button>
  </div>
  {#if showMessage}
    <div class="mt-2 p-2 border border-green-500 rounded flex items-center">
      <Fa icon={faCheckCircle} class="text-xl text-green-500" />
      <span class="ml-2">{lang.login.signInMessage}</span>
    </div>
  {/if}
</div>
