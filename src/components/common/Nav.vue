<template>
  <div class="nav" v-show="btn !== 'NONE'">
    <div class="logo">
      <h1 class="jet_brains_font" @click="$router.push({ name: 'Main' })">theQuery</h1>
      <ul>
        <li>DataPool</li>
        <li @click="$router.push({ name: 'RandomList' })">Random</li>
        <li>Blog</li>
      </ul>
    </div>
    <div v-show="btn === 'LOGIN'">
      <input type="text" class="mr-6 border pa-2 rounded-lg" placeholder="키워드 검색">
      <v-avatar color="surface-variant" class="mr-3"></v-avatar>
      <v-avatar icon="mdi-vuetify" color="surface-variant" class="mr-3"></v-avatar>
      <v-avatar color="surface-variant" class="cursor" @click="$router.push({ name : 'Mypage' })"></v-avatar>
    </div>
    <div class="logo" v-show="btn === 'JOIN'">
      <ul>
        <li>Sing In</li>
        <li @click="$router.push({ name : 'Login' })">Login</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Nav",
  data() {
    return {
      btn: '',
    }
  },
  methods: {
    setNav(btn) {
      this.btn = btn
    }
  }
})
</script>

<style scoped>
.cursor{
  cursor: pointer;
}
.nav {
  width: 100%;
  /*position: fixed;*/
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  top: 0;
}
.logo ul {
  list-style: none;
  display: flex;
  margin-left: 30px;
}
.logo li {
  margin: 0px 20px;
}
.logo {
  display: flex;
  align-items: center;
}
</style>