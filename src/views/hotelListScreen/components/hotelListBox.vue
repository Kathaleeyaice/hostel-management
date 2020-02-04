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
  mounted() {}
};
</script>

<style scoped>
.hotelBox {
  width: 90%;
  height: 20%;
  border: solid;
  margin: auto;
  padding: 1%;
}
</style>
