<template>
  <div class="portfolio">
    <div class="portfolio-subcontainer">
      <div
        class="project"
        v-for="project in projects"
        :key="project.id + '-project'"
      >
        <project :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import Project from "../components/Project.vue";

export default {
  name: "Portfolio",
  components: { Project },
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "New Portfolio",
          date: ["6", "2022"],
          image: "portfolio2.png",
          link: "https://srizza93.github.io/portfolio-vite/",
          description: "portfolio2Descr",
          techs: ["HTML", "CSS", "JS", "Vue", "Vue-router", "Vite", "i18n"],
          toggle: false,
        },
        {
          id: 2,
          name: "E-commerce 2",
          date: ["4", "2022"],
          image: "e-commerce-2.png",
          link: "https://srizza93.github.io/sales/",
          description: "ecommerce2Descr",
          functionalities: [
            "Products filtering and sort system",
            "Product details page",
            "Cart access and functionality",
            "Purchase process",
            "Personal info validation",
            "Credit card validation",
            "Loading page",
            "Purchase confirmation",
          ],
          techs: ["HTML", "CSS", "JS", "Vue", "Vuex", "Vue-router", "Webpack"],
          toggle: false,
        },
        {
          id: 3,
          name: "Advent Challenges",
          date: ["1", "2022"],
          image: "advent.png",
          link: "https://srizza93.github.io/advent-challenges/deploy/index.html#/",
          description: "adventDescr",
          techs: ["HTML", "CSS", "JS", "Vue", "Vue-router"],
          toggle: false,
        },
        {
          id: 4,
          name: "Social Network",
          date: ["10", "2021"],
          image: "social.png",
          link: "https://srizza93.github.io/social/deploy/index.html",
          description: "socialDescr",
          functionalities: [
            "API data rendering",
            "Navigation bar filtering",
            "Profile page access",
            "Notification system",
            "Posts and comments publication",
            "Chat system",
            "Chat storing",
          ],
          techs: [
            "Webpack",
            "HTML",
            "CSS",
            "JS",
            "Vue",
            "Vuex",
            "Vue Test Utils",
            "Jest",
          ],
          toggle: false,
        },
        {
          id: 5,
          name: "Portfolio",
          date: ["10", "2021"],
          image: "portfolio.png",
          link: "https://srizza93.github.io/portfolio/deploy/index.html",
          description: "portfolioDescr",
          techs: ["Webpack", "HTML", "CSS", "JS", "Vue"],
          toggle: false,
        },
        {
          id: 6,
          name: "Movie Streaming",
          date: ["8", "2021"],
          image: "streaming.png",
          link: "https://srizza93.github.io/streaming/deploy/index.html",
          description: "moviesDescr",
          functionalities: [
            "API data rendering",
            "Search bar filtering",
            "Notification system",
            "Sign up page",
            "Trailer watching",
            "Movie details access",
            "Movie player access",
          ],
          techs: [
            "Webpack",
            "HTML",
            "CSS",
            "JS",
            "Vue",
            "Vuex",
            "Vue Test Utils",
            "Jest",
          ],
          toggle: false,
        },
        {
          id: 7,
          name: "E-commerce",
          date: ["6", "2021"],
          image: "e-commerce.png",
          link: "https://srizza93.github.io/e-commerce/deploy/index.html",
          description: "ecommerceDescr",
          functionalities: [
            "Navigation bar filtering",
            "Gallery playing",
            "Cart access and functionality",
            "Products filtering and sort system",
            "Product details page",
            "Purchase process",
            "Personal info validation",
            "Credit card validation",
            "Loading page",
            "Purchase confirmation",
          ],
          techs: [
            "Webpack",
            "HTML",
            "CSS",
            "JS",
            "Vue",
            "Vuex",
            "Vue Test Utils",
            "Jest",
          ],
          toggle: false,
        },
        {
          id: 8,
          name: "HTML Email layout",
          date: ["6", "2021"],
          image: "email-layout.png",
          link: "https://srizza93.github.io/cv-email-html/",
          description: "htmlLayoutDescr",
          techs: ["HTML"],
          toggle: false,
        },
        {
          id: 9,
          name: "Tooltip plugin",
          date: ["5", "2021"],
          image: "tooltip.png",
          link: "https://srizza93.github.io/tooltip/",
          description: "tooltipDescr",
          functionalities: [
            "Custom content re-usability",
            "Unlimited size",
            "Respect viewport boundaries",
            "Activation on dynamically loaded content",
            "Possible to select the inner text",
            "Centering",
          ],
          techs: ["HTML", "CSS", "JS"],
          toggle: false,
        },
        {
          id: 10,
          name: "Square task",
          date: "Feb 2021",
          date: ["1", "2021"],
          image: "square-task.png",
          link: "https://srizza93.github.io/square_task/",
          description: "squareDescr",
          functionalities: [
            "Square catching mouse",
            "Square increase its size when it comes closer",
            "Square respects window edges",
            "Speed increase on mouse in the outer square",
            "Speed decrease on mouse out the outer square",
          ],
          techs: ["HTML", "CSS", "JS"],
          toggle: false,
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.portfolio
 padding-top 0

.portfolio-subcontainer
  border-left 4px solid #dedede
  display flex
  flex-direction column

.project
 position relative
 padding 0 60px
 margin 100px 0

.project:first-child
 margin-top 100px

@media screen and (max-width 400px)
 .project
  padding-right 10px
</style>
