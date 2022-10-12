<template>
  <div class="techs">
    <div
      class="techs_tech"
      v-for="tech in techs"
      :key="'tech-' + tech.id"
    >
      <a class="techs_tech_sub-container" :href="tech.link">
        <img
          class="techs_tech_sub-container_logo"
          :src="getImageUrl(tech.logo)"
          :alt="tech.name + '-logo'"
        />
        <span class="techs_tech_sub-container_text">{{ tech.name }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      techs: [
        {
          id: 1,
          name: "HTML",
          logo: "html.png",
          link: "https://developer.mozilla.org/fr/docs/Web/HTML",
        },
        {
          id: 2,
          name: "CSS",
          logo: "css.png",
          link: "https://developer.mozilla.org/en-US/docs/Web/CSS?retiredLocale=en",
        },
        {
          id: 3,
          name: "Javascript",
          logo: "js.png",
          link: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
        },
        {
          id: 4,
          name: "Vue.js",
          logo: "vuejs.png",
          link: "https://vuejs.org/",
        },
        {
          id: 5,
          name: "Vuex",
          logo: "vuejs.png",
          link: "https://vuex.vuejs.org/",
        },
        {
          id: 6,
          name: "Vue test utils",
          logo: "vuejs.png",
          link: "https://v1.test-utils.vuejs.org/",
        },
        {
          id: 7,
          name: "Vue router",
          logo: "vuejs.png",
          link: "https://router.vuejs.org/",
        },
        {
          id: 8,
          name: "I18n",
          logo: "i18n.png",
          link: "https://www.i18next.com/",
        },
        {
          id: 9,
          name: "Webpack",
          logo: "webpack.png",
          link: "https://webpack.js.org/",
        },
        {
          id: 10,
          name: "Vite",
          logo: "vite.png",
          link: "https://vitejs.dev/",
        },
        {
          id: 11,
          name: "Jest",
          logo: "jest.png",
          link: "https://jestjs.io/",
        },
        {
          id: 12,
          name: "Git",
          logo: "git.png",
          link: "https://git-scm.com/",
        },
      ],
    };
  },
  methods: {
    getImageUrl(pic) {
      return new URL(`../assets/${pic}`, import.meta.url).href;
    },
  },
};
</script>

<style lang="stylus" scoped>
.techs
 display flex
 flex-direction column
.techs_tech
 display flex
 margin-bottom 30px
 justify-content center
.techs_tech_sub-container
 display flex
 flex-direction row
 align-items center
 width 170px
 height 60px
 color inherit
 font-weight bold
 text-decoration none
 cursor pointer
.techs_tech_sub-container_logo
 width 40px
 height 40px
 margin-right 30px

.techs_tech_sub-container_text
 white-space nowrap

.techs_tech_sub-container:hover .techs_tech_sub-container_text
 animation text-grow .5s forwards
.techs_tech_sub-container:hover .techs_tech_sub-container_logo
 animation icon-grow .5s forwards

@keyframes text-grow
 0% {
  font-size 16px
  color #003
 }
 100% {
  font-size 22px
  color #3498db
 }

@keyframes icon-grow
 0% {
  width 40px
  height 40px
  margin-left 0
 }
 100% {
  width 60px
  height 60px
  margin-left -10px
 }
</style>
