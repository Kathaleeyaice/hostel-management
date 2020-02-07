<template>
  <div class="homeScreen">
    <div class="navBar">
      <div class="homeBox">
        <router-link to="/">หน้าหลัก</router-link>
      </div>
      <div class="loginBox" v-if="!token">
        <router-link to="/login">เข้าสู่ระบบ</router-link>
      </div>
      <div class="menuBox" v-else>
        <div class="menuStyle">
          {{ username }}
        </div>
        <router-link to="mybooking" class="menuStyle">
          รายชื่อโรงแรมที่จอง
        </router-link>
        <div v-on:click="logout()" class="menuStyle" id="logputButton">
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
  width: 100vw;
  height: 5vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: inline-flex;
  box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.25);
}
.homeBox {
  width: 70%;
  padding: 2%;
}
a:link {
  text-decoration: none;
  color: black;
}
a:hover {
  text-decoration: underline;
}
.loginBox {
  width: 30%;
  right: 0;
  text-align: right;
  padding: 2%;
}
.menuBox {
  display: inline-flex;
  right: 0;
  text-align: right;
  padding: 2%;
  margin: auto;
}
.menuStyle {
  margin-left: 10px;
}
</style>
