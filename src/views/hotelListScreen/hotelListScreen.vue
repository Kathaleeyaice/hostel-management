<template>
  <div class="hotelListScreen">
    <div class="filterBox">
      Available hotel
    </div>
    <div v-if="!isLoading">
      <div v-if="showAvailable">
        <hotelListBox :hotelList="hotelAvailableList"></hotelListBox>
      </div>
      <div v-else>
        <hotelListBox :hotelList="hotelLists"></hotelListBox>
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
.availableBox {
  width: 92%;
  height: 5%;
  padding-top: 1%;
  margin: auto;
}
</style>
