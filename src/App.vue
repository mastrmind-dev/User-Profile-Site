<template>
  <div v-if="!loading.loading">
    <nav>
      <router-link to="/">User Cards</router-link>
    </nav>
    <button class="btn btn-add-user" @click="clicked.gotClicked()">
      Add User
    </button>
  </div>
  <div v-if="clicked.clicked">
    <AddUserForm />
  </div>
  <router-view />
</template>

<script>
import { useLoadingStore } from "@/stores/loading";
import {useClickedStore} from "@/stores/clicked"
import AddUserForm from "@/components/AddUserForm.vue"
export default {
  components:{
    AddUserForm,
  },
  setup() {
    const loading = useLoadingStore();
    const clicked = useClickedStore();

    return { loading, clicked };
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
.btn {
  border: 2px solid #42b983;
  border-radius: 8px;
  &:hover {
    background-color: #42b981;
    color: white;
  }
}
.btn-add-user {
  margin-bottom: 1%;
  padding: 0.7%;
  font-size: 1rem;
  font-weight: bold;
}
</style>
