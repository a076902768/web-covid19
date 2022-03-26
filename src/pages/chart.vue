<template>
  <apexchart type="pie" width="380" :options="chartOptions" :series="series" />
</template>
<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  props: {
    title: String,
  },
  setup() {
    const series = reactive([]);

    const chartOptions = reactive({});

    const chartOptionsData = {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    Object.assign(series, [44, 55, 13, 43, 22]);

    Object.assign(chartOptions, chartOptionsData)

    return { series, chartOptions }
  }
})
</script>