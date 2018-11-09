<template>
  <div>
    <div class="home">
      HOME
    </div>
    <div class="home">
      <router-link to="list">ABOUT</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style>
.home {
  font-size: 50px;
}
</style>

