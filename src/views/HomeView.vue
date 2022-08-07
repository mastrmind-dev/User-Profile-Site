<template>
  <div v-if="!isLoaded">show it</div>
  <div @click="increment()">click</div>
  <div class="users" v-if="isLoaded">
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
</template>

<script>
import { useCounterStore } from "@/stores/counter";
import { ref, onBeforeMount, onMounted } from "vue";
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
    const counter = useCounterStore();

    const userInfo = ref([]);
    const isLoaded = ref(false);
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
              isLoaded.value = true;
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
      isLoaded.value = true;
    };
    // });

    function increment() {
      counter.increment();
    }

    return { userInfo, isLoaded, counter, increment };
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
