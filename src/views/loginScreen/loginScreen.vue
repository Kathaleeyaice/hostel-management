<template>
  <div class="loginScreen">
    <div class="loginBox">
      <div class="loginHeader">
        LogIn
      </div>
      <div class="loginForm">
        <div>
          <input
            type="text"
            class="inputText"
            v-model="inputUsername"
            placeholder="ชื่อผู้ใช้"
          />
        </div>
        <div>
          <input
            type="password"
            class="inputText"
            v-model="inputPassword"
            placeholder="รหัสผ่าน"
          />
        </div>
      </div>
      <button v-on:click="loginAccount()" class="loginButton">LogIn</button>
      <div class="registerButton">
        Don't have an account?<router-link to="/register">Register</router-link>
      </div>
    </div>
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
<style scoped>
.loginScreen {
  background-color: #f8f8f8;
  position: fixed;
  top: 0%;
  right: 0%;
  left: 0%;
  bottom: 0%;
}
.loginBox {
  width: 20%;
  height: 50%;
  border: solid skyblue;
  margin: auto;
  margin-top: 10%;
}
.loginHeader {
  font-size: 20px;
  text-align: center;
  margin-top: 60px;
}
.loginForm {
  margin: auto;
  padding-top: 10%;
}
.inputText {
  width: 200px;
  margin-top: 15px;
  margin-left: 50px;
}
.loginButton {
  width: 50px;
  background-color: skyblue;
  box-shadow: none;
  margin: auto;
  margin-top: 5.247376vh;
  margin-left: 120px;
  cursor: pointer;
}
.registerButton {
  text-align: center;
  margin-top: 10px;
}
</style>
