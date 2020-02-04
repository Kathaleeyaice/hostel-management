<template>
  <div class="homeScreen">
    <div class="navBar">
      <div>
        หน้าหลัก
      </div>
      <div class="loginButton">
        เข้าสู่ระบบ
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "homeScreen",
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
.loginButton {
  width: 50%;
  right: 0;
  text-align: right;
}
</style>
