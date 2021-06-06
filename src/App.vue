<template lang="pug">
  v-app
    v-app-bar(app dark color="primary")
      div.d-flex.align-center
        v-img(
          contain
          alt="Vuetify Logo"
          class="shrink mr-2"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        )
        v-img(
          contain
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        )

      v-spacer

      v-select(
        :items="languages"
        @input="callSetLangActions"
        v-model="language"
      )
    v-main
      router-view
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
    languages: [
      {
        text: "vi",
        value: "vi"
      },
      {
        text: "en",
        value: "en"
      }
    ],
    language: "vi"
  }),
  methods: {
    callSetLangActions() {
      this.$store.dispatch("setLang", this.language)
    }
  },
  created() {}
}
</script>
