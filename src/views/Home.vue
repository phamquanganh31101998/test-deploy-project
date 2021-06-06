<template lang="pug">
  div.home
    h1 {{ $t('home.greeting') }}
</template>

<script>
// @ is an alias to /src
import api from "../utils/api"
// eslint-disable-next-line import/no-cycle
import time from "../utils/time"

export default {
  name: "Home",
  methods: {
    async getCatFacts() {
      try {
        const result = await api.get("https://cat-fact.herokuapp.com/facts")
        console.log(result.data)
        console.log(time("12-12-2020").format("DD-MM-YYYY"))
      } catch (e) {
        console.log(e)
      }
    }
  },
  mounted() {
    this.getCatFacts()
  }
}
</script>

<style lang="scss" scoped></style>
