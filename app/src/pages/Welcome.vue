<template>
  <div class="welcome">
    <div class="messages">
      <span class="messages_text message1">Welcome to</span>
      <span class="messages_text message2">Simone Rizza's portfolio</span>
    </div>
    <div class="button-box">
      <folio-button class="button-box_button">Access</folio-button>
      <img
        class="button-box_mouse"
        src="../assets/arrow-mouse.png"
        alt="arrow-mouse"
      />
    </div>
  </div>
</template>

<script>
import FolioButton from "../components/FolioButton.vue";

export default {
  name: "Welcome",
  components: { FolioButton },
  methods: {
    hideApp() {
      const self = this;
      const navigationBar = document.querySelector(".navigation");
      const flag = document.querySelector(".flag");
      navigationBar.classList.add("hide-element");
      flag.classList.add("hide-element");
      setTimeout(function () {
        self.showApp(navigationBar, flag);
      }, 7000);
    },
    showApp(navigationBar, flag) {
      const welcome = document.querySelector(".welcome");
      welcome.classList.add("hide-element");
      navigationBar.classList.remove("hide-element");
      flag.classList.remove("hide-element");
      this.$router.push("/home");
    },
  },
  mounted() {
    this.hideApp();
  },
};
</script>

<style lang="stylus">
.hide-element
 opacity 0
</style>

<style lang="stylus" scoped>
.welcome
 display flex
 flex-direction column
 justify-content center
 align-items center
 position absolute
 min-width 100%
 height 100%
 background-color #3498db
 transition-duration 2s

.messages
 display flex
 flex-direction column
 width min-content

.messages_text
 width 0
 margin 0 auto
 overflow hidden
 color white
 font-size 6vw
 font-weight bold
 white-space nowrap

.message1
 animation message-animation 2s steps(20, end) forwards, blink-caret 1s 2.5
.message2
 animation message-animation 3s steps(25, end) 2.5s forwards, blink-caret 1s infinite 2.5s

@keyframes message-animation
  from {
    width 0%
  }
  to {
    width 100%
  }

@keyframes blink-caret
  from {
    border-right 3px solid white
  }
  to {
    border-right 3px solid transparent
  }

.button-box
 position relative
 display flex
 margin-top 60px
.button-box_button
 background-color #0f52ba
 color white
 animation button-click .6s linear 6.5s
 pointer-events none

.button-box_mouse
 position absolute
 animation mouse .5s steps(15) 6s
 animation-fill-mode both

@keyframes mouse
 from {
  top -50px
  left -50px
 }
 to {
  top 35px
  left 10px
 }

@keyframes button-click
 to {
  opacity .5
 }
</style>
