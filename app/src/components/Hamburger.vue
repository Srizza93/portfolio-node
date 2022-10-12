<template>
  <div class="menu">
    <div
      class="menu_hamburger"
      v-bind:class="{ 'menu-open': isOpen }"
      @click="toggleMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="menu_links" v-bind:class="{ 'links-open': isOpen }">
      <router-link
        class="menu_links_link"
        v-for="link in links"
        :key="link.id + link.name + '-humburger'"
        :to="link.path"
        @click="toggleMenu"
        >{{ $t(`navigation.${link.name}`) }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Hamburger",
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="stylus" scoped>
.menu
 display none
 position relative
 margin-right 15px

.menu_hamburger
 display flex
 flex-direction column
 cursor pointer

.menu_hamburger:hover
 opacity .7

.menu_hamburger span
 display block
 width 33px
 height 4px
 border-radius 15px
 margin-bottom 5px
 background-color white
 transform-origin 4px 0px
 transition transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease

.menu-open span:first-child
 transform rotate(45deg) translate(-2px, -1px)

.menu-open span:nth-child(2)
 opacity 0

.menu-open span:last-child
 transform-origin 0% 100%
 transform rotate(-45deg) translate(0, -1px)

.menu_links
 display flex
 flex-direction column
 position absolute
 top 35px
 right -250px
 border 1px solid white
 border-radius 15px
 background-color white
 transition-duration 2s
 box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
 z-index 9999

.links-open
 right 0

.menu_links_link
 padding 20px 40px
 color #0F52BA
 text-decoration none
 font-weight bold
 cursor pointer
 text-transform uppercase

.menu_links_link:first-child
 border-radius 15px 15px 0 0

.menu_links_link:last-child
 border-radius 0 0 15px 15px

.menu_links_link:hover
 background-color #0f52ba
 color white

@media screen and (max-width 750px)
 .menu
  display flex
</style>
