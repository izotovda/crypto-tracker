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
        return {
          layout: {
            padding: 5,
          },
          legend: {
            display: false  
          },  
          responsive: true,
          maintainAspectRatio: false}
      },
    }
  },

  // watch: {
  //   chartData() {
  //     this.renderLineChart();
  //   }
  // },

  mounted() {
    this.renderLineChart();
  },

  methods: {
    renderLineChart() {
      const xData = this.chartData.map(point => point.x);
      const yData = this.chartData.map(point => point.y);

      this.renderChart({
        labels: xData,

        datasets: [{
          label: this.label,
          data: yData,
          borderColor: "#49A078",
          backgroundColor: "rgba(73, 160, 120, 0.2)",
          borderWidth: 1.5
        }],
      }, this.options);     
    }
  }
}
</script>
