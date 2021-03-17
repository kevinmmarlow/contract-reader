<template>
  <div class="p-6 max-w-sm mx-auto bg-white flex items-center space-x-4">
    <div class="flex-shrink-0">
      <img class="h-12 w-12" :src="logo" alt="ChitChat Logo" />
    </div>
    <div>
      <div class="text-xl font-medium text-black">ChitChat</div>
      <p class="text-gray-500">You have a new message!</p>
    </div>
    <div>
      <hello-world />
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import image from '@/assets/logo.png'

export default {
  name: 'App',
  components: { HelloWorld },
  data: function () {
    return {
      logo: image,
    }
  },
}
</script>

<style>
html {
  width: 400px;
  height: 400px;
}
</style>
