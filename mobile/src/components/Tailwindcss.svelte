<style global>
  @tailwind base;

  button {
    @apply flex items-center justify-center select-none;
    -webkit-tap-highlight-color: transparent;
  }
  button:focus,
  input:focus {
    border-color: #40a9ff;
    outline: none;
  }
  button:focus {
    color: #40a9ff;
  }
  button:disabled,
  input:disabled {
    @apply bg-gray-100 text-gray-400;
  }

  @tailwind utilities;
</style>
