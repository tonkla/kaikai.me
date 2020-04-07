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

<Header {segment} />

<main class="mt-10">
  <slot />
</main>

<Footer {segment} />
