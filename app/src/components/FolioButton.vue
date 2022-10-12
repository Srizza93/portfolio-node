<template>
  <button class="open-button">
    <slot>Open</slot>
  </button>
</template>

<script>
export default {
  name: "FolioButton",
};
</script>

<style lang="stylus" scoped>
.open-button
 width 100%
 max-width 250px
 padding 15px 30px
 border-radius 15px
 border none
 background-color #3498db
 color white
 text-align center
 text-decoration none
 white-space nowrap
 font-weight bold
 cursor pointer

.open-button:hover
 animation blink 1s linear infinite

@keyframes blink
 0% {
   outline none
 }
 50% {
   outline 3px solid #3498db
 }
 100% {
   outline-offset 5px
   outline transparent
 }
</style>
