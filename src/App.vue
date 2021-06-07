<template lang="pug">
  v-app
    v-app-bar(app dark clipped-left color="primary")
      v-app-bar-nav-icon(@click="toggleNavDrawer")
      v-toolbar-title Total Apps

      v-spacer

      v-select(
        :items="languages"
        @input="callSetLangActions"
        v-model="language"
      )
    navigation-drawer
    v-main
      v-container(fluid)
        router-view
</template>

<script>
import NavigationDrawer from "./components/NavigationDrawer.vue"

export default {
  name: "App",
  components: {
    NavigationDrawer
  },

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
      this.$i18n.locale = this.language
    },
    toggleNavDrawer() {
      this.$store.dispatch("toggleNavDrawer")
    }
  },
  created() {}
}
</script>
