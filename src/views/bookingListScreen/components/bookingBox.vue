<template>
  <div class="bookingBox">
    <div>{{ hotelBooking.name }}</div>
    <div>Room: {{ hotelBooking.rooms }}</div>
    <div>Date: {{ hotelBooking.date }}</div>
  </div>
</template>

<script>
export default {
  name: "bookingBox",
  data() {
    return {
      hotelBooking: this.booking
    };
  },
  mounted() {},
  methods: {},
  props: {
    booking: Object
  }
};
</script>
<style scoped>
.bookingBox {
  width: 80%;
  height: 20%;
  margin: auto;
  margin-top: 2%;
  padding: 1%;
  box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  transition: width 0.2s, height 0.2s;
}
.bookingBox:hover {
  box-shadow: 2px 5px 4px rgba(2, 126, 234, 0.25);
  width: 85%;
  height: 25%;
}
</style>
