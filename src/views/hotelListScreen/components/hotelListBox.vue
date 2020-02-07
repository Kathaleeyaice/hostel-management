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
  width: 80%;
  height: 20%;
  margin: auto;
  margin-top: 1%;
  padding: 1%;

  box-shadow: 2px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  transition: width 0.2s, height 0.2s;
}
.hotelBox:hover {
  box-shadow: 2px 5px 4px rgba(2, 126, 234, 0.25);
  width: 85%;
  height: 25%;
}
</style>
