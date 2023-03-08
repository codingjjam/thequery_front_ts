<template>
  <div>
    <div>
      <div class="d-flex justify-sm-space-between">
        <p class="font-weight-bold text-sm-h6 ma-4 mb-3">
          My data
          <span class="material-icons mb-1" style="vertical-align: middle">
            chevron_right
          </span>
           푼 문제</p>
        <select class="select_box h-25 pa-2 pl-3">
          <option>최신순</option>
        </select>
      </div>
      <div class="w-100 border rounded-lg pa-3 text-center" v-if="item.length !== 0">
        <p class="text-grey-lighten-1 text-sm-body-2">아직 업로드한 데이터가 없네요.</p>
      </div>
      <div class="d-flex flex-wrap" v-else>
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
      <div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SolveData",
  data(){
    return{
      item: []
    }
  }
}
</script>

<style scoped>

</style>