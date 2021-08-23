<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,

  props: {
    label: {
      type: String
    },

    chartData: {
      type: Array
    },
   
    options: {
      type: Object,
      default: function () {
        return {responsive: true, maintainAspectRatio: false}
      },
    }
  },

  mounted() {
    const xData = this.chartData.map(item => item.xData);
    const yData = this.chartData.map(item => item.yData);

    this.renderChart({
      labels: xData,
      
      datasets: [{
        label: this.label,
        data: yData
      }]
    },this.options);
  }
}
</script>
