<template>
  <nav v-if="!loading.loading">
    <router-link to="/">User Cards</router-link>
  </nav>
  <router-view />
</template>

<script>
import { useLoadingStore } from "@/stores/loading";

export default {
  setup() {
    const loading = useLoadingStore();

    return{loading}
  },
};
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
