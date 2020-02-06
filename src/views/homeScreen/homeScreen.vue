<template>
  <div class="homeScreen">
    <div class="navBar">
      <div class="homeBox">
        <router-link to="/">หน้าหลัก</router-link>
      </div>
      <div class="loginBox" v-if="!token">
        <router-link to="/login">เข้าสู่ระบบ</router-link>
      </div>
      <div class="" v-else>
        {{ username }}
        <router-link to="mybooking">รายชื่อโรงแรมที่จอง</router-link>
        <div v-on:click="logout()">
          ออกจากระบบ
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "homeScreen",
  data() {
    return {
      token: "",
      username: ""
    };
  },
  mounted() {
    this.token = localStorage.token;
    this.username = localStorage.username;
  },
  methods: {
    logout() {
      localStorage.clear();
      location.reload();
    }
  },
  components: {},
  props: {}
};
</script>

<style scoped>
.navBar {
  width: 100%;
  height: 10vh;
  background-color: grey;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: inline-flex;
}
.homeBox {
  width: 70%;
  padding: 2%;
}
.loginBox {
  width: 30%;
  right: 0;
  text-align: right;
  padding: 2%;
}
</style>
