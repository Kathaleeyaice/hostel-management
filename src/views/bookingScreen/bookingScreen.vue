<template>
  <div class="bookingScreen">
    <div class="bookingLeft">
      <h2>จองโรงแรม {{ $route.query.name }}</h2>
      <form>
        <div class="inputBox">
          <input
            type="text"
            class="inputText"
            v-model="inputName"
            placeholder="ชื่อ-นามสกุล"
          />
        </div>
        <div class="inputBox">
          <input
            type="text"
            class="inputText"
            v-model="inputAddress"
            placeholder="ที่อยู่"
          />
        </div>
        <div class="inputBox">
          <input
            type="text"
            class="inputText"
            v-model="inputTel"
            placeholder="เบอร์โทร"
          />
        </div>
        <div class="inputBox">
          <input
            type="text"
            class="inputText"
            v-model="inputDate"
            placeholder="วันที่ต้องการจอง (วว/ดด/ปปปป - วว/ดด/ปปปป)"
          />
        </div>
        <div class="inputBox">
          <input
            type="text"
            class="inputText"
            v-model="inputRoom"
            placeholder="จำนวนห้อง"
          />
        </div>
      </form>
      <div>
        <button v-on:click="bookingHotel()" class="bookingButton">
          จองโรงแรม
        </button>
      </div>
    </div>
    <div class="bookingRight">
      <div>
        <img
          src="https://q-cf.bstatic.com/images/hotel/max1024x768/216/216004253.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import config from "../../config.json";

export default {
  name: "bookingScreen",
  data() {
    return {
      inputName: "",
      inputAddress: "",
      inputTel: "",
      inputDate: "",
      inputRoom: ""
    };
  },
  methods: {
    bookingHotel() {
      if (!localStorage.token) {
        alert("กรุณาเข้าสู่ระบบก่อนจองโรงแรม");
        return;
      }
      if (
        !this.inputName.length ||
        !this.inputAddress.length ||
        !this.inputTel.length ||
        !this.inputDate.length ||
        !this.inputRoom.length
      ) {
        alert("กรุณากรอกข้อมูลให้ครบ");
        return;
      }
      fetch(`${config.api}/booking`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.token
        },
        body: JSON.stringify({
          username: this.inputName,
          hotelName: this.$route.query.name,
          hotelID: this.$route.query.id,
          address: this.inputAddress,
          phoneNumber: this.inputTel,
          dateBooking: this.inputDate,
          rooms: this.inputRoom
        })
      })
        .then(response => {
          if (response.status != 200) {
            alert("มีบางอย่างผิดพลาด กรุณาลองใหม่ภายหลัง");
          } else {
            this.$router.push({
              path: `/mybooking`
            });
          }
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
.bookingScreen {
  top: 10vh;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  padding: 2%;
  display: inline-flex;
}
.bookingLeft {
  width: 50%;
  height: 100%;
}
.inputBox {
  margin: 3%;
}
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
}
.bookingRight {
  width: 50%;
  height: 100%;
}
img {
  width: 650px;
  height: 400px;
  margin: 3vw;
  box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
}
.bookingButton {
  background-color: #3c9ff5;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.25);
  margin-left: 575px;
}
.bookingButton:hover {
  box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.25);
  background-color: #6abaff;
}
</style>
