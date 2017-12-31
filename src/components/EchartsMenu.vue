<template>
  <ul>
    
       <router-link class="font_28 padding-y_10" v-for="item in menuArr" v-bind:key="item"
       :to="{name:'content',params: { id: item }}" tag="li">{{item}}</router-link>
   
  </ul>
</template>


<script>
  export default {
    name: "EchartsMenu",
    data() {
      return {
           menuArr: ["指标1", "指标2", "指标3"]
      };
    },
    computed: {}
  };

</script>
