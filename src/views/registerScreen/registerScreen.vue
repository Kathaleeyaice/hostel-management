<template>
  <div class="registerScreen">
    <div class="navBar">
      <div class="homeBox">
        <router-link to="/">หน้าหลัก</router-link>
      </div>
    </div>
    <img src="./assets/bg.png" id="backgroung" />
    <img src="./assets/bg2.png" id="backgroung2" />
    <div class="createAccountBox">
      <div class="registerHeader">สร้างบัญชีผู้ใช้</div>
      <div>
        <input type="text" v-model="inputUsername" placeholder="ชื่อผู้ใช้" />
      </div>
      <div>
        <input type="password" v-model="inputPassword" placeholder="รหัสผ่าน" />
      </div>
      <div>
        <input
          type="password"
          v-model="inputRepassword"
          placeholder="ยืนยันรหัสผ่าน"
        />
      </div>
      <button v-on:click="createUser()" class="registerButton">
        สร้างบัญชี
      </button>
    </div>
  </div>
</template>

<script>
import config from "../../config.json";

export default {
  name: "registerScreen",
  data() {
    return {
      inputUsername: "",
      inputPassword: "",
      inputRepassword: ""
    };
  },
  methods: {
    createUser() {
      if (
        !this.inputUsername.length ||
        !this.inputPassword.length ||
        !this.inputRepassword.length
      ) {
        alert("กรุณากรอกข้อมูลให้ครบ");
        return;
      }
      if (!this.passwordValid()) {
        alert("รหัสผ่านไม่ตรงกัน");
        return;
      }
      fetch(`${config.api}/register`, {
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
            this.$router.push({
              path: "/login"
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    passwordValid() {
      if (this.inputPassword != this.inputRepassword) {
        return false;
      } else {
        return true;
      }
    }
  },
  components: {},
  props: {}
};
</script>
<style scoped>
.registerScreen {
  background-color: #f8f8f8;
  position: fixed;
  top: 0%;
  right: 0%;
  left: 0%;
  bottom: 0%;
  font-size: 14px;
}
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
a:link {
  text-decoration: none;
  color: black;
  font-size: 16px;
}
a:hover {
  text-decoration: underline;
  color: #3c9ff5;
}
.homeBox {
  width: 70%;
  padding: 2%;
}
.createAccountBox {
  width: 20%;
  height: 50%;
  margin: auto;
  margin-top: 10%;
  box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  background-color: #f8f8f8;
}
.registerHeader {
  font-size: 20px;
  text-align: center;
  padding-top: 60px;
  margin-bottom: 25px;
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
.registerButton {
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
  margin-left: 90px;
  margin-top: 20px;
}
.registeButton:hover {
  box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.25);
  background-color: #6abaff;
}
#backgroung {
  left: 1126px;
  top: 310px;
}
</style>
