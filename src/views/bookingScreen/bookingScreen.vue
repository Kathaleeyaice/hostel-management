<template>
  <div class="bookingScreen">
    <div class="bookingLeft">
      <h2>จองโรงแรม</h2>
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
            placeholder="ห้อง"
          />
        </div>
      </form>
    </div>
    <div class="bookingRight">
      <div class="imgBox">
        img
      </div>
      <div class="bookingButton">
        <button>จองโรงแรม</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookingScreen",
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
