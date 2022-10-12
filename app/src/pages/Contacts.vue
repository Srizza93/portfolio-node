<template>
  <div class="contacts">
    <div class="headers">
      <span class="headers_header">{{ $t("contacts.header1") }}</span>
      <span class="headers_header">{{ $t("contacts.header2") }}</span>
    </div>
    <div class="contact-details">
      <span class="contact-details_title">{{ $t("navigation.contacts") }}</span>
      <ul class="contact-details_list">
        <li
          class="contact-details_list_item"
          v-for="contact in contacts"
          :key="'contact-' + contact.id"
        >
          <a class="contact-details_list_item_link" :href="contact.link">
            {{ contact.text }}
            <img
              class="contact-details_list_item_link_icon"
              v-if="contact.image"
              :src="getImageUrl(contact.image.link)"
              :alt="contact.image.name"
            />
          </a>
        </li>
      </ul>
    </div>
    <EmailForm />
  </div>
</template>

<script>
import EmailForm from "../components/EmailForm.vue";

export default {
  name: "Contacts",
  components: { EmailForm },
  data() {
    return {
      contacts: [
        {
          id: 1,
          link: "tel:+33772233271",
          text: "+33772233271",
        },
        {
          id: 2,
          link: "mailto:simonerizzanl@gmail.com",
          text: "simonerizzanl@gmail.com",
        },
        {
          id: 3,
          link: "https://www.linkedin.com/in/simonerizza1993",
          text: "",
          image: {
            link: "linkedin.png",
            name: "linkedin",
          },
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
.contacts
 display flex
 flex-direction column
 align-items baseline
.headers
 display flex
 flex-direction column
 align-items center
 width 100%
.headers_header
 margin-bottom 50px
 font-size 75px
 font-weight bold
.contact-details
 display flex
 flex-direction column
 align-items baseline
 margin-top 150px
.contact-details_title
 font-size 35px
 font-weight bold
.contact-details_list
 list-style-type none
 text-align left
.contact-details_list_item
 width min-content
 padding 15px
 margin 30px 0
.contact-details_list_item:hover
 animation push-text .2s linear forwards
.contact-details_list_item_link
 color #3498db
 font-size 18px
 font-weight bold
 text-decoration none
.contact-details_list_item_link_icon
 max-width 50px

@keyframes push-text {
  0% {
    padding-left 15px
  }
  100% {
    padding-left 50px
  }
}

@media screen and (max-width 500px)
 .headers_header
  font-size 35px
 .contact-details_title
  font-size 25px
 .contact-details_list
  padding 0
</style>
