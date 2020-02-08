<template>
  <div class="bookingListScreen">
    <div v-if="!isLoading">
      <div class="bookingListHeader">รายชื่อโรงแรมที่จอง</div>
      <div v-for="hotel in bookingList" :key="hotel">
        <bookingBox :booking="hotel"></bookingBox>
      </div>
    </div>
  </div>
</template>

<script>
import bookingBox from "@/views/bookingListScreen/components/bookingBox.vue";
import config from "../../config.json";

export default {
  name: "bookingListScreen",
  data() {
    return {
      bookingList: [],
      isLoading: true
    };
  },
  mounted() {
    this.checkLogin();
    this.fetchBooking();
  },
  methods: {
    fetchBooking() {
      fetch(`${config.api}/booking`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.token
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
          this.bookingList = response.data;
          this.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    checkLogin() {
      if (!localStorage.token) {
        this.$router.push({ path: "/login" });
      }
    }
  },
  components: {
    bookingBox
  },
  props: {}
};
</script>
<style scoped>
.bookingListScreen {
  position: fixed;
  top: 10vh;
  left: 0;
  right: 0;
  bottom: 0;
}
.bookingListHeader {
  font-size: 25px;
  font-weight: bold;
  margin: 3vw;
  margin-left: 9vw;
}
</style>
