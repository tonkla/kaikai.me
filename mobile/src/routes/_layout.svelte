<script>
  import Tailwindcss from '../components/Tailwindcss.svelte'
  import Header from '../components/Header.svelte'
  import Footer from '../components/Footer.svelte'

  export let segment
</script>

<Tailwindcss />

<Header {segment} />

<main class="mt-10">
  <slot />
</main>

<Footer {segment} />
