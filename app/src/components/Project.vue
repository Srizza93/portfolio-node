<template>
  <div>
    <div class="time-circle">
      <div class="time-circle_sub">
        <span class="time-circle_sub_date"
          >{{ $t(`portfolio.months[${project.date[0]}]`) }}
          {{ project.date[1] }}</span
        >
      </div>
    </div>
    <div class="project_subcontainer">
      <a class="project_subcontainer_link" :href="project.link">
        <img
          class="project_subcontainer_link_image"
          :src="getImageUrl(project.image)"
          :alt="project.name"
        />
      </a>
      <folio-button
        class="project_subcontainer_button"
        @click="openDetails(project)"
      >
        <span v-if="!project.toggle">{{ $t("portfolio.showDetails") }}</span>
        <span v-else>{{ $t("portfolio.closeDetails") }}</span>
      </folio-button>
      <div
        class="project_subcontainer_details"
        v-bind:class="{ 'open-details': project.toggle }"
      >
        <span class="project_subcontainer_details_title">{{
          project.name
        }}</span>
        <p>{{ $t(`portfolio.${project.description}`) }}</p>
        <span
          class="project_subcontainer_details_title"
          v-if="project.functionalities"
          >{{ $t("portfolio.functionalities") }}</span
        >
        <ul
          class="project_subcontainer_details_list"
          v-if="project.functionalities"
        >
          <li
            v-for="(func, index) in project.functionalities"
            :key="func + index"
          >
            {{ func }}
          </li>
        </ul>
        <span class="project_subcontainer_details_title">{{
          $t("portfolio.technologies")
        }}</span>
        <ul class="project_subcontainer_details_list">
          <li v-for="(tech, index) in project.techs" :key="tech + index">
            {{ tech }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import FolioButton from "./FolioButton.vue";

export default {
  name: "Project",
  components: { FolioButton },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImageUrl(pic) {
      return new URL(`../assets/${pic}`, import.meta.url).href;
    },
    openDetails(project) {
      project.toggle = !project.toggle;
    },
  },
};
</script>

<style lang="stylus" scoped>
.time-circle
 position absolute
 top 50%
 left -10px
 width 15px
 height 15px
 border-radius 50%
 background-color #dedede

.time-circle_sub
 position relative

.time-circle_sub_date
 position absolute
 top -10px
 left 20px
 color 	#888888
 font-weight bold

.project_subcontainer
 display flex
 flex-direction column
 width 100%
 max-width 500px
 border 1px solid #dedede
 border-radius 15px

.project_subcontainer_link
 transition-duration 1s
.project_subcontainer_link:hover
 opacity .7

.project_subcontainer_link_image
 width 100%
 max-width 500px
 border-radius 15px 15px 0 0

.project_subcontainer_button
 margin 30px

.project_subcontainer_details
 max-height 0
 padding 0 30px
 overflow hidden
 transition 1s ease-in
 text-align left
 line-height 30px

.open-details
 max-height 800px

.project_subcontainer_details_title
 font-weight bold

.project_subcontainer_details_list
 padding-left 20px
 list-style-type decimal

@media screen and (max-width 400px)
 .project_subcontainer_button
  padding 15px
  margin 30px 5px
  white-space normal

 .open-details
  padding 10px
</style>
