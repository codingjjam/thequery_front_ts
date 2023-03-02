<template>
  <div class="nav">
    <div class="logo">
      <h1 class="jet_brains_font">theQuery</h1>
      <ul>
        <li>DataPool</li>
        <li @click="$router.push({ name: 'RandomList' })">Random</li>
        <li>Blog</li>
      </ul>
    </div>
    <div>
      <input type="text" class="mr-6 border pa-2 rounded-lg" placeholder="키워드 검색">
      <v-avatar color="surface-variant" class="mr-3"></v-avatar>
      <v-avatar icon="mdi-vuetify" color="surface-variant" class="mr-3"></v-avatar>
      <v-avatar color="surface-variant"></v-avatar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>
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