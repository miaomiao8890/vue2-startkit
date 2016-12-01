<template>
  <transition>
    <div class="spin-loader" v-show="show">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'spinner',
  props: ['show']
}
</script>

<style>
.spin-loader {
  position: relative;
  width: 30px;
  height: 30px;
  margin: 20px auto;
}
.spin-loader > div:nth-child(1) {
  top: 20px;
  left: 12px;
  -webkit-animation: line-spin-fade-loader 1.2s 0.12s infinite ease-in-out;
          animation: line-spin-fade-loader 1.2s 0.12s infinite ease-in-out;
}
.spin-loader > div:nth-child(2) {
  top: 16.81818px;
  left: 18.81818px;
  -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
          transform: rotate(-45deg);
  -webkit-animation: line-spin-fade-loader 1.2s 0.24s infinite ease-in-out;
          animation: line-spin-fade-loader 1.2s 0.24s infinite ease-in-out;
}
.spin-loader > div:nth-child(3) {
  top: 10px;
  left: 22px;
  -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
          transform: rotate(90deg);
  -webkit-animation: line-spin-fade-loader 1.2s 0.36s infinite ease-in-out;
          animation: line-spin-fade-loader 1.2s 0.36s infinite ease-in-out;
}
.spin-loader > div:nth-child(4) {
  top: 3.18182px;
  left: 18.81818px;
  -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
          transform: rotate(45deg);
  -webkit-animation: line-spin-fade-loader 1.2s 0.48s infinite ease-in-out;
          animation: line-spin-fade-loader 1.2s 0.48s infinite ease-in-out;
}
.spin-loader > div:nth-child(5) {
  top: 0px;
  left: 12px;
  -webkit-animation: line-spin-fade-loader 1.2s 0.6s infinite ease-in-out;
          animation: line-spin-fade-loader 1.2s 0.6s infinite ease-in-out;
}
.spin-loader > div:nth-child(6) {
  top: 3.18182px;
  left: 5.18182px;
  -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
          transform: rotate(-45deg);
  -webkit-animation: line-spin-fade-loader 1.2s 0.72s infinite ease-in-out;
          animation: line-spin-fade-loader 1.2s 0.72s infinite ease-in-out;
}
.spin-loader > div:nth-child(7) {
  top: 10px;
  left: 2px;
  -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
          transform: rotate(90deg);
  -webkit-animation: line-spin-fade-loader 1.2s 0.84s infinite ease-in-out;
          animation: line-spin-fade-loader 1.2s 0.84s infinite ease-in-out;
}
.spin-loader > div:nth-child(8) {
  top: 16.81818px;
  left: 5.18182px;
  -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
          transform: rotate(45deg);
  -webkit-animation: line-spin-fade-loader 1.2s 0.96s infinite ease-in-out;
          animation: line-spin-fade-loader 1.2s 0.96s infinite ease-in-out;
}
.spin-loader > div {
  background-color: #aaa;
  width: 2px;
  height: 17px;
  border-radius: 1px;
  margin: 1px;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  position: absolute;
  width: 3px;
  height: 7px;
}
@-webkit-keyframes line-spin-fade-loader {
  50% {
    opacity: 0.3; }

  100% {
    opacity: 1; } }

@keyframes line-spin-fade-loader {
  50% {
    opacity: 0.3; }

  100% {
    opacity: 1; } }

</style>
