<template>
  <div class="registerScreen">
    Create Account
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
    <button v-on:click="createUser()">create</button>
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
        !this.inputPassword ||
        !this.inputRepassword
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
<style scoped></style>>
