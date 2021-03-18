<template>
  <div class="h-screen bg-white flex flex-col justify-between items-stretch">
    <div class="px-16 bg-gray-200">
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
    <div class="p-6">
      Icons made by
      <a href="https://www.freepik.com" title="Freepik">Freepik</a>
      from
      <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </div>
  </div>
</template>

<script>
import image from '@/assets/patent_2.svg'

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
  width: 100%;
  min-height: 600px;
}
</style>
