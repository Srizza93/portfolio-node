<template>
  <div class="email-form">
    <label class="email-label">Send me an email!</label>
    <textarea class="text-area" rows="10"></textarea>
    <folio-button>Send</folio-button>
  </div>
</template>

<script>
import FolioButton from "./FolioButton.vue";

export default {
  name: "EmailForm",
  components: { FolioButton },
};
</script>

<style lang="stylus" scoped>
.email-form
 display flex
 flex-direction column
 align-items baseline
 width 100%

.email-label
 font-weight bold

.text-area
 width 100%
 padding 10px 20px
 margin 5px 0 20px 0
</style>
