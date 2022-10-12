<template>
  <div class="navigation">
    <router-link to="/">
      <img class="logo" alt="logo" src="../assets/s-icon.png" />
    </router-link>
    <div class="navigation_links">
      <div
        class="navigation_links_link"
        v-for="page in pages"
        :key="page.id + page.name"
      >
        <span class="left-border link-border"></span>
        <div class="sides-container">
          <span class="top-border link-border"></span>
          <router-link class="navigation_links_link_text" :to="page.path">{{
            $t(`navigation.${page.name}`)
          }}</router-link>
          <span class="bottom-border link-border"></span>
        </div>
        <span class="right-border link-border"></span>
      </div>
    </div>
    <hamburger :links="pages" />
  </div>
</template>

<script>
import Hamburger from "./Hamburger.vue";

export default {
  name: "NavigationBar",
  components: { Hamburger },
  data: function () {
    return {
      pages: [
        {
          id: 1,
          name: "home",
          path: "./home",
        },
        {
          id: 2,
          name: "portfolio",
          path: "./portfolio",
        },
        {
          id: 3,
          name: "techs",
          path: "./techs",
        },
        {
          id: 4,
          name: "contacts",
          path: "./contacts",
        },
        {
          id: 5,
          name: "resume",
          path: "./resume",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.navigation
 display flex
 flex-direction row
 align-items center
 justify-content space-between
 width 100%
 padding 5px
 background-color #3498DB

.navigation_links
 display flex
 flex-direction row
 gap 40px
 margin-right 60px

.navigation_links_link
 display flex
 flex-direction row
 align-items center

.sides-container
 display flex
 flex-direction column

.link-border
 background-color white

.top-border
 transition-duration 250ms
 width 0%
 height 3px

.navigation_links_link:hover .top-border
 width 100%

.right-border
 width 3px
 height 0%

.navigation_links_link:hover .right-border
 transition-delay 250ms
 transition-duration 250ms
 margin-bottom auto
 height 100%

.bottom-border
 height 3px
 width 0%

.navigation_links_link:hover .bottom-border
 transition-delay 500ms
 transition-duration 250ms
 margin-left auto
 width 100%

.left-border
 width 3px
 height 0%

.navigation_links_link:hover .left-border
 transition-delay 750ms
 transition-duration 250ms
 margin-top auto
 height 100%

.navigation_links_link_text
 padding 5px 10px
 color white
 text-decoration none
 font-weight bold

.logo
 width 100%
 max-width 60px
 height auto
 margin-left 30px

.logo:hover
 opacity .7

@media screen and (max-width 750px)
 .navigation_links
  display none
</style>
