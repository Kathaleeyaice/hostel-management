<template>
  <div class="loginScreen">
    <img src="./assets/bg.png" id="backgroung" />
    <img src="./assets/bg2.png" id="backgroung2" />
    <div class="loginBox">
      <div class="loginHeader">
        เข้าสู่ระบบ
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
        ยังไม่มีบัญชีใช่ไหม?<router-link to="/register">สร้างบัญชีผู้ใช้</router-link>
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
  font-size: 14px;
}
.loginBox {
  width: 20%;
  height: 50%;
  margin: auto;
  margin-top: 10%;
  box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  background-color: #f8f8f8;
}
.loginHeader {
  font-size: 20px;
  text-align: center;
  padding-top: 60px;
}
.loginForm {
  margin: auto;
  padding-top: 10%;
}
input {
  width: 60%;
  padding: 8px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  margin-left: 60px;
  margin-bottom: 10px;
}
.loginButton {
  background-color: #3c9ff5;
  border: none;
  color: white;
  padding: 8px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.25);
  margin-left: 100px;
  margin-top: 20px;
}
.loginButton:hover {
  box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.25);
  background-color: #6abaff;
}
.registerButton {
  text-align: center;
  margin-top: 10px;
}
a:link {
  text-decoration: none;
  color: black;
}
a:hover {
  text-decoration: underline;
}
#backgroung {
  left: 1170px;
  top: 350px;
}
</style>
