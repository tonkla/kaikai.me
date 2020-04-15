<style global>
  @tailwind base;

  html {
    font-family: Prompt, sans-serif;
    font-size: 18px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.8);
  }

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

  button.primary {
    background-color: #1890ff;
    border-color: #1890ff;
    color: white;
  }
  button.primary:disabled {
    @apply bg-gray-100 border-gray-300 text-gray-400;
  }

  @tailwind utilities;

  .h-14 {
    height: 3.5rem;
  }
  .mb-14 {
    margin-bottom: 3.5rem;
  }
</style>
