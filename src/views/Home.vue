<template lang="pug">
  div.home
    h1 {{ $t('home.greeting') }}
    p(v-for="fact in catFacts") {{fact.text}}
</template>

<script>
// @ is an alias to /src
// import { defineComponent, onMounted, ref } from "@vue/composition-api"
// import { useToast } from "vue-toastification/composition"
import api from "../utils/api"
import time from "../utils/time"

// const Home = defineComponent({
//   setup() {
//     const toast = useToast()
//     const catFacts = ref([])
//
//     const getCatFacts = async () => {
//       console.log("hello")
//       try {
//         const { data } = await api.get("https://cat-fact.herokuapp.com/facts")
//         catFacts.value = data
//         console.log(time().format("DD-MM-YYYY"))
//       } catch (e) {
//         toast.error("Get cat fact failed")
//         console.log(e)
//       }
//     }
//
//     onMounted(getCatFacts)
//
//     return {
//       catFacts,
//       getCatFacts
//     }
//   }
// })

// export default Home
export default {
  name: "Home",
  data() {
    return {
      catFacts: []
    }
  },
  methods: {
    async getCatFacts() {
      try {
        const { data } = await api.get("https://cat-fact.herokuapp.com/facts")
        this.catFacts = data
        console.log(time("12-12-2020").format("DD-MM-YYYY"))
      } catch (e) {
        this.$toast.error("Get cat facts failed!")
      }
    }
  },
  mounted() {
    this.getCatFacts()
  }
}
</script>

<style lang="scss" scoped></style>
