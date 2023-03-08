<template>
  <div class="d-flex pa-10 pt-5">
    <div class="left_item">
      <div class="profile">
        <div class="profile_name">
          <v-avatar color="surface-variant" class="mr-3"></v-avatar>
          <div>
            <p class="font-weight-bold text-sm-h5 mt-1" style="line-height: 0.8">nadindin</p>
            <span class="text-grey-lighten-1 text-md-caption">dksfj@gmail.com</span>
          </div>

        </div>
        <div class="profile_text">
          <p class="text-sm-body-2">
            안녕하세요. 소개글은 이렇게 써주세요.<br>
            안녕하세요. 소개글은 이렇게 이렇게 3줄<br>
            까지 노출해 주세요.
          </p>
        </div>
        <div class="mt-4">
          <p class="text-grey-lighten-1 text-sm-body-2 mb-1">좋아요 받은수</p>
          <p>5</p>
        </div>

      </div>
      <div class="profile">
        <div>
          <p class="text-grey text-sm-body-2 mb-3">My Data</p>
        </div>
        <div>
          <p class="text-grey text-sm-body-2 mb-3">푼 문제</p>
        </div>
        <div>
          <p class="text-grey text-sm-body-2 mb-3">저장한 문제</p>
        </div>
        <div>
          <p class="text-grey text-sm-body-2">미해결 문제</p>
        </div>
      </div>
      <div class="profile">
        <p class="text-grey-lighten-1 text-sm-body-2 mb-1">직업/역할</p>
        <div>
          <p class="text-sm-body-2 mb-3">데이터 사이언티스트, 데이터 분석가</p>
        </div>
        <p class="text-grey-lighten-1 text-sm-body-2 mb-1">링크</p>
        <div>
          <p class="text-sm-body-2">www.nadindind.com</p>
        </div>

      </div>
    </div>
    <div class="right_item">
      <MyData />
    </div>
  </div>
</template>

<script>
import MyData from "./contents/MyData.vue";
export default {
  name: "Mypage",
  components: {
    MyData
  }
}
</script>

<style scoped>
.profile {
  min-width: 330px;
  /*border: 1px solid #CFCFCF;*/
  box-shadow: 0px 0px 5px #CFCFCF;
  border-radius: 10px;
  padding: 20px;
  word-break: keep-all;
  margin: 10px;
}
.profile_name {
  display: flex;
  align-items: center;
}
.profile_text p{
  margin-top: 20px;
  font-size: 14px;
}
.left_item {
  width: 35%;
}
.right_item {
  width: 65%;
}
</style>