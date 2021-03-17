<template>
  <div
    class="pb-6 mx-auto bg-white flex flex-col justify-center divide-y divide-gray-100"
  >
    <div class="px-16 bg-gray-50">
      <div class="mt-4 mb-2 mx-auto flex space-x-6 align-center">
        <div class="flex-shrink-0">
          <img class="h-12 w-12" :src="logo" alt="Contract Reader Logo" />
        </div>
        <div>
          <div class="text-xl font-medium text-black">Contract Reader</div>
          <p class="text-gray-500">Read Eth contracts</p>
        </div>
      </div>
    </div>
    <div>
      <div
        class="py-4 px-6 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
      >
        <p>
          An advanced online playground for Tailwind CSS, including support for
          things like:
        </p>
        <ul class="list-disc space-y-2">
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-7">
              <svg
                class="flex-shrink-0 h-5 w-5 text-cyan-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <p class="ml-2">
              Customizing your
              <code class="text-sm font-bold text-gray-900">
                tailwind.config.js
              </code>
              file
            </p>
          </li>
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-7">
              <svg
                class="flex-shrink-0 h-5 w-5 text-cyan-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <p class="ml-2">
              Extracting classes with
              <code class="text-sm font-bold text-gray-900">@apply</code>
            </p>
          </li>
          <li class="flex items-start">
            <span class="h-6 flex items-center sm:h-7">
              <svg
                class="flex-shrink-0 h-5 w-5 text-cyan-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <p class="ml-2">Code completion with instant preview</p>
          </li>
        </ul>
        <p>
          Perfect for learning how the framework works, prototyping a new idea,
          or creating a demo to share online.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import image from '@/assets/patent.svg'

export default {
  name: 'App',
  data: function () {
    return {
      logo: image,
    }
  },
}
</script>

<style>
html {
  width: 357px;
  height: 600px;
}
</style>
