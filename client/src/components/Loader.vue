<template>
  <div class="loader">
    <!-- Loader 4 -->
    <svg id="L4" viewBox="0 0 55 100" x="0px"
         xml:space="preserve"
         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px">
    <circle cx="6" cy="50" fill="#2a2a2a" r="6" stroke="none">
    <animate
      attributeName="opacity"
      begin="0.1"
      dur="1s"
      repeatCount="indefinite"
      values="0;1;0"/>
    </circle>
      <circle cx="26" cy="50" fill="#2a2a2a" r="6" stroke="none">
    <animate
      attributeName="opacity"
      begin="0.2"
      dur="1s"
      repeatCount="indefinite"
      values="0;1;0"/>
  </circle>
      <circle cx="46" cy="50" fill="#2a2a2a" r="6" stroke="none">
    <animate
      attributeName="opacity"
      begin="0.3"
      dur="1s"
      repeatCount="indefinite"
      values="0;1;0"/>
  </circle>
</svg>
  </div>
</template>

<style scoped>
.loader {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

svg {
  width: 100px;
  height: 100px;
  display: inline-block;
}
</style>
