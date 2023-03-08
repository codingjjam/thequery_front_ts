<template>
  <div class="main_container">
    <!--  메인배너  -->
    <div class="main_banner">
      <div>
        <h1 class="mb-5 font-weight-bold nanum_font">누구나 필요한 데이터를 분석할 수 있게</h1>
        <p class="mb-5">Explore, analyze, and share quality data.
          Learn more about data types, <br>creating, and collaborating.
        </p>
        <v-btn variant="outlined">
          <v-icon icon="mdi-plus" class="bg-red rounded-circle ma-1" />
          upload your Data
        </v-btn>
      </div>
      <div>
        <img src="/img/main_logo.svg" class="ml-10">
      </div>
    </div>
    <!--  !메인배너  -->
    <!-- 검색버튼 -->
    <div class="d-flex mt-10 justify-lg-space-between">
      <div class="d-flex">
        <div>
          <button type="button" class="btn_st_1 mr-5">
            <img src="/img/check.png" class="mr-1">전체
          </button>
        </div>
        <div class="d-flex">
          <button type="button" class="btn_st_2">경제</button>
          <button type="button" class="btn_st_2">사회</button>
          <button type="button" class="btn_st_2">의학</button>
          <button type="button" class="btn_st_2 mr-0">금융</button>
        </div>
        <div class="btn_line"></div>
        <div class="d-flex">
          <button type="button" class="btn_st_3">
            <img src="/img/line_1.png" class="mr-2">로우
          </button>
          <button type="button" class="btn_st_3">
            <img src="/img/line_2.png" class="mr-2">미디엄
          </button>
          <button type="button" class="btn_st_3">
            <img src="/img/line_3.png" class="mr-2">하이
          </button>
        </div>
      </div>
      <div>
        <select class="select_box">
          <option>인기순<v-icon icon="mdi-thumb-down" /></option>
        </select>
      </div>
    </div>
    <!-- !검색버튼 -->
    <p class="text-blue-grey-lighten-2 ma-3 mt-5">총 23</p>
    <!-- 카드 -->
    <div class="d-flex flex-wrap">
      <div class="main_card">
        <p>쇼핑몰을 방문하는 사용자 중에서 메인타겟이 되어야 할 대상이 뭘까요?</p>
        <div class="mt-5 d-flex justify-sm-space-between align-center">
          <ul>
            <li class="d-flex align-content-center mb-2">
              <span class="material-icons mr-2">hub</span>
              54 methods</li>
            <li class="d-flex align-content-center mb-2">
              <span class="material-icons mr-2">account_circle</span>
              leeseongheyon</li>
            <li class="d-flex align-content-center">
              <span class="material-icons mr-2">save</span>
              425KB
            </li>
          </ul>
          <span class="material-icons bg-amber-accent-3 text-white rounded-circle pa-1 text-center"
                style="width: 35px; height: 35px">
            north_east
          </span>
        </div>
      </div>
      <div class="main_card">
        <p>쇼핑몰을 방문하는 사용자 중에서 메인타겟이 되어야 할 대상이 뭘까요?</p>
        <div class="mt-5 d-flex justify-sm-space-between align-center">
          <ul>
            <li class="d-flex align-content-center mb-2">
              <span class="material-icons mr-2">hub</span>
              54 methods</li>
            <li class="d-flex align-content-center mb-2">
              <span class="material-icons mr-2">account_circle</span>
              leeseongheyon</li>
            <li class="d-flex align-content-center">
              <span class="material-icons mr-2">save</span>
              425KB
            </li>
          </ul>
          <span class="material-icons bg-amber-accent-3 text-white rounded-circle pa-1 text-center"
                style="width: 35px; height: 35px">
            north_east
          </span>
        </div>
      </div>
      <div class="main_card">
        <p>쇼핑몰을 방문하는 사용자 중에서 메인타겟이 되어야 할 대상이 뭘까요?</p>
        <div class="mt-5 d-flex justify-sm-space-between align-center">
          <ul>
            <li class="d-flex align-content-center mb-2">
              <span class="material-icons mr-2">hub</span>
              54 methods</li>
            <li class="d-flex align-content-center mb-2">
              <span class="material-icons mr-2">account_circle</span>
              leeseongheyon</li>
            <li class="d-flex align-content-center">
              <span class="material-icons mr-2">save</span>
              425KB
            </li>
          </ul>
          <span class="material-icons bg-amber-accent-3 text-white rounded-circle pa-1 text-center"
                style="width: 35px; height: 35px">
            north_east
          </span>
        </div>
      </div>
      <div class="main_card">
        <p>쇼핑몰을 방문하는 사용자 중에서 메인타겟이 되어야 할 대상이 뭘까요?</p>
        <div class="mt-5 d-flex justify-sm-space-between align-center">
          <ul>
            <li class="d-flex align-content-center mb-2">
              <span class="material-icons mr-2">hub</span>
              54 methods</li>
            <li class="d-flex align-content-center mb-2">
              <span class="material-icons mr-2">account_circle</span>
              leeseongheyon</li>
            <li class="d-flex align-content-center">
              <span class="material-icons mr-2">save</span>
              425KB
            </li>
          </ul>
          <span class="material-icons bg-amber-accent-3 text-white rounded-circle pa-1 text-center"
                style="width: 35px; height: 35px">
            north_east
          </span>
        </div>
      </div>
      <div class="main_card">
        <p>쇼핑몰을 방문하는 사용자 중에서 메인타겟이 되어야 할 대상이 뭘까요?</p>
        <div class="mt-5 d-flex justify-sm-space-between align-center">
          <ul>
            <li class="d-flex align-content-center mb-2">
              <span class="material-icons mr-2">hub</span>
              54 methods</li>
            <li class="d-flex align-content-center mb-2">
              <span class="material-icons mr-2">account_circle</span>
              leeseongheyon</li>
            <li class="d-flex align-content-center">
              <span class="material-icons mr-2">save</span>
              425KB
            </li>
          </ul>
          <span class="material-icons bg-amber-accent-3 text-white rounded-circle pa-1 text-center"
                style="width: 35px; height: 35px">
            north_east
          </span>
        </div>
      </div>
      <div class="main_card">
        <p>쇼핑몰을 방문하는 사용자 중에서 메인타겟이 되어야 할 대상이 뭘까요?</p>
        <div class="mt-5 d-flex justify-sm-space-between align-center">
          <ul>
            <li class="d-flex align-content-center mb-2">
              <span class="material-icons mr-2">hub</span>
              54 methods</li>
            <li class="d-flex align-content-center mb-2">
              <span class="material-icons mr-2">account_circle</span>
              leeseongheyon</li>
            <li class="d-flex align-content-center">
              <span class="material-icons mr-2">save</span>
              425KB
            </li>
          </ul>
          <span class="material-icons bg-amber-accent-3 text-white rounded-circle pa-1 text-center"
                style="width: 35px; height: 35px">
            north_east
          </span>
        </div>
      </div>
      <div class="main_card">
        <p>쇼핑몰을 방문하는 사용자 중에서 메인타겟이 되어야 할 대상이 뭘까요?</p>
        <div class="mt-5 d-flex justify-sm-space-between align-center">
          <ul>
            <li class="d-flex align-content-center mb-2">
              <span class="material-icons mr-2">hub</span>
              54 methods</li>
            <li class="d-flex align-content-center mb-2">
              <span class="material-icons mr-2">account_circle</span>
              leeseongheyon</li>
            <li class="d-flex align-content-center">
              <span class="material-icons mr-2">save</span>
              425KB
            </li>
          </ul>
          <span class="material-icons bg-amber-accent-3 text-white rounded-circle pa-1 text-center"
                style="width: 35px; height: 35px">
            north_east
          </span>
        </div>
      </div>
      <div class="main_card">
        <p>쇼핑몰을 방문하는 사용자 중에서 메인타겟이 되어야 할 대상이 뭘까요?</p>
        <div class="mt-5 d-flex justify-sm-space-between align-center">
          <ul>
            <li class="d-flex align-content-center mb-2">
              <span class="material-icons mr-2">hub</span>
              54 methods</li>
            <li class="d-flex align-content-center mb-2">
              <span class="material-icons mr-2">account_circle</span>
              leeseongheyon</li>
            <li class="d-flex align-content-center">
              <span class="material-icons mr-2">save</span>
              425KB
            </li>
          </ul>
          <span class="material-icons bg-amber-accent-3 text-white rounded-circle pa-1 text-center"
                style="width: 35px; height: 35px">
            north_east
          </span>
        </div>
      </div>
    </div>
    <!-- !카드 -->
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Main",

  props: ['setNav'],

  data(){
     return {

     }
  },

  mounted() {
    this.setNav('LOGIN')
  }
})
</script>

<style scoped>
.main_banner {
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
}

</style>