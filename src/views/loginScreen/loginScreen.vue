<template>
  <div class="loginScreen">
    LogIn
    <div>
      <input type="text" v-model="inputUsername" placeholder="ชื่อผู้ใช้" />
    </div>
    <div>
      <input type="password" v-model="inputPassword" placeholder="รหัสผ่าน" />
    </div>
    <button v-on:click="loginAccount()">LogIn</button>
  </div>
</template>

<script>
import config from "../../config.json";

export default {
  name: "loginScreen",
  data() {
    return {
      inputUsername: "",
      inputPassword: ""
    };
  },
  methods: {
    loginAccount() {
      if (!this.inputUsername.length || !this.inputPassword.length) {
        alert("กรุณากรอกข้อมูลให้ครบ");
        return;
      }
      fetch(`${config.api}/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.inputUsername,
          password: this.inputPassword
        })
      })
        .then(response => {
          if (response.status == 401) {
            alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
          } else if (response.status != 200) {
            alert("มีบางอย่างผิดพลาด กรุณาลองใหม่ภายหลัง");
          } else {
            return response.json();
          }
        })
        .then(response => {
          localStorage.token = response.token;
          localStorage.username = response.username;
          this.$router.push({
            path: "/"
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {},
  props: {}
};
</script>
<style scoped></style>>
