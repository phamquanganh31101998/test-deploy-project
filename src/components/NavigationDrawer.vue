<template lang="pug">
  v-navigation-drawer(app dark absolute clipped bottom src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" :value="drawer")
    v-list(nav dense)
      v-list-item-group(v-model="group" active-class="deep-purple--text text--accent-4")
        v-list-item(@click="goToPage('/')")
          v-list-item-title Cat Fact
        v-list-item(@click="goToPage('/about')")
          v-list-item-title About
        v-list-item
          v-list-item-title Cat Fact
        v-list-item
          v-list-item-title Cat Fact

</template>
<script>
import { mapGetters } from "vuex"

export default {
  props: {},
  data() {
    return {
      group: null
    }
  },
  computed: {
    ...mapGetters(["drawer"])
  },
  watch: {
    group() {
      console.log(this.group)
    }
  },
  methods: {
    goToPage(link) {
      console.log(this.$router.currentRoute.path)
      this.$router.push(link).catch((err) => {
        // Ignore the vuex err regarding  navigating to the page they are already on.
        if (
          err.name !== "NavigationDuplicated" &&
          !err.message.includes(
            "Avoided redundant navigation to current location"
          )
        ) {
          // But print any other errors to the console
          console.log(err)
        }
      })
    }
  }
}
</script>
