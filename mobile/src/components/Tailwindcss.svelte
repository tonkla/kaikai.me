<style global>
  @tailwind base;

  body {
    @apply text-base text-gray-900 font-light;
  }

  button {
    @apply flex items-center justify-center select-none;
    -webkit-tap-highlight-color: transparent;
  }

  button:focus,
  input:focus {
    @apply outline-none border border-blue-400;
  }

  button:disabled,
  input:disabled {
    @apply bg-gray-100 text-gray-400;
  }

  @tailwind utilities;
</style>
