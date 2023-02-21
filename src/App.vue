<template>
  <v-app>
    <v-main>
      <Nav />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
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
})
</script>
