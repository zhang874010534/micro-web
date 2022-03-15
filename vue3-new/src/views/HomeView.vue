<template>
  <div class="home">
    <div>我是vue3项目</div>
    <div>我是vue3项目</div>
    <div>我是vue3项目</div>
    <div>我是vue3项目</div>
    <div>我是vue3项目</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>
