<template>
  <nav>
    <div>主应用</div>
    <Header></Header>
    <button @click="navigatorTo('/vue3#/')">vue3</button>
    <button @click="navigatorTo('/react17#/')">react17</button>
<!--    微前端 container-->
    <div id="micro-container"></div>

  </nav>
  <router-view/>
</template>
<script>
import {defineComponent} from "vue";
import Header from '@/components/Header.vue'
export default defineComponent({
  components: {
    Header: Header
  },
  data() {
    return {

    }
  },
  created() {
  },
  methods: {
    navigatorTo(url) {
      window.history.pushState('', '', url)
    }
  }
})
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
