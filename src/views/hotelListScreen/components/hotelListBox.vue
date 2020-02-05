<template>
  <div class="hotelListBox">
    <div v-for="hotel in hotelLists" :key="hotel">
      <div
        v-if="(showAvailable && hotel.available) || !showAvailable"
        class="hotelBox"
        @click="goInfo(hotel.id)"
      >
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
  </div>
</template>

<script>
export default {
  name: "hotelListBox",
  components: {},
  props: {
    hotelList: Array,
    status: Boolean
  },
  data() {
    return {
      hotelLists: this.hotelList,
      showAvailable: this.status
    };
  },
  watch: {
    // whenever status changes, this function will run
    status: function(value) {
      this.showAvailable = value;
    }
  },
  methods: {
    goInfo(id) {
      this.$router.push({ path: `/info/${id}` });
    }
  }
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
.hotelBox:hover {
  width: 85%;
}
</style>
