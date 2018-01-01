<template>
  <div>
    <spinner></spinner> 
    <div>{{ msg }}</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Spinner from "./Spinner";
export default {
    name: "Home",
    data() {
      return {
        msg: "map page"
      };
    },
    created() {
      this.init()
    },
    methods: {
      init(){
        this.showLoading()
        setTimeout(()=>{
          this.hideLoading()
        },3000)
      },
      ...mapMutations({
        hideLoading: "hideLoading",
        showLoading: "showLoading"
      })
    },
    computed: {},
    components: {
      Spinner
    }
  };
</script>

