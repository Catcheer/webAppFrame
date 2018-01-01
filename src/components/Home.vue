<template>
  <div>
    <spinner></spinner> 
        <h2>Map <small>(with GeoJSON &amp; image converter)</small></h2>
 
     
         <h2>Pie chart <small>(with action dispatch)</small></h2>
    <figure>
      <chart
        :options="pie"
        ref="pie"
        auto-resize
      />
    </figure>

  </div>
</template>

<script>
import ECharts from "vue-echarts/components/ECharts.vue";

import 'echarts/lib/chart/pie'

import pie from '../data/pie'
import { mapMutations } from "vuex";
import Spinner from "./Spinner";
import Http from "../http/http";



export default {
  name: "Home",
  data() {
    return {pie};
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      // this.showLoading();
      // Http.get('http://localhost:3000/').then((res)=>{
      //   this.hideLoading();
      //   console.log(res)
      // }).catch((err)=>{
      //   console.log(err)
      // })
    },
    ...mapMutations({
      hideLoading: "hideLoading",
      showLoading: "showLoading"
    })
  },
  computed: {
    scoreRadar() {
      return this.$store.getters.scoreRadar;
    }
  },
  components: {
    Spinner,
    chart: ECharts
  }
};
</script>

