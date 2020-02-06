<template>
  <div class="bookingListScreen">
    <div v-if="!isLoading">
      <h2>Booking List</h2>
      <div v-for="hotel in bookingList" :key="hotel">
        <bookingBox :booking="hotel"></bookingBox>
      </div>
    </div>
  </div>
</template>

<script>
import bookingBox from "@/views/bookingListScreen/components/bookingBox.vue";

export default {
  name: "bookingListScreen",
  data() {
    return {
      bookingList: [],
      isLoading: true
    };
  },
  mounted() {
    this.fetchBooking();
  },
  methods: {
    fetchBooking() {
      fetch(
        `https://4bfb9a7a-3df0-4222-a22f-d666eea1a18f.mock.pstmn.io/booking`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer " + localStorage.token
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
          this.bookingList = response.data;
          this.isLoading = false;
        })
        .catch(err => {
          console.log(err);
        });
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
}</style
>>
