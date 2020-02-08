<template>
  <div class="hotelListScreen">
    <div class="filterBox">
      <input
        type="checkbox"
        id="checkbox"
        v-model="showAvailable"
      />โรงแรมที่ว่าง
    </div>
    <div v-if="!isLoading">
      <hotelListBox
        :hotelList="hotelLists"
        :status="showAvailable"
      ></hotelListBox>
    </div>
  </div>
</template>

<script>
import hotelListBox from "@/views/hotelListScreen/components/hotelListBox.vue";
import config from "../../config.json";

export default {
  name: "hotelListScreen",
  data() {
    return {
      hotelLists: [],
      showAvailable: false,
      availableToggle: false,
      isLoading: true
    };
  },
  components: {
    hotelListBox
  },
  mounted() {
    this.fetchHotel();
  },
  methods: {
    fetchHotel() {
      fetch(`${config.api}/hotel`, {
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
          this.hotelLists = response.data;
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
.hotelListScreen {
  position: fixed;
  top: 10vh;
  left: 0;
  right: 0;
  bottom: 0;
}
.filterBox {
  margin-top: 2.08333333333vw;
  margin-left: 9.375vw;
}
#checkbox:hover {
  cursor: pointer;
}
.availableBox {
  width: 92%;
  height: 5%;
  padding-top: 1%;
  margin: auto;
}
</style>
