<template>
  <div class="hotelInfoScreen">
    <div class="infoTop">
      <div class="infoTopLeft">
        <div class="imgBox"></div>
      </div>
      <div class="infoTopRight">
        <h2>Hotel A</h2>
        <div>Detail :</div>
        <div>Status :</div>
        <div>Price :</div>
      </div>
    </div>
    <div class="infoBottom">
      <h2>address</h2>
    </div>
  </div>
</template>

<script>
//import headerMessenger from '@/views/TypePeople/components/headerMessenger.vue'

export default {
  name: "hotelInfoScreen",
  components: {},
  props: {}
};
</script>
<style scoped>
.hotelInfoScreen {
  top: 10vh;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
}
.infoTop {
  display: inline-flex;
  margin: auto;
  width: 100%;
  height: 50%;
}
.infoTopLeft {
  width: 50%;
}
.imgBox {
  width: 80%;
  height: 100%;
  margin: auto;
  background-color: antiquewhite;
}
.infoTopRight {
  width: 50%;
}
</style>
