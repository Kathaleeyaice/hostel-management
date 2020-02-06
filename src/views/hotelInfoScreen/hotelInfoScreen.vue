<template>
  <div class="hotelInfoScreen">
    <div v-if="!isLoading">
      <div class="infoTop">
        <div class="infoTopLeft">
          <div class="imgBox"></div>
        </div>
        <div class="infoTopRight">
          <h2>{{ hotelInfo.name }}</h2>
          <div>รายละเอียด :{{ hotelInfo.detail }}</div>
          <div v-if="hotelInfo.available">
            สถานะ : ว่าง
          </div>
          <div v-else>
            สถานะ : ไม่ว่าง
          </div>
          <div>ราคา :{{ hotelInfo.price }}</div>
        </div>
      </div>
      <div class="infoBottom">
        <h2>ที่อยู่</h2>
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
    }
  }
};
</script>
<style scoped>
.hotelInfoScreen {
  top: 10vh;
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
.imgBox {
  width: 80%;
  height: 100%;
  margin: auto;
  background-color: antiquewhite;
}
.infoTopRight {
  width: 50%;
}
</style>
