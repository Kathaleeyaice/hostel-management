<template>
  <div class="hotelListBox">
    <!-- <div v-for="hotelList in hotelLists" :key="hotelList" class="Box"> -->
      <h2>Hotel A</h2>
      <div>Detail :</div>
      <div>Status :</div>
      <div>Price :</div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: "hotelListBox",
  components: {},
  props: {
    hotelList: {
      type: Array
    }
  },
  data() {
    return {
      hotelLists: this.hotelList
    };
  }
};
</script>

<style scoped>
.hotelListBox {
  width: 90%;
  height: 20%;
  border: solid;
  margin: auto;
  padding: 1%;
}
</style>
