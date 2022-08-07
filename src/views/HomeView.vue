<template>
  <div class="users" v-if="!loading.loading">
    <div class="user" v-for="user in userInfo" :key="user.id">
      <UserCards
        :userName="user.username"
        :name="user.name"
        :email="user.email"
        :website="user.website"
        :phone="user.phone"
      />
    </div>
  </div>
  <h1 v-if="loading.loading">Loading...</h1>
</template>

<script>
import { useLoadingStore } from "@/stores/loading";
import { ref } from "vue";
// @ is an alias to /src
import UserCards from "@/components/UserCards.vue";

export default {
  name: "HomeView",
  components: {
    UserCards,
  },
  // data() {
  //   return {
  //     isLoaded: false,
  //   };
  // },
  // mounted() {
  //   console.log("exec");
  //   this.isLoaded = true;
  //   console.log(this.isLoaded);
  // },
  setup() {
    const loading = useLoadingStore();

    const userInfo = ref([]);
    // onMounted(() => {
    fetch(`http://localhost:3000/users`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.length == 0) {
          fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              addInitialData(data);
            });
        } else {
          fetch(`http://localhost:3000/users`)
            .then((response) => response.json())
            .then((data) => {
              userInfo.value = data[0].data;
              console.log(userInfo.value);
              loading.isLoading();
            });
        }
      });

    const addInitialData = (data) => {
      fetch(`http://localhost:3000/users`, {
        method: "POST",
        body: JSON.stringify({ data }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      userInfo.value = data;
      loading.isLoading();
    };
    // });

    return { userInfo, loading };
  },
};
</script>

<style lang="scss">
.users {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 8px;
}

.user {
  width: 22%;
  margin: 15px;
}
</style>
