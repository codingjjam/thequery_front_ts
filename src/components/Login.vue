<template>
  <div class="d-flex justify-center align-center flex-column h-75">
    <div>
      <button @click="$router.back()">뒤로가기</button>
    </div>
    <div class="login_container">
      <p class="text-center font-weight-bold text-white text-sm-h5">로그인</p>
      <div class="d-flex flex-column">
        <button class="social-btn d-flex align-center justify-center">
          <img src="/img/GitHub.png" class="mr-2">
          <span class="mt-1">깃허브로 로그인</span>
        </button>
        <button class="social-btn bg-black d-flex align-center justify-center">
          <img src="/img/Google.png" class="mr-2">
          <span class="mt-1">구글로 로그인</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: ['setNav'],
  mounted() {
    this.setNav('NONE')
  }
}
</script>

<style scoped>
.login_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: black;
  width: 460px;
  height: 450px;
  padding: 80px 20px;
  margin-top: 50px;
}
.social-btn {
  width: 400px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #CFCFCF;
  background: #CFCFCF;
  border-radius: 30px;
}
</style>