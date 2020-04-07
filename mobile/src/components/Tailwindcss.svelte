<style global>
  @tailwind base;

  body {
    @apply text-base text-gray-900 font-light;
  }

  button {
    @apply flex items-center justify-center select-none font-normal;
    -webkit-tap-highlight-color: transparent;
  }

  button:focus,
  input:focus {
    @apply outline-none;
  }

  @tailwind utilities;
</style>
