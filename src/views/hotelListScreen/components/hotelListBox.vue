<template>
  <div class="hotelListBox">
    <div v-for="hotel in hotelLists" :key="hotel" class="hotelBox">
      <h2>{{ hotel.name }}</h2>
      <div>รายละเอียด :{{ hotel.detail }}</div>
      <div>
        <div v-if="hotel.available">
          ว่าง
        </div>
        <div v-else>
          ไม่ว่าง
        </div>
      </div>
      <div>ราคา :{{ hotel.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hotelListBox",
  components: {},
  props: {
    hotelList: Array
  },
  data() {
    return {
      hotelLists: this.hotelList
    };
  },
  watch: {
    // whenever hotelList changes, this function will run
    hotelList: function (value) {
      this.hotelLists = value
    }
  },
  mounted() {}
};
</script>

<style scoped>
.hotelBox {
  width: 90%;
  height: 20%;
  border: solid;
  margin: auto;
  margin-top: 1%;
  padding: 1%;
}
</style>
