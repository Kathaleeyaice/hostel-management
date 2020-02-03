<template>
  <div class="hotelListScreen">
    hotel
    {{ hoteList }}
  </div>
</template>

<script>
//import headerMessenger from '@/views/TypePeople/components/headerMessenger.vue'

export default {
  name: "hotelListScreen",
  data() {
    return {
      hoteList: [],
      hoteAvailableList: [],
      showAvailable: false
    };
  },
  components: {},
  mounted() {
    this.fetchHotel();
  },
  methods: {
    fetchHotel() {
      fetch(
        "https://316ca798-78b7-4c48-8927-54b12bfdaf4b.mock.pstmn.io/hotel",
        {
          method: "GET",
          headers: {
            Accept: "application/json"
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
          this.hoteList = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
