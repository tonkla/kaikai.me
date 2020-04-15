<script>
  import { onMount } from 'svelte'
  import { goto } from '@sapper/app'
  import Fa from 'svelte-fa'
  import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

  import { user } from '../store'
  import lang from '../locales/th.json'

  let txtEmail = null
  let btnSignIn = null
  let email = 'admin@kaikai.me'
  let showMessage = false

  onMount(() => {
    if ($user) goto('/')
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
    setTimeout(() => {
      $user = { name: 'Admin', pictureUrl: 'https://i.pravatar.cc/100' }
      goto('/')
    }, 1500)
  }
</script>

<div class="h-full p-4 pt-24 flex items-center flex-col">
  <div class="w-full text-gray-800">
    <input
      bind:this={txtEmail}
      bind:value={email}
      placeholder={lang.login.email}
      class="w-full px-3 py-2 border rounded-lg text-center" />
    <button
      bind:this={btnSignIn}
      on:click={signIn}
      class="w-full mt-2 px-3 py-2 border rounded-lg primary">
      {lang.login.signIn}
    </button>
  </div>
  {#if showMessage}
    <div class="ant-alert ant-alert-success mt-4">
      <Fa icon={faCheckCircle} class="ant-alert-success-icon" />
      <span class="ant-alert-message">{lang.login.signInMessage}</span>
    </div>
  {/if}
</div>
