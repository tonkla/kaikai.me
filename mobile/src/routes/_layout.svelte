<script>
  import Tailwindcss from '../components/Tailwindcss.svelte'
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'

  export let segment
</script>

<svelte:head>
  <title>{segment ? segment.charAt(0).toUpperCase() + segment.slice(1) : 'Home'} / KaiKai.me</title>
</svelte:head>

<Tailwindcss />

{#if segment !== 'login'}
  <Header {segment} />
{/if}

{#if segment !== 'login'}
  <main class="mt-10">
    <slot />
  </main>
{:else}
  <main class="p-3">
    <slot />
  </main>
{/if}

{#if segment !== 'login'}
  <Footer {segment} />
{/if}
