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
          <p>
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
          <p>My Data</p>
        </div>
        <div>
          <p>푼 문제</p>
        </div>
        <div>
          <p>저장한 문제</p>
        </div>
        <div>
          <p>미해결 문제</p>
        </div>
      </div>
      <div class="profile">
        <p>직업/역할</p>
        <div>
          <p>데이터 사이언티스트, 데이터 분석가</p>
        </div>
        <p>링크</p>
        <div>
          <p>www.nadindind.com</p>
        </div>

      </div>
    </div>
<!--    <div class="right_item">-->
<!--      <div>-->
<!--        <div class="d-flex justify-sm-space-between">-->
<!--          <p class="font-weight-bold text-sm-h6 mt-1">My data</p>-->
<!--          <select class="select_box">-->
<!--            <option>최신순</option>-->
<!--          </select>-->
<!--        </div>-->
<!--        <div>-->
<!--          <p>아직 업로드한 데이터가 없네요.</p>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div>-->
<!--        <p class="font-weight-bold text-sm-h6 mt-1">활동</p>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
  name: "Mypage"
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
</style>