<template>
  <div id="app">
    <router-view />
    <img src="./assets/bg.png" id="backgroung" />
    <img src="./assets/bg2.png" id="backgroung2" />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Bai+Jamjuree&display=swap");
body {
  background-color: #f8f8f8;
  font-family: "Bai Jamjuree", sans-serif;
}
#backgroung {
  position: absolute;
  width: 410px;
  height: 410px;
  left: 1126px;
  top: 310px;
  z-index: -1;
}
#backgroung2 {
  position: absolute;
  width: 200px;
  height: 200px;
  left: 0px;
  top: 145px;
  z-index: -1;
}
</style>
