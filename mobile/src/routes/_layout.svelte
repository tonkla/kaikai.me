<script>
  import Tailwindcss from '../components/Tailwindcss.svelte'
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'
  import Drawer from '../components/Drawer.svelte'

  export let segment
</script>

<svelte:head>
  <title>{segment ? segment.charAt(0).toUpperCase() + segment.slice(1) : 'Home'} / kaikai.me</title>
</svelte:head>

<Tailwindcss />

{#if segment !== 'login'}
  <Header {segment} />
{/if}

{#if segment !== 'login'}
  <main class="h-full overflow-y-scroll mt-12 mb-14">
    <slot />
  </main>
{:else}
  <main class="h-full">
    <slot />
  </main>
{/if}

{#if segment !== 'login'}
  <Footer {segment} />
{/if}

{#if segment !== 'login'}
  <Drawer />
{/if}
