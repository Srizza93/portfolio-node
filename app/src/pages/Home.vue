<template>
  <div class="home">
    <div class="content">
      <div class="content_text">
        <span class="home_first-line">{{ $t("home.greatings") }}</span>
        <span class="home_name">Simone Rizza</span>
        <span>{{ $t("home.position") }}</span>
        <p class="home_parag">
          {{ $t("home.pitch") }}
        </p>
      </div>
      <img class="content_img" alt="pencil" src="../assets/pencil.jpg" />
    </div>
    <router-link to="/portfolio"
      ><folio-button>
        {{ $t("home.button") }}
      </folio-button></router-link
    >
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import FolioButton from "../components/FolioButton.vue";

export default {
  name: "Home",
  components: { FolioButton },
};
</script>

<style lang="stylus" scoped>
.home
 display flex
 flex-direction column
 text-align left

.content
 display flex
 flex-direction row

.content_img, .content_text
 width 50%
 margin-bottom 50px

.content_text
 display flex
 flex-direction column
 padding-right 50px
 color #0f52ba

.content_img
 max-width 315px
 border-radius 50%
 object-fit cover

.home_first-line
 margin-bottom 30px

.home_name
 font-size 65px
 font-weight bold

.home_parag
 color #000033
 font-size 20px

@media screen and (max-width 750px)
 .home
  align-items center

 .content
  flex-direction column
  align-items center

 .content_img, .content_text
  width 90%
  padding 0

@media screen and (max-width 400px)
 .home_name
   font-size 35px

 .home_parag
   font-size 16px
</style>
