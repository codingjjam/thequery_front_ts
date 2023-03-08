<template>
  <div class="d-flex pa-10 pt-5">
    <div class="left_item">
      <div class="profile">
        <div class="profile_name">
          <div class="d-flex">
            <v-avatar color="amber" class="mr-3"></v-avatar>
            <div>
              <p class="font-weight-bold text-sm-h5 mt-1" style="line-height: 0.8">nadindin</p>
              <span class="text-grey-lighten-1 text-md-caption">dksfj@gmail.com</span>
            </div>
          </div>
          <span class="material-icons text-grey-darken-2">
            edit
          </span>
        </div>
        <div class="profile_text">
          <p class="text-sm-body-2">
            안녕하세요. 소개글은 이렇게 써주세요.<br>
            안녕하세요. 소개글은 이렇게 이렇게 3줄<br>
            까지 노출해 주세요.
          </p>
          <span class="material-icons text-grey-darken-2">
            edit
          </span>
        </div>
        <div class="d-flex">
          <div class="mt-4 w-50">
            <p class="text-grey-lighten-1 text-sm-body-2 mb-1">좋아요 받은수</p>
            <p>5</p>
          </div>
          <div class="mt-4 w-50">
            <p class="text-grey-lighten-1 text-sm-body-2 mb-1">팔로우 수</p>
            <p>5</p>
          </div>
        </div>
      </div>
      <div class="profile">
        <div class="d-flex justify-sm-space-between" @click="viewContent = 'MY'">
          <p class="text-grey text-sm-body-2 mb-3">My Data</p>
          <p>
            5
            <span class="material-icons mb-1 ml-3" style="vertical-align: middle">
              chevron_right
            </span>
          </p>
        </div>
        <div class="d-flex justify-sm-space-between" @click="viewContent = 'SOLVED'">
          <p class="text-grey text-sm-body-2 mb-3">푼 문제</p>
          <p>
            5
            <span class="material-icons mb-1 ml-3" style="vertical-align: middle">
              chevron_right
            </span>
          </p>
        </div>
        <div class="d-flex justify-sm-space-between">
          <p class="text-grey text-sm-body-2 mb-3">저장한 문제</p>
          <p>
            5
            <span class="material-icons mb-1 ml-3" style="vertical-align: middle">
              chevron_right
            </span>
          </p>
        </div>
        <div class="d-flex justify-sm-space-between">
          <p class="text-grey text-sm-body-2">미해결 문제</p>
          <p>
            5
            <span class="material-icons mb-1 ml-3" style="vertical-align: middle">
              chevron_right
            </span>
          </p>
        </div>
      </div>
      <div class="profile">
        <div class="d-flex justify-sm-space-between align-center">
          <div>
            <p class="text-grey-lighten-1 text-sm-body-2 mb-1">직업/역할</p>
            <p class="text-sm-body-2 mb-3">데이터 사이언티스트, 데이터 분석가</p>
          </div>
          <span class="material-icons text-grey-darken-2">
            edit
          </span>
        </div>
        <div class="d-flex justify-sm-space-between align-center">
          <div>
            <p class="text-grey-lighten-1 text-sm-body-2 mb-1">링크</p>
            <p class="text-sm-body-2">www.nadindind.com</p>
          </div>
          <span class="material-icons text-grey-darken-2">
            edit
          </span>
        </div>
      </div>
    </div>
    <div class="right_item">
      <MyData v-if="viewContent === 'MY'" />
      <SolveData v-if="viewContent === 'SOLVED'" />
    </div>
  </div>
</template>

<script>
import MyData from "./contents/MyData.vue";
import SolveData from "./contents/SolveData.vue";
import {defineComponent} from "vue";
export default defineComponent({
  name: "Mypage",
  components: {
    MyData,
    SolveData
  },
  props: ['setNav'],
  data(){
    return{
      viewContent: 'MY'
    }
  },
  mounted() {
    this.setNav('JOIN')
  }
})
</script>

<style scoped>
.profile {
  min-width: 300px;
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
  justify-content: space-between;
}
.profile_text p{
  margin-top: 20px;
  font-size: 14px;
}
.left_item {
  width: 27%;
  min-width: 330px;
  margin-right: 15px;
}
.right_item {
  width: 73%;
}
.profile_text {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>