<template>
  <div>
      假装看到了图标{{item}}
  </div>
</template>

<script>
  export default {
    name: "EchartsContent",
    data() {
      return {
         
      };
    },
    computed: {
        item(){
            return this.$route.params.id
        }
    }
  };

</script>
