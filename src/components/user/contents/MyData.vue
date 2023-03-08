<template>
  <div>
    <div>
      <div class="d-flex justify-sm-space-between">
        <p class="font-weight-bold text-sm-h6 ma-4 mb-3">My data</p>
        <select class="select_box h-25 pa-2 pl-3">
          <option>최신순</option>
        </select>
      </div>
      <div class="w-100 border rounded-lg pa-3 text-center">
        <p class="text-grey-lighten-1 text-sm-body-2">아직 업로드한 데이터가 없네요.</p>
      </div>
    </div>
    <div>
      <p class="font-weight-bold text-sm-h6 ma-4 mt-10">활동</p>
    </div>
    <div>
<!--      <calendar-heatmap :values="[{ date: '2018-9-22', count: 6 }]"/>-->
    </div>
  </div>
</template>

<script>
import { CalendarHeatmap } from 'vue3-calendar-heatmap'
export default {
  name: "MyData",
  components: {
    CalendarHeatmap
  },
}
</script>

<style scoped>
</style>