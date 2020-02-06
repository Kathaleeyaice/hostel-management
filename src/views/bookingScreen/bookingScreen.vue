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
            placeholder="วันที่จอง"
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
    </div>
    <div class="bookingRight">
      <div class="imgBox">
        img
      </div>
      <div class="bookingButton">
        <button v-on:click="bookingHotel()">จองโรงแรม</button>
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
  width: 80%;
  right: 0;
  margin-right: 0;
}
.bookingRight {
  width: 50%;
  height: 100%;
}
.imgBox {
  width: 100%;
  height: 70%;
  background-color: antiquewhite;
}
.bookingButton {
  right: 0;
}
</style>
