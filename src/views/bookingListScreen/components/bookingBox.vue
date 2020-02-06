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
  width: 90%;
  height: 20%;
  border: solid;
  margin: auto;
  margin-top: 1%;
  padding: 1%;
}</style
>>
