<template>
  <v-app>
    <v-main>
      <Nav ref="Nav" />
      <router-view :setNav="setNav" />
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue'
import Nav from "./components/common/Nav.vue";

export default defineComponent({
  name: 'App',
  components: {Nav},

  data () {
    return {
      //
    }
  },
  methods: {
    setNav(btn) {
      this.$refs.Nav.setNav(btn)
    }
  }
})
</script>
