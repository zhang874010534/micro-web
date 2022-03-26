<template>
  <nav>
    <div>主应用</div>
    <Header></Header>
<!--    微前端 container-->
    <div id="micro-container"></div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>

  </nav>
  <router-view/>
</template>
<script>
import {defineComponent} from "vue";
import Header from '@/components/Header.vue'
export default defineComponent({
  components: {
    Header: Header
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
