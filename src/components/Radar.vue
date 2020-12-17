<script>
import { Radar } from 'vue-chartjs'
export default {
  extends: Radar,
  props: ['radarData', 'options'],
  mounted () {
    this.renderChart(this.radarData, this.options)
  }
}
</script>
