<template>
  <div class="navBar">
    <div>
      homeScreen
    </div>
    <div class="loginButton">
      Login
    </div>
  </div>
</template>

<script>

export default {
  name: "navBar",
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
  right: 0;
}
</style>
