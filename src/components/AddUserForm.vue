<template>
  <div v-if="clicked.clicked">
    <div class="form-background"></div>
    <form @submit="addUser()" class="form">
      <label for="name">Name </label><br />
      <input
        type="text"
        id="name"
        name="name"
        v-model="name"
        placeholder="Enter the name..."
      /><br />
      <label for="username">Username </label><br />
      <input
        type="text"
        id="username"
        name="username"
        v-model="username"
        placeholder="Enter the username..."
      /><br />
      <label for="email">Email </label><br />
      <input
        type="text"
        id="email"
        name="email"
        v-model="email"
        placeholder="Enter the email..."
      /><br />
      <label for="phone">Telephone </label><br />
      <input
        type="text"
        id="phone"
        name="phone"
        v-model="phone"
        placeholder="Enter the telephone..."
      /><br />
      <label for="web">Website </label><br />
      <input
        type="text"
        id="web"
        name="web"
        v-model="web"
        placeholder="Enter the website..."
      /><br />
      <div class="buttons">
        <button class="btn" @click="clicked.gotUnClicked()">cancel</button>
        <input type="submit" class="btn" value="submit" />
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useClickedStore } from "@/stores/clicked";
export default {
  name: "AddUserForm",
  setup() {
    const clicked = useClickedStore();
    const name = ref("");
    const username = ref("");
    const email = ref("");
    const phone = ref("");
    const web = ref("");

    const addUser = () => {
      console.log(name.value, email.value, phone.value, web.value);
      fetch(`http://localhost:3000/users`, {
        method: "POST",
        body: JSON.stringify({
          name: name.value,
          username: username.value,
          email: email.value,
          phone: phone.value,
          website: web.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    };

    return { name, email, phone, web, username, addUser, clicked };
  },
};
</script>

<style scoped lang="scss">
.form-background {
  position: absolute;
  background: black;
  opacity: 0.5;
  height: 100%;
  width: 100%;
}
.form {
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 8px;
  max-width: fit-content;
  left: 42%;
  top: 44%;
  padding: 2%;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 10px;
  z-index: 99;
  position: absolute;
  background: white;
}
.buttons {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.btn {
  border: 2px solid #42b983;
  border-radius: 8px;
  padding: 5px;
  margin-top: 8px;
  &:hover {
    background-color: #42b981;
    color: white;
  }
  font-weight: bold;
}
label {
  color: #42b981;
  font-weight: bold;
}
</style>