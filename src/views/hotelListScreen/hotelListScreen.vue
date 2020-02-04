<template>
  <div class="hotelListScreen">
    <div class="filterBox">
      <input type="checkbox" id="checkbox" v-model="showAvailable">โรงแรมที่ว่าง
    </div>
    <div v-if="!isLoading">
      <div v-if="showAvailable">
        <hotelListBox :hotelList="hotelAvailableList"></hotelListBox>
        โรงแรมว่าง
      </div>
      <div v-else>
        <hotelListBox :hotelList="hotelLists"></hotelListBox>
        โรงแรมไม่ว่าง
      </div>
    </div>
  </div>
</template>

<script>
import hotelListBox from "@/views/hotelListScreen/components/hotelListBox.vue";

export default {
  name: "hotelListScreen",
  data() {
    return {
      hotelLists: [],
      hotelAvailableList: [],
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
      fetch(
        "https://316ca798-78b7-4c48-8927-54b12bfdaf4b.mock.pstmn.io/hotel",
        {
          method: "GET",
          headers: {
            Accept: "application/json"
          }
        }
      )
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
          this.createHotelAvailableList();
        })
        .catch(err => {
          console.log(err);
        });
    },
    createHotelAvailableList() {
      this.hotelLists.forEach(hotel => {
        if(hotel.available) {
          this.hotelAvailableList.push(hotel);
        }
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
.availableBox {
  width: 92%;
  height: 5%;
  padding-top: 1%;
  margin: auto;
}
</style>
