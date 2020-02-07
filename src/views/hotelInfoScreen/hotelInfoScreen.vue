<template>
  <div class="hotelInfoScreen">
    <div v-if="!isLoading">
      <div class="infoTop">
        <div class="infoTopLeft">
          <div class="imgBox">
            <img
              src="https://q-cf.bstatic.com/images/hotel/max1024x768/216/216004253.jpg"
            />
          </div>
        </div>
        <div class="infoTopRight">
          <div class="nameHeader">{{ hotelInfo.name }}</div>
          <div class="dataText">รายละเอียด :{{ hotelInfo.detail }}</div>
          <div v-if="hotelInfo.available" class="dataText" style="color:green">
            สถานะ : ว่าง
          </div>
          <div v-else class="dataText" style="color:red">
            สถานะ : ไม่ว่าง
          </div>
          <div class="dataText">ราคา :{{ hotelInfo.price }}</div>
          <button v-on:click="goBooking()" class="bookingButton">
            จองโรงแรม
          </button>
        </div>
      </div>
      <div class="infoBottom">
        <div class="nameHeader">ที่อยู่</div>
        <div>{{ hotelInfo.map.address }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "../../config.json";

export default {
  name: "hotelInfoScreen",
  data() {
    return {
      hotelInfo: null,
      isLoading: true
    };
  },
  components: {},
  props: {},
  mounted() {
    this.fetchHotel();
  },
  methods: {
    fetchHotel() {
      fetch(`${config.api}/hotel/info/${this.$route.params.id}`, {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      })
        .then(response => {
          if (response.status != 200) {
            console.log("ERROR Status: " + response.status);
          } else {
            return response.json();
          }
        })
        .then(response => {
          this.hotelInfo = response.data;
          this.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    goBooking() {
      this.$router.push({
        path: `/booking?id=${this.hotelInfo.id}&name=${this.hotelInfo.name}`
      });
    }
  }
};
</script>
<style scoped>
.hotelInfoScreen {
  top: 5vw;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
}
.infoTop {
  display: inline-flex;
  margin: auto;
  width: 100%;
  height: 50%;
}
.infoTopLeft {
  width: 50%;
}
img {
  width: 650px;
  height: 400px;
  margin: 3vw;
  box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
}
.infoTopRight {
  width: 50%;
  margin: 3vw;
}
.nameHeader {
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 1vw;
}
.dataText {
  margin-bottom: 0.5vw;
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
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.25);
}
.infoBottom {
  margin-left: 3vw;
}
</style>
