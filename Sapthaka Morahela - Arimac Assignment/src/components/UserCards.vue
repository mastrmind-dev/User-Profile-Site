<template>
  <div class="user-card">
    <img
      :src="`https://avatars.dicebear.com/v2/avataaars/${userName}.svg?options[mood][]=happy`"
      alt="avatar"
      style="height: 100px; width: 100px"
    />
    <div class="user-details">
      <div class="name">
        <!-- <EMail style="width: 1rem; color: red" />{{ name }}
        <Phone style="width: 1rem; color: red" />{{ name }} -->
      </div>
      <div class="email"><fa icon="fa-solid fa-envelope" /> {{ email }}</div>
      <div class="phone"><fa icon="fa-solid fa-phone" /> {{ phone }}</div>
      <div class="website"><fa icon="fa-solid fa-globe" /> {{ website }}</div>
    </div>
  </div>
</template>

<script>
// import { EMail, Phone } from "@ring-ui-vue/icons-vue";
export default {
  name: "UserCards",
  props: {
    userName: String,
    name: String,
    phone: String,
    email: String,
    website: String,
  },
  // components: {
  //   EMail,
  //   Phone,
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.user-card {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 8px;

  .user-details {
    text-align: left;
    .name {
      font-weight: bolder;
    }
  }
}
</style>
